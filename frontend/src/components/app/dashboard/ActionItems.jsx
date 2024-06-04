import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Typography } from '@mui/material'
import useAuth from '../../../hooks/useAuth'
import axiosInstance from '../../../api/axiosInstance'
import { useEffect } from 'react'
import { useState } from 'react'

const ActionItems = () => {
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
                const status = err.response?.status || 500
                setIsLoading(false)
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <Typography variant={'text'} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                Action items:
            </Typography>
            {isLoading ? (
                <Typography variant={'text'} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    Loading...
                </Typography>
            ) : (
                <List
                    sx={{
                        // bgcolor: 'background.paper',
                        overflow: 'auto',
                        maxHeight: '15rem',
                        border: '1px solid black',
                    }}
                >
                    {actionItems.map((item) => (
                        <ListItem
                            key={item}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'secondary.main',
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => console.log('clicked')}
                        >
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    )
}

export default ActionItems
