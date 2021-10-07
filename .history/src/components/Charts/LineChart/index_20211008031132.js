import React from "react";
import Highchart from "highcharts";
import HighchartsReact from "highcharts-react-official";

const generateOption = () => {
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
  };
};

export default function LineChart() {
  return <div />;
}
