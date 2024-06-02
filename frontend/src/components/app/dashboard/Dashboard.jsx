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

const Dashboard = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        {/* <Paper elevation={3}>Text number 1</Paper> */}
                        <InvoiceDash />
                    </Grid>
                    <Grid xs={6}>
                        <Paper elevation={3}>Text number 2</Paper>
                    </Grid>
                    <Grid xs={6}>
                        <Paper elevation={3}>Text number 3</Paper>
                    </Grid>
                    <Grid xs={6}>
                        <Paper elevation={3}>Text number 4</Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Dashboard
