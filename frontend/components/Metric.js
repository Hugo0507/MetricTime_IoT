import { useEffect, useRef } from "react";
import Graph from "../components/Graph";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig: publicConfig } = getConfig();
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
export default function Metric({ disconnected, uuid, socket, type, mtToken }) {
  // const [dataCollection, setDataCollection] = useState({});
  const graphReference = useRef();

  useEffect(() => {
    const oldLabels = [];
    const oldData = [];

    async function fetchMetrics() {
      try {
        const { data: dataResult } = await axios.get(
          `${publicConfig.api_url}/api/metrics/${uuid}/${type}`
        );

        if (!graphReference.current) return;

        const chart = graphReference.current;
        const dataset = chart.data.datasets[0];
        const data = chart.data;

        if (Array.isArray(dataResult)) {
          dataResult.forEach((m) => {
            oldLabels.push(format(parseISO(m.createdat), "HH:mm:ss"));
            oldData.push(m.value);
          });
        }

        data.labels = oldLabels;
        dataset.data = oldData;

        graphReference.current.update({ preservation: true });
      } catch (error) {
        return;
      }
    }
    fetchMetrics();

    socket.on("agent/message", (payload) => {
      if (payload.token !== mtToken) return;

      if (payload.agent.uuid === uuid) {
        const metric = payload.metrics.find((m) => m.type === type);

        if (!graphReference.current) return;

        const chart = graphReference.current;
        const data = chart.data.datasets[0].data;
        const labels = chart.data.labels;

        if (data.length >= 20) {
          labels.shift();
          data.shift();
          line.labels.shift();
          line.datasets[0].data.shift();
        }

        const labelM = format(metric.createdat, "HH:mm:ss");
        const dataM = metric.value;
        labels.push(labelM);
        data.push(dataM);

        chart.update({ preservation: true });
      }
    });
  }, [disconnected]);

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
