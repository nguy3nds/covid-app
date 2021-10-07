import React from "react";
import { Grid } from "@material-ui/core";

export default function Summary() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={[]}></LineChart>
      </Grid>
      <Grid item sm={4} xs={12}></Grid>
    </Grid>
  );
}
