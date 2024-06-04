import { Typography } from '@mui/material'

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
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    }

    const labels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31,
    ]

    const dataToUse = [1, 2, 4, 5, 34, 21, 12, 1, 2, 3, 1, 2, 3, 1, 2, 3]

    const data = {
        labels: labels.slice(0, dataToUse.length),
        datasets: [
            {
                data: dataToUse,
                borderColor: '#24B2EB',
                // backgroundColor: 'rgba(155, 99, 132, 0.5)',
                pointRadius: 0,
            },
        ],
    }

    return (
        <>
            <div className="h-[12rem] mr-auto ml-auto mt-5">
                <Line options={options} data={data} />
            </div>
            <Typography variant={'kpi'} sx={{ color: 'primary.main', marginRight: '1rem' }}>
                5
            </Typography>
            <Typography variant={'text'}>Invoices created this month</Typography>
        </>
    )
}

export default InvoiceDash