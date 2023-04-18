import PropTypes from "prop-types";

// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,Avatar
} from "@mui/material";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import Iconify from "../../../components/iconify";
//
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";
import account from "../../../_mock/account";
import Logout from "./Logout";
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------


const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        {/* <Box sx={{ my: 1.5, px: 2.5 }}>
        <Avatar src={account.photoURL} alt="photoURL" />
           
          </Box> */}

<div className="d-flex justify-content-between w-100 align-item-center">
      <Box sx={{ my: 1.5, px: 0 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <Logout></Logout>
      </div>
        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          {/* <NotificationsPopover /> */}
          {/* <AccountPopover /> */}

        
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
