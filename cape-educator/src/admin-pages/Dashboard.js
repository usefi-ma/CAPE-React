import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// ----------------------------------------------------------------------

export default function Dashboard() {
  const theme = useTheme();
  //const notify = () => toast('Wow so easy!');
  // const location = useLocation();
  // const user = location.state.user;
  // const userData = JSON.parse(localStorage.getItem('sessionData'));

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard
        </Typography>
        {/* <button onClick={notify}>Notify!</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ToastContainer /> */}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Conferences"
              total={10}
              icon={'ant-design:fund-projection-screen-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Executives"
              total={20}
              color="info"
              icon={'ant-design:fork-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Researches"
              total={4}
              color="warning"
              icon={'ant-design:file-text-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={1}
              color="error"
              icon={'ant-design:team-outlined'}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
