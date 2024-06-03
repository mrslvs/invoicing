// import Box from '@mui/material/Box'
// import { Container } from '@mui/material'
// import Card from '@mui/material/Card'
// import Chip from '@mui/material/Chip'
// import Stack from '@mui/material/Stack'
// import Divider from '@mui/material/Divider'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'

// const ActionItems = () => {
//     return (
//         <>
//             <Box sx={{ p: 2 }}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="center">
//                     <Typography gutterBottom variant="h5" component="div">
//                         Toothbrush
//                     </Typography>
//                     <Typography gutterBottom variant="h6" component="div">
//                         $4.50
//                     </Typography>
//                 </Stack>
//                 <Typography color="text.secondary" variant="body2">
//                     Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just
//                     down the hall.
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="center">
//                     <Typography gutterBottom variant="h5" component="div">
//                         Toothbrush
//                     </Typography>
//                     <Typography gutterBottom variant="h6" component="div">
//                         $4.50
//                     </Typography>
//                 </Stack>
//                 <Typography color="text.secondary" variant="body2">
//                     Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just
//                     down the hall.
//                 </Typography>
//             </Box>
//         </>
//     )
// }

// {[0, 1, 2, 3, 4].map((sectionId) => (
//     <li key={`section-${sectionId}`}>
//         <ul>
//             {/* <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader> */}
//             {[0, 1, 2].map((item) => (
//                 <ListItem key={`item-${sectionId}-${item}`}>
//                     <ListItemText primary={`Item ${item}`} />
//                 </ListItem>
//             ))}
//         </ul>
//     </li>
// ))}

// export default ActionItems

import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
// import ListSubheader from '@mui/material/ListSubheader'
import { Typography } from '@mui/material'

const ActionItems = ({ actionItems }) => {
    const actions = [
        '2fa',
        'set up acc',
        '2fa',
        'set up acc',
        '2fa',
        'set up acc',
        '2fa',
        'set up acc',
        '2fa',
        'set up acc',
        '2fa',
        'set up acc',
    ]
    return (
        <>
            <Typography variant={'text'} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                Action items:
            </Typography>
            <List
                sx={{
                    // bgcolor: 'background.paper',
                    overflow: 'auto',
                    maxHeight: '15rem',
                    border: '1px solid black',
                }}
            >
                {actions.map((item) => (
                    <ListItem
                        key={item}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'secondary.main',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => console.log('clicked')}
                    >
                        <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ActionItems
