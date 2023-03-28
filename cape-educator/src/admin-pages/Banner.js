import {
  Card,
  Stack,
  Container,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Banner() {

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
        </Stack>
        <Card>
        <Box sx={{ flexGrow: 1 }}  gap={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}  p={2}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}  p={2}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}  p={2}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}  p={2}>
          <Item>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
        
        </Card>
      </Container>
     
    </>
  );
}
