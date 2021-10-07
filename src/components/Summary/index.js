import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import LineChart from "../Charts/LineChart";
import HighMaps from "../Charts/HighMaps";
import { getMapDataByCountryId } from "../../apis/index";

export default function Summary({ countryId, report }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report}></LineChart>
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
}
