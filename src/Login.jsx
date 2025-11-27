import React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Paper,
  Fade,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const loginGoogle = () => {
    window.location.href =
      "https://oauth-poc-be-production.up.railway.app/oauth2/authorization/google";
  };

  const loginGithub = () => {
    window.location.href =
      "https://oauth-poc-be-production.up.railway.app/oauth2/authorization/github";
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(135deg, rgba(219,233,255,0.6) 0%, rgba(245,248,255,0.9) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in timeout={700}>
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 1,
            maxWidth: 420,
            width: "100%",
            background: "#ffffff",
            boxShadow: "0 8px 26px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#1a1a1a",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
            }}
          >
            Continue using your preferred provider
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={loginGoogle}
              sx={{
                borderColor: "#d0d0d0",
                color: "#000",
                backgroundColor: "#fff",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                py: 1.2,
                "&:hover": {
                  bgcolor: "#f7f7f7",
                  borderColor: "#c0c0c0",
                },
              }}
            >
              Sign in with Google
            </Button>

            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              onClick={loginGithub}
              sx={{
                bgcolor: "#24292f",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                py: 1.2,
                "&:hover": {
                  bgcolor: "#000",
                },
              }}
            >
              Sign in with GitHub
            </Button>
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontSize: "13px" }}
          >
            By continuing, you agree to our Terms & Privacy Policy.
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
}
