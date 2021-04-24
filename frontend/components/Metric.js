import { useEffect, useRef } from "react";
import Graph from "../components/Graph";
import format from "date-fns/format";
import { parseISO } from "date-fns";

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
export default function Metric({ uuid, socket, type, mtToken }) {
  // const [dataCollection, setDataCollection] = useState({});
  const graphReference = useRef();

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

      line.labels = oldLabels;
      line.datasets[0].data = oldData;
    } catch (error) {
      return;
    }

    socket.on("agent/message", (payload) => {
      if (payload.token !== mtToken) return;

      if (payload.agent.uuid === uuid) {
        const metric = payload.metrics.find((m) => m.type === type);

        console.log(metric.createdAt);
        if (!graphReference.current) return;

        const chart = graphReference.current;
        const data = chart.data.datasets[0].data;
        const labels = chart.data.labels;

        if (data.length >= 20) {
          labels.shift();
          data.shift();
        }

        console.log(metric.createdAt);

        labels.push(format(parseISO(metric.createdAt), "HH:mm:ss"));
        data.push(metric.value);
        chart.update({ preservation: true });
      }
    });
  }, []);

  return (
    <div className="border-gray-200 rounded-lg h-auto md:p-4	">
      <div className=" bg-gray-50 p-2">
        <div className="h-auto">
          <Graph line={line} graphReference={graphReference} />
        </div>
      </div>
    </div>
  );
}
