import React from "react"; // Good practice for library according to GPT
import Typography from "@mui/material/Typography";
import { Box, SxProps, Theme } from "@mui/material";

export default function Copyright({ name, sx }: { name: string, sx?: SxProps<Theme> }) {
  return (
    <Box
      component="span"
      sx={sx}
    >
      Copyright © {name} {new Date().getFullYear()}
    </Box>
  );
}
