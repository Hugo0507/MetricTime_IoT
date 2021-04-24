import { Line } from "react-chartjs-2";

export default function Graph({ graphReference, line }) {
  return (
    <div className="canvas-container mx-auto">
      <Line
        ref={graphReference}
        data={line}
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
