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

          // transitions: {
          //   show: {
          //     animations: {
          //       x: {
          //         from: 1,
          //       },
          //       y: {
          //         from: 0,
          //       },
          //     },
          //   },
          //   hide: {
          //     animations: {
          //       x: {
          //         to: 0,
          //       },
          //       y: {
          //         to: 0,
          //       },
          //     },
          //   },
          // },
        }}
      />
    </div>
  );
}
