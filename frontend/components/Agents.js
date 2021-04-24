import { useEffect, useState } from "react";
import Agent from "./Agent";

export default function Agents({ socket, mtToken }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const savedAgents = [{ uuid: 1 }, { uuid: 2 }, { uuid: 3 }];
    setAgents([...savedAgents, ...agents]);
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
