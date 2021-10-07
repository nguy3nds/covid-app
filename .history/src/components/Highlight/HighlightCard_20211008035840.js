import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function HighlightCard({ title, count }) {
  return (
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
  );
}
