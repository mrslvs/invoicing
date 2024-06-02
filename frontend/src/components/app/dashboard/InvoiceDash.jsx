import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import '../../../assets/styles/app/chart.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

const InvoiceDash = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        x: {
            ticks: {
                max: 12, // Index of the last data point
                min: 0, // Display labels starting from the first data point
            },
        },
    }

    const labels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31,
    ]

    const dataToUse = [1, 2, 4, 5, 34, 21, 12, 1, 2, 3]

    const data = {
        labels: labels.slice(0, dataToUse.length),
        // labels,
        datasets: [
            {
                data: dataToUse,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <>
            <Line options={options} data={data} />
            {/* <LineChart
                xAxis={[
                    {
                        data: [
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                        ],
                        max: 31,
                    },
                ]}
                series={[
                    {
                        curve: 'monotoneX',
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={400}
                height={200}
                sx={{ backgroundColor: 'grey', marginTop: '1rem' }}
            /> */}
            <Typography variant={'kpi'} sx={{ color: 'primary.main' }}>
                5
            </Typography>
            <Typography variant={'text'}>Invoices created this month</Typography>
        </>
    )
}

export default InvoiceDash
