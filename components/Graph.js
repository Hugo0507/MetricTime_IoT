import { Line } from "react-chartjs-2";

const chartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: "Temperatura",
      lineTension: 0,
      backgroundColor: "#ffb1c1",
      borderColor: "#ff6384",
      borderWidth: 2,
      borderJoinStyle: "round",
      pointRadius: 5,
      pointBorderColor: "#ff6384",
      pointBackgroundColor: "#ffb1c1",
      pointBorderWidth: 3,
      data: [210, 250, 300, 310, 260, 255, 260, 280, 296, 291],
    },
  ],
};
export default function Graph() {
  return <Line data={chartData} width={100} height={50} />;
}
