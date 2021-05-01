import { useEffect, useState } from "react";
import Agent from "./Agent";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig: publicConfig } = getConfig();

export default function Agents({ socket, mtToken }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchAgents() {
      const { data: savedAgents } = await axios.get(
        `${publicConfig.api_url}/api/agents/1`
      );
      setAgents([...savedAgents, ...agents]);
    }

    fetchAgents();
  }, []);

  socket.on("agent/connected", (payload) => {
    if (payload.token !== mtToken) return;
    const { uuid } = payload;
    const existAgent = agents.find((agent) => agent.uuid === uuid);

    if (!existAgent) {
      setAgents([payload.agent, ...agents]);
    }
  });
  return (
    <>
      <div className="grid grid-cols-5 gap-x-2 grid-flow-row auto-rows-max ">
        <div className="col-span-5	">
          {agents.map((agent) => {
            return (
              <Agent
                mtToken={mtToken}
                key={agent.uuid}
                uuid={agent.uuid}
                socket={socket}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
