import { useEffect, useState } from "react";
import Graph from "../components/Graph";
import { Line } from "react-chartjs-2";

export default function Metric({ uuid, socket, type, mtToken }) {
  // const [dataCollection, setDataCollection] = useState({});
  const graphReference = useState(null);
  const line = {
    labels: [],
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
        data: [],
      },
    ],
  };
  useEffect(() => {
    let dataResult;
    let oldLabels = [];
    let oldData = [];
    try {
      dataResult = [
        { id: 1, type: "rss", value: Math.random(), createdAt: "01:04" },
        { id: 2, type: "rss", value: Math.random(), createdAt: "01:05" },
        { id: 3, type: "rss", value: Math.random(), createdAt: "01:06" },
        { id: 4, type: "rss", value: Math.random(), createdAt: "01:07" },
        { id: 5, type: "rss", value: Math.random(), createdAt: "01:08" },
        { id: 6, type: "rss", value: Math.random(), createdAt: "01:09" },
        { id: 7, type: "rss", value: Math.random(), createdAt: "01:10" },
      ];

      if (Array.isArray(dataResult)) {
        dataResult.forEach((m) => {
          oldLabels.push(m.createdAt);
          oldData.push(m.value);
        });
      }
      setDataCollection(() => ({
        labels: oldLabels,
        data: oldData,
      }));
    } catch (error) {
      return;
    }
    socket.on("agent/message", (payload) => {
      if (payload.token !== mtToken) return;

      if (payload.agent.uuid === uuid) {
        const metric = payload.metrics.find((m) => m.type === type);

        let labels;
        let data;

        if (Object.keys(dataCollection).length === 0) {
          labels = oldLabels;
          data = oldData;
        } else {
          labels = dataCollection.labels;
          data = dataCollection.datasets[0].data;
        }

        if (data.length >= 20) {
          labels.shift();
          data.shift();
        }

        labels.push("1:08");
        data.push(metric.value);

        setDataCollection(() => ({
          labels,
          data,
        }));
      }
    });
  }, []);

  return (
    <div className="border-gray-200 rounded-lg h-auto md:p-4	">
      <div className=" bg-gray-50 p-2">
        <div className="h-auto">
          <div className="canvas-container mx-auto">
            <Line
              ref={(reference) => {
                graphReference = reference;
              }}
              data={}
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
          {/* <Graph dataCollection={dataCollection} /> */}
        </div>
      </div>
    </div>
  );
}
