import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
// import { LineChart } from '@mui/x-charts/LineChart'

const Dashboard = () => {
    return (
        <Container>
            <Paper elevation={5} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant={'kpi'} sx={{ color: 'primary.main' }}>
                            5
                        </Typography>
                        <Typography variant={'text'}>Invoices created this month</Typography>
                    </Grid>
                    <Grid xs={6}>
                        {/* <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        /> */}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Dashboard
