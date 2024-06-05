import React from 'react'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import useTranslation from '../../../hooks/useTranslation'
import { Container, Typography, Paper } from '@mui/material'
import FooterOptions from '../footer/FooterOptions'
import axiosInstance from '../../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const TwoFactorAuthAction = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        const submit = async () => {
            if (submit) {
                try {
                    const response = await axiosInstance.post(
                        '/app/twofa',
                        { phone: phone },
                        {
                            withCredentials: true,
                        }
                    )
                    console.log(response)
                } catch (err) {
                    if (err.response && err.response.status === 401) navigate('/')
                }
            }
        }
        submit()
    }, [submit])

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
                <Typography variant="h3">Complete 2 Factor Authentication</Typography>
                <Paper elevation={4} sx={{ m: 1, p: 4 }}>
                    <Typography sx={{ marginBottom: '1rem' }}>
                        By allowing 2 Factor Authentication you significantly increase the security
                        of your account.
                    </Typography>
                    <TextField
                        id="phone"
                        autoFocus={true}
                        label={t('home-input-placeholder-phone')}
                        variant="outlined"
                        onChange={(e) => setPhone(e.target.value)}
                        color={isPhoneValid ? 'success' : 'primary'}
                        sx={{ width: '15rem' }}
                    />
                </Paper>
                <FooterOptions canSubmit={isPhoneValid} setSubmitted={setSubmit} />
            </Container>
        </div>
    )
}

export default TwoFactorAuthAction
