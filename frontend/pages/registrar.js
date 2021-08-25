import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import HoneyPot from "../components/HoneyPot";
import Error from "../components/Error";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [isRobot, setIsRobot] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = new FormData(evt.target);

    if (form.get("verify") === "on") {
      setIsRobot(true);
      return;
    } else {
      setIsRobot(false);
    }
    const userValues = Object.values(userData);

    if (userValues.includes("")) {
      setIsError(true);
      setErrorLogin("Todos Los campos son obligatorios");
      return;
    }
    // const { data: user } = await axios.post(
    //   `${publicConfig.api_url}/api/register` , userData
    // );

    const message = "sss";

    if (!message) {
      setIsError(true);
      setErrorLogin("Ocurrio un error en el registro");
      return;
    }
    setIsError(false);
    setErrorLogin("");
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Registrar - MetricTime</title>
        <link rel="shortcut icon" href="/images/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto w-30 h-30"
              src="/images/logo.png"
              alt="Workflow"
            />
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Registrarse
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O
              <Link href="/iniciar-sesion">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  {" "}
                  Iniciar Sesión
                </a>
              </Link>
            </p>
          </div>
          {isError && <Error message={errorLogin} />}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label for="nickname" className="sr-only">
                  Nickname
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nickname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="email-address" className="sr-only">
                  Correo electronico
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label for="confirm-password" className="sr-only">
                  Password
                </label>
                <input
                  id="confirm-password"
                  name="repeatPassword"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repetir Contraseña"
                  onChange={handleChange}
                />
              </div>
              <HoneyPot />
            </div>
            {isRobot && (
              <div className="text-center text-red-500		">
                No se puede enviar el formulario , no es un humano
              </div>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
