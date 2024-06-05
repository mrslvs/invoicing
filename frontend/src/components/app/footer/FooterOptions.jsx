import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'
import ActiveComponentContext from '../../../context/ActiveComponentProvider'
import { useContext, useState } from 'react'

const FooterOptions = ({
    canSubmit,
    setSubmitted,
    additionalContentLeft,
    additionalContentRight,
}) => {
    const { setActiveComponent } = useContext(ActiveComponentContext)
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false)

    const handleSubmit = () => {
        console.log(submitButtonClicked)
        setSubmitButtonClicked(true)
        setSubmitted(true)
        console.log(submitButtonClicked)
    }

    const buttonDisabled = !canSubmit || submitButtonClicked

    return (
        <Container>
            <Stack direction="row" justifyContent="space-between">
                <div>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => setActiveComponent('dashboard')}
                    >
                        Back to Dashboard
                    </Button>
                    {additionalContentLeft}
                </div>
                <div>
                    {additionalContentRight}
                    {/* <Button variant="contained" disabled={canSubmit ? false : true} onClick={() => handleSubmit}> */}
                    <Button
                        variant="contained"
                        disabled={buttonDisabled}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </Button>
                </div>
            </Stack>
        </Container>
    )
}

export default FooterOptions
