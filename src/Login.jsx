import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { SERVICE_URL } from "./constant";

export default function Login() {
  const loginGoogle = () => {
    window.location.href = `https://oauth-poc-be-production.up.railway.app/oauth2/authorization/google`;
  };

  const loginGithub = () => {
    window.location.href = `https://oauth-poc-be-production.up.railway.app/oauth2/authorization/github`;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 6,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          Welcome
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Log in using one of the following providers
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={loginGoogle}
            sx={{
              bgcolor: "#fff",
              color: "rgba(0,0,0,0.87)",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#f1f1f1",
              },
            }}
          >
            Login with Google
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
              "&:hover": {
                bgcolor: "#333",
              },
            }}
          >
            Login with GitHub
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
