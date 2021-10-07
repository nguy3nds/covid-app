import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: (props) => {
    if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
    if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
    else return { borderLeft: '5px solid gray' }
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  count: {
    fontWeight: 'bold',
    fontSize: 18
  }
}

export default function HighlightCard({ title, count, type }) {
  const style = useStyle({type});



  return (
    <Card className={style.wrapper }>
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
