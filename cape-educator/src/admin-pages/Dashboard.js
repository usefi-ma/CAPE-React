import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,Avatar
} from "@mui/material";

import { styled, alpha } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import { Grid, Container } from "@mui/material";

// sections
import { AppWidgetSummary } from "../sections/@dashboard/app";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
// ----------------------------------------------------------------------

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5
}));

export default function Dashboard() {
  const theme = useTheme();
  const notify = () => toast("Wow so easy!");

  const location = useLocation();
  const user = location.state.user;

  return (
    <>
      <Box sx={{ my: 1.5, px: 0 }}>
        <Link underline="none">
          <StyledAccount>
            {/* <Avatar src={account.photoURL} alt="photoURL" /> */}

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.FullName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {user.Email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
         Dashboard
        </Typography>
        <button onClick={notify}>Notify!</button>
        <br></br><br></br><br></br><br></br><br></br>
        <ToastContainer />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Conferences"
              total={10}
              icon={"ant-design:fund-projection-screen-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Executives"
              total={20}
              color="info"
              icon={"ant-design:fork-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Researches"
              total={4}
              color="warning"
              icon={"ant-design:file-text-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={1}
              color="error"
              icon={"ant-design:team-outlined"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
