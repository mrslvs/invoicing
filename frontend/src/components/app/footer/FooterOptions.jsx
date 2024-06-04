import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'
import ActiveComponentContext from '../../../context/ActiveComponentProvider'
import { useContext } from 'react'

const FooterOptions = ({ canSubmit }) => {
    const { setActiveComponent } = useContext(ActiveComponentContext)

    return (
        <Container>
            <Stack direction="row" justifyContent="space-between">
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setActiveComponent('dashboard')}
                >
                    Back to Dashboard
                </Button>
                <Button variant="contained" disabled={canSubmit ? false : true}>
                    Submit
                </Button>
            </Stack>
        </Container>
    )
}

export default FooterOptions
