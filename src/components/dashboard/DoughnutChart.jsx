import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = () => {
  const total = 2000;
  const consumed = 20000;
  const remaining = 3000;

  const data = {
    labels: ["Failed Tests", "Passed Tests", "Pending Tests"],
    datasets: [
      {
        data: [consumed, remaining, total],
        backgroundColor: [
          "#EEA247",
          "#58FF33",
          "#6833FF", // Consumed color
          // Remaining color
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = " 40px Poppins"; // Font for "52"
      ctx.fillStyle = "#00373A";
      ctx.textAlign = "center";
      ctx.fillText(
        20, // Draw "52" first
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 5
      );

      // Change font for "consumed"
      ctx.font = " 14px Poppins"; // Font for "consumed"
      ctx.fillStyle = "#D3D3D3"; // Color for "consumed"

      ctx.fillText(
        "Total Tests", // Draw "consumed" on the next line
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 25 // Adjust the y-coordinate for the next line
      );

      ctx.restore();
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter]}
      style={{ height: "120px" }}
    />
  );
};

export default DoughnutChart;
