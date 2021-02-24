import { useState } from "react";

export default function Agent() {
  const [openMetric, setOpenMetric] = useState(false);

  const toggleMetric = () => {
    setOpenMetric(!openMetric);
  };
  return (
    <div
      className="p-5 bg-gray-100 mb-2 font-	
  "
    >
      <div className="flex justify-between	">
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 inline-block pr-1.5"
          >
            <path d="M13 7H7v6h6V7z" />
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <span className="font-bold text-lg">
            Agente MetricTime 1 - 1569303
          </span>
        </h3>
        <span>
          <svg
            className="w-8 text-green-500 animate-pulse inline-block 	"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>{" "}
        </span>
      </div>

      <p className="p-1"> ns-local</p>
      <button onClick={toggleMetric} className="text-red-600 p-1">
        Ver Metricas{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="inline-block w-6"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {openMetric && (
        <div>
          <p>Me abrieron</p>
        </div>
      )}
    </div>
  );
}
