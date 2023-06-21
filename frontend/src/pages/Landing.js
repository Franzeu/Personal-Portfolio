// Importing packages/libraries
import React from "react";

// Importing MUI
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

// Importing files
import theme from "../theme/theme.js";
import "./Landing.css";

export default function home() {
  return (
    <ThemeProvider theme={theme}>
      <Box marginTop={20}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            {" "}
            <div style={{ display: "flex" }}>
              <Typography
                color="#6C99BB"
                sx={{ fontSize: 36, fontWeight: 500 }}
                noWrap
              >
                def
              </Typography>
              <Typography
                color="#B4D273"
                sx={{ fontSize: 36, fontWeight: 500, marginLeft: 2.5 }}
                noWrap
              >
                {" "}
                franz_eugenio
              </Typography>
              <Typography
                color="#D6D6D6"
                sx={{ fontSize: 36, fontWeight: 500 }}
                noWrap
              >
                ():
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{ display: "flex" }}>
              <Typography
                color="#6C99BB"
                sx={{ fontSize: 20, fontWeight: 500 }}
                noWrap
              >
                print
              </Typography>
              <Typography
                color="#D6D6D6"
                sx={{ fontSize: 20, fontWeight: 500 }}
                noWrap
              >
                (
              </Typography>
              <Typography
                color="#E5B567"
                sx={{ fontSize: 20, fontWeight: 500 }}
                noWrap
              >
                'Computer Science Graduate'
              </Typography>
              <Typography
                color="#D6D6D6"
                sx={{ fontSize: 20, fontWeight: 500 }}
                noWrap
              >
                )
              </Typography>
            </div>
          </Grid>

          <Grid item xs={3} marginTop={10}>
            <Typography color="#D6D6D6" sx={{ fontSize: 20, fontWeight: 500 }}>
              I am a enthusiastic computer science student who enjoys learning
              about web development.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
