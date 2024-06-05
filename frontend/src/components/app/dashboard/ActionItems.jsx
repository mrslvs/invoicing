import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Typography } from '@mui/material'
import useAuth from '../../../hooks/useAuth'
import axiosInstance from '../../../api/axiosInstance'
import { useEffect } from 'react'
import { useState } from 'react'
import useTranslation from '../../../hooks/useTranslation'
import ActiveComponentContext from '../../../context/ActiveComponentProvider'
import { useContext } from 'react'

const ActionItems = ({}) => {
    const { t } = useTranslation()
    const { setActiveComponent } = useContext(ActiveComponentContext)

    const { user, setUser } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [actionItems, setActionItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/app/dash/actions', null, {
                    withCredentials: true,
                })
                setActionItems(response.data.actionItems)
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
                if (err.response && err.response.status === 401) navigate('/')
                console.log(err)
            }
        }

        fetchData()
    }, [])

    const handleActionClick = (actionItem) => {
        console.log(actionItem)
        setActiveComponent(actionItem)
    }

    return (
        <>
            <Typography variant={'text'} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                Action items:
            </Typography>
            <List
                sx={{
                    // bgcolor: 'background.paper',
                    overflow: 'auto',
                    maxHeight: '15rem',
                    border: '1px solid black',
                }}
            >
                {isLoading ? (
                    <ListItem>
                        <ListItemText primary={`Loading...`} />
                    </ListItem>
                ) : (
                    actionItems.map((item) => (
                        <ListItem
                            key={item}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'secondary.main',
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => handleActionClick(item)}
                        >
                            <ListItemText primary={`${t(item)}`} />
                        </ListItem>
                    ))
                )}
            </List>
        </>
    )
}

export default ActionItems
