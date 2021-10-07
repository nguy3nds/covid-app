import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: (props) => {
    if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
    if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
    else return { borderLeft: '5px solid gray' }
  }
}

export default function HighlightCard({ title, count, type }) {
  const style = useStyle({type});


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
