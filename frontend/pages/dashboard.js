import { useEffect, useState } from "react";
import Agents from "../components/Agents";
import Layout from "../components/Layout";
import io from "socket.io-client";

export default function Dashboard() {
  const [socket, setSocket] = useState(null);
  const [mtToken, setMtToken] = useState(null);

  useEffect(() => {
    const socket = io();
    socket.open();
    setSocket(socket);

    setMtToken(
      localStorage.getItem("metrictime-token") || "5yQZwZsLCaW9W3kmKxx7Ac"
    );

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Layout title="Dashboard">
      <main>
        <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center	">
            <h2 className="font-mono font-bold text-xl sm:text-2xl">
              <svg
                className="w-8 inline-block text-blue-600 	 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              Agentes Recientes
            </h2>
          </div>

          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 h-auto rounded-lg h-96 p-4	">
              {console.log(mtToken)}
              {socket && <Agents mtToken={mtToken} socket={socket} />}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
