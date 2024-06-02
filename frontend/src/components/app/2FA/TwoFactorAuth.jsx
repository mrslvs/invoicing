import React from 'react'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import useTranslation from '../../../hooks/useTranslation'
import { Box, Container, Typography, Paper } from '@mui/material'

const TwoFactorAuth = () => {
    const { t } = useTranslation()

    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(false)

    const serviceList = ['Service 1', 'Service 2', 'Service 3']

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
            {/* <TextInput
                label={t('home-input-placeholder-phone')}
                id={'phone'}
                type="text"
                isValid={isPhoneValid}
                onChange={(e) => setPhone(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            /> */}
            <TextField id="phone" label={t('home-input-placeholder-phone')} variant="outlined" />
            <Container>
                <Typography variant="h1">Hello World of MUI!</Typography>
                <Box>
                    {serviceList.map((service) => {
                        return (
                            <Paper elevation={3} sx={{ m: 1, p: 1 }}>
                                <Typography variant="h3">{service}</Typography>
                                <Typography>
                                    Some service text and more. Some service text and more. Some
                                    service text and more. Some service text and more. Some service
                                    text and more. Some service text and more. Some service text and
                                    more. Some service text and more.{' '}
                                </Typography>
                            </Paper>
                        )
                    })}
                </Box>
            </Container>
        </div>
    )
}

export default TwoFactorAuth
