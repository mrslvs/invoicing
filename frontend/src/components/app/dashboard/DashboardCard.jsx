import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'

const InvoiceDash = ({ children }) => {
    return (
        <Paper elevation={5} sx={{}}>
            <Container>{children}</Container>
        </Paper>
    )
}

export default InvoiceDash
