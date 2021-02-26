import { useState } from "react";
import Agent from "./Agent";
import Graph from "./Graph";

export default function Agents() {
  const [agents, setAgents] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <div className="grid grid-cols-5 gap-x-2 grid-flow-row auto-rows-max ">
        <div className="col-span-5	">
          {agents.map((agent, idx) => {
            return <Agent key={idx} agent={agent} />;
          })}
        </div>
      </div>
    </>
  );
}
