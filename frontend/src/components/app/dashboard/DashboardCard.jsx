import Paper from '@mui/material/Paper'
import { Container, Typography } from '@mui/material'

const DashboardCard = ({ children }) => {
    return (
        <Paper elevation={4} sx={{}}>
            <Container>{children}</Container>
        </Paper>
    )
}

export default DashboardCard
