import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Typography,
  Button,
  CircularProgress,
  Paper,
  Fade,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SERVICE_URL } from "./constant";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${SERVICE_URL}/api/user/me`, { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (user === undefined) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(230,240,255,0.4)",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (user === null) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#fafafa",
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Not Logged In
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please log in from the main screen.
        </Typography>
      </Box>
    );
  }

  const displayName = user.name || user.login || "User";
  const avatar = user.picture || user.avatar_url;

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(135deg, rgba(219,233,255,0.8), rgba(245,248,255,1))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Fade in timeout={700}>
        <Paper
          elevation={6}
          sx={{
            p: 6,
            pt: 5,
            borderRadius: 1,
            maxWidth: 450,
            width: "100%",
            textAlign: "center",
            background: "#ffffff",
            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 80,
              color: "#4CAF50",
              mb: 2,
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
            }}
          />

          <Avatar
            src={avatar}
            sx={{
              width: 120,
              height: 120,
              mb: 2.5,
              border: "4px solid #fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
          >
            Welcome, {displayName}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              fontSize: "1.05rem",
              letterSpacing: "0.2px",
            }}
          >
            You're now authenticated securely.
          </Typography>

          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              borderRadius: 1,
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(255,0,0,0.2)",
              "&:hover": {
                boxShadow: "0 6px 16px rgba(255,0,0,0.25)",
              },
            }}
            onClick={() => (window.location.href = `${SERVICE_URL}/logout`)}
          >
            Logout
          </Button>
        </Paper>
      </Fade>
    </Box>
  );
}
