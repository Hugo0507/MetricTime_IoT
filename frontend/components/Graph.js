import { Line } from "react-chartjs-2";

export default function Graph({ dataCollection }) {
  return (
    <div className="canvas-container mx-auto">
      <Line
        data={{
          labels: dataCollection.labels,
          datasets: [
            {
              lineTension: 0.4,
              backgroundColor: "#ffb1c199",
              borderColor: "#ff6384",
              borderWidth: 2,
              borderJoinStyle: "round",
              fill: true,
              pointRadius: 3,
              pointBorderColor: "#ff6384",
              pointBackgroundColor: "#ffb1c1",
              pointBorderWidth: 3,
              data: dataCollection.data,
            },
          ],
        }}
        width={20}
        height={10}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
