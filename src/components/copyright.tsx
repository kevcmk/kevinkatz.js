import React from "react"; // Good practice for library according to GPT
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";

export default function Copyright({name, sx}: { name: string, sx?: SxProps<Theme> }) {
  return (
    <Typography
      sx={sx}
      align="center"
    >
      {"Copyright © "}
      {name} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
