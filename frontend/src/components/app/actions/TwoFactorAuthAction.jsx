import React from 'react'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import useTranslation from '../../../hooks/useTranslation'
import { Box, Container, Typography, Paper } from '@mui/material'

const TwoFactorAuthAction = () => {
    const { t } = useTranslation()

    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(false)

    useEffect(() => {
        setIsPhoneValid(isPhoneValidSlovakia(phone))
    }, [phone])

    const isPhoneValidSlovakia = (phone) => {
        let publicAndPagingNetwork = phone >= 901000000 && phone <= 919999999
        let publicNetwork = phone >= 940000000 && phone <= 959999999

        let output = !isNaN(phone) && (publicAndPagingNetwork || publicNetwork)
        return output
    }

    return (
        <div>
            <Container>
                <Typography variant="h2">Complete 2 Factor Authentication</Typography>
                <TextField
                    id="phone"
                    label={t('home-input-placeholder-phone')}
                    variant="outlined"
                    onChange={(c) => setPhone(c)}
                />
                <Paper elevation={4} sx={{ m: 1, p: 1 }}>
                    <Typography>
                        Allowing 2 Factor Authentication you significantly increase security of your
                        account.
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default TwoFactorAuthAction
