// import React from 'react';
// import axiosInstance from '../../../api/axiosInstance';

// const Dashboard = () => {
//     const getData = async () => {
//         try {
//             const data = await axiosInstance.get('/app', { withCredentials: 'true' });
//             console.log(data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <main>
//             <h1>Dashboard</h1>
//             <p>This is dashboard when an user has his role</p>
//             <button onClick={getData}>Press to get data from server</button>
//         </main>
//     );
// };

// export default Dashboard;

// import { Box, Container, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/material'
import InvoiceDash from './InvoiceDash'
import ActionItems from './ActionItems'
import DashboardCard from './DashboardCard'

const Dashboard = () => {
    return (
        // <Grid container spacing={2} sx={{ mr: '1rem', ml: '1rem', height: '100vh' }}>
        //     <Grid xs={6}>
        //         <DashboardCard>
        //             <InvoiceDash />
        //         </DashboardCard>
        //     </Grid>
        //     <Grid xs={6}>
        //         <DashboardCard>
        //             <ActionItems />
        //         </DashboardCard>
        //     </Grid>
        //     <Grid xs={6}>
        //         <DashboardCard>
        //             <ActionItems />
        //         </DashboardCard>
        //     </Grid>
        //     <Grid xs={6}>
        //         <DashboardCard>
        //             <ActionItems />
        //         </DashboardCard>
        //     </Grid>
        // </Grid>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 mr-4 ml-4 ">
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
        </main>
    )
}

export default Dashboard
