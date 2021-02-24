import { useState } from "react";
import Agent from "./Agent";
import Graph from "./Graph";

export default function Agents() {
  const [agents, setAgents] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      <div className="grid grid-cols-5 gap-x-2 grid-flow-row auto-rows-max ">
        <div className="col-span-2	">
          {agents.map((agent, idx) => {
            return <Agent key={idx} agent={agent} />;
          })}
        </div>
        <div className="col-span-3 bg-gray-50 p-2">
          <h3 className="text-center mb-14">
            <span className="font-bold text-xl "> Visualizar Metrica</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 inline-block text-indigo-600"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          </h3>
          <Graph />
        </div>
      </div>
    </>
  );
}
