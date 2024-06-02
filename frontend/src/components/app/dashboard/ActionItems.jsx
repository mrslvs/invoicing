import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const ActionItems = () => {
    return (
        <>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Toothbrush
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        $4.50
                    </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just
                    down the hall.
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Toothbrush
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        $4.50
                    </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just
                    down the hall.
                </Typography>
            </Box>
        </>
    )
}

export default ActionItems
