import React, { useEffect, useState } from "react";
import Highchart from "highcharts";
import HighchartsReact from "highcharts-react-official";

const generateOption = (data) => {
  const categories = [];
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAixis: {
      categories: categories,
      crosshair: true,
    },
    color: ["#F35858"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span>',
      pointFormat:
        '<tr><td td style="color:{series.color};padding:0" > { series.name }: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr> ',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng ca nhiễm",
        data: data.map((item) => item.Confimed),
      },
    ],
  };
};

export default function LineChart({ data }) {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(generateOption(data));
  }, [data]);

  return <HighchartsReact higcharts={Highchart} options={options} />;
}
