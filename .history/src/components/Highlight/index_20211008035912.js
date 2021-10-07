import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report[report.length - 1];

  const summary = [
    {
      title: "Số ca nhiễm",
      const: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca khỏi",
      const: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      const: data.Deaths,
      type: "deaths",
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        {summary.map((item) => (
          <HighlightCard />
        ))}
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số ca mắc
            </Typography>
            <Typography component="span" variant="body2">
              3000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số ca khỏi
            </Typography>
            <Typography component="span" variant="body2">
              3000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số ca tử vong
            </Typography>
            <Typography component="span" variant="body2">
              3000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
