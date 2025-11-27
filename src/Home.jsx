import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SERVICE_URL } from "./constant";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${SERVICE_URL}/api/user/me`, {
        withCredentials: true,
      })
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
          bgcolor: "#fff",
        }}
      >
        <Typography variant="h5">Not Logged In</Typography>
      </Box>
    );
  }

  const displayName = user.name || user.login || "User";
  const avatar = user.picture || user.avatar_url;

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 90, color: "#4CAF50", mb: 2 }} />

      <Avatar src={avatar} sx={{ width: 110, height: 110, mb: 2 }} />

      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Welcome, {displayName}
      </Typography>

      <Typography
        variant="h6"
        sx={{ mt: 1, mb: 4, color: "text.secondary", fontWeight: 300 }}
      >
        Logged in successfully using Google OAuth
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ px: 4, py: 1.2, fontSize: "1rem" }}
        onClick={() => (window.location.href = `${SERVICE_URL}/logout`)}
      >
        Logout
      </Button>
    </Box>
  );
}
