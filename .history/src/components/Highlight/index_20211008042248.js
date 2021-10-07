import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report[report.length - 1];
  console.log("data", data);

  let summary = [];
  if (data !== undefined) {
    summary = [
      {
        title: "Số ca nhiễm",
        count: data.Confirmed,
        type: "confirmed",
      },
      {
        title: "Số ca khỏi",
        count: data.Recovered,
        type: "recovered",
      },
      {
        title: "Số ca tử vong",
        count: data.Deaths,
        type: "deaths",
      },
    ];
  }

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <HighlightCard title={item.title} count={item.count} type={item.type} />
      ))}
    </Grid>
  );
}
