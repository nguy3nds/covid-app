import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

export default function Highlight() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent component="p" variant="body2">
            Số ca mắc
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>So ca khoi</p>
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>So ca tu vong</p>
      </Grid>
    </Grid>
  );
}
