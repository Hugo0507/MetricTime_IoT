import { useState } from "react";
import axios from "axios";

export default function ConfigToken() {
  const [token, setToken] = useState("5yQZwZsLCaW9W3kmKxx7Ac");

  const generateToken = async () => {
    //const { data } = await axios.post(
    //   `${publicConfig.api_url}/api/user/token` ,{
    //     token
    //   }
    // );
    const data = { token: "59494949" };
    setToken(data.token);
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 inline-block"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>{" "}
              Configuraciones
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Establece las configuraciones necesarias
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Token
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      disabled
                      autoComplete="given-name"
                      value={token}
                      onChange={(evt) => {
                        setToken(evt.target.value);
                      }}
                      className="p-4 mt-1 mb-2 focus:ring-indigo-500  h-8 border-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />

                    <button
                      onClick={generateToken}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Generar Token
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
