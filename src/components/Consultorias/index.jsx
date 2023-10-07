import Image from "next/image"

const Consultoria = () => {
  return (
    <div className="">
      <form className="m-10 p-8 border-2 rounded-lg ">
      <div className="space-y-12 space-x-12 ">

        <div className="border-b border-gray-900/10 pb-12">
        <Image 
              className="mx-auto w-45 h-40 w-auto"
              src={'/LogoSinBack.png'}
							priority={false}
              alt='logoGS'
              width={170}
              height={170}
            />

          <h2 className="text-2xl text-center font-bold leading-7 text-sky-900">Registra tu consultoria</h2>
          <p className="mt-1 text-xl text-center leading-6 text-gray-600">¿Buscas a tu especialista en tecnología y ciberseguridad?</p>
          <p className="mt-1 text-lg text-center leading-6 text-gray-600">Envíanos tus datos y nos pondremos en contacto para asesorarte.</p>


          <div className="mt-10 grid grid-cols-1 flex content-center gap-x-6 gap-y-8 sm:grid-cols-8">
          <div className="sm:col-span-4">
              <label htmlFor="empresa" className="block text-base font-medium leading-6 text-gray-900">
                Nombre empresa
              </label>
              <div className="mt-2">
                <input
                  id="empresa"
                  name="empresa"
                  type="empresa"
                  placeholder=" Nombre empresa"
                  autoComplete="empresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="nombre" className="block text-base font-medium leading-6 text-gray-900">
                Nombre de contacto
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder=" Nombre de contacto"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" email@test.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="document" className="block text-base font-medium leading-6 text-gray-900">
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  placeholder=" Teléfono"
                  autoComplete="telefono"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="about" className="block text-base font-medium leading-6 text-gray-900">
                Mensaje
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  placeholder=" Deja un mensaje"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
             <p className="mt-3 text-base leading-6 text-gray-600">Danos una breve descripción de tu necesidad.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="document" className="block text-base font-medium leading-6 text-gray-900">
                Envío de documentación
              </label>
              <div className="mt-2">
                <label className="flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9H1a1 1 0 0 1-1-1V1zm1 7h2v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm9 2a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Seleccionar archivo
                  <input
                    type="file"
                    name="document"
                    id="document"
                    className="hidden"
                  />
                </label>
                <p className="mt-3 text-base leading-6 text-gray-600">Adjunta documentación referente a reglamentación o estado de arquitectura.</p>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="country" className="block text-base font-medium leading-6 text-gray-900">
                Servicios
              </label>
              <div className="mt-2">
                <select
                  id="servicio"
                  name="servicio"
                  autoComplete="servicio-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-base ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Seleciona un servicio</option>
                  <option>Instalación</option>
                  <option>Administración</option>
                  <option>Ciberseguridad</option>
                  <option>Consultoria</option>
                  <option>Asistencia</option>
                </select>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
        <button type="button" className="text-lg font-bold leading-6 text-gray-900">
          Cancelar
        </button>
      </div>
      </form>
    </div>
  )
}

export default Consultoria