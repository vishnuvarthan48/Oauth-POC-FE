import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import { SERVICE_URL } from "./constant";

export default function ProtectedRoute({ children }) {
  console.log("Camer");
  const [status, setStatus] = useState("loading"); // loading | authorized | unauthorized

  useEffect(() => {
    axios
      .get(`${SERVICE_URL}/api/user/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) setStatus("authorized");
        else setStatus("unauthorized");
      })
      .catch(() => setStatus("unauthorized"));
  }, []);

  if (status === "loading") {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (status === "unauthorized") {
    return <Navigate to="/" replace />;
  }

  return children;
}
