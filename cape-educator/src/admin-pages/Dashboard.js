import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

// sections
import { AppWidgetSummary } from "../sections/@dashboard/app";
// ----------------------------------------------------------------------

export default function Dashboard() {
  const location = useLocation();
  const user = location.state.user;
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {user.FullName}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Conferences"
              total={10}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Executives"
              total={20}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Researches"
              total={4}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={1}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
