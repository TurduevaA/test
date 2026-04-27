import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { heIL } from "@mui/material/locale";

const COLORS = {
  darkGreen: "#004F49",
  lightGray: "#F5F7F6",
  border: "#E0E0E0",
  textGray: "#6B7280",
};

const Registr = () => {
  return (
    <Box
      sx={{
        height: "521px",
        width: "544",
        backgroundColor: COLORS.lightGray,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "36px",
            color: COLORS.darkGreen,
          }}
        >
          FB17/
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Sign In
          </Typography>

          <Typography
            sx={{ color: COLORS.textGray, mt: 1, mb: 3 }}
          >
            Welcome back, you’ve been missed!
          </Typography>

          <Stack direction="row" spacing={2} mb={3}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ 
                textTransform: "none" ,
                color: "#718096",
                height: "56px",
                width: "254px", 
                borderRadius: "8px",
                borderColor: "##718096"
              }}
            >
              Sign With Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ 
                textTransform: "none",
                color: "#718096",
                height: "56px",
                width: "254px", 
                borderRadius: "8px"
            }}
            >
              Sign With Apple
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ color: COLORS.textGray }}>OR</Typography>
            <Divider sx={{ flex: 1 }} />
          </Stack>

          <Stack spacing={2}>
            <TextField sx={{
                height: "56px",
                width: "521px",
                borderRadius: "12px"
            }}
              fullWidth
              placeholder="Your Email"
              variant="outlined"
            />

            <TextField sx={{
                height: "56px",
                width: "521px",
                borderRadius: "12px"
            }}
              fullWidth
              placeholder="Password"
              type="password"
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Stack direction="row" alignItems="center">
              <Checkbox defaultChecked size="small" />
              <Typography fontSize="14px">Remember Me</Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: "14px",
                color: COLORS.darkGreen,
                cursor: "pointer",
              }}
            >
              Forget Password?
            </Typography>
          </Stack>

          <Button
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: COLORS.darkGreen,
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#0c3f38",
              },
            }}
          >
            Login
          </Button>

          <Typography mt={3} color={COLORS.textGray}>
            Don’t have an account?{" "}
            <span style={{ color: COLORS.darkGreen, cursor: "pointer" }}>
              Sign Up
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Registr;