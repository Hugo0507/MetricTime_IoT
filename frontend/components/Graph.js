import { Line } from "react-chartjs-2";

const chartData = {
  labels: [
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
  ],
  datasets: [
    {
      label: "Temperatura",
      lineTension: 0.4,
      backgroundColor: "#ffb1c199",
      borderColor: "#ff6384",
      borderWidth: 2,
      borderJoinStyle: "round",
      pointRadius: 3,
      pointBorderColor: "#ff6384",
      pointBackgroundColor: "#ffb1c1",
      pointBorderWidth: 3,
      data: [
        210,
        250,
        300,
        310,
        315,
        260,
        255,
        260,
        280,
        270,
        271,
        273,
        274,
        296,
        291,
      ],
    },
  ],
};
export default function Graph() {
  return (
    <div className="canvas-container mx-auto">
      <Line
        data={chartData}
        width={20}
        height={10}
        options={{
          maintainAspectRatio: true,
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}
