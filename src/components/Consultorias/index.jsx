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
              alt='logoGS'
              width={170}
              height={170}
            />

          <h2 className="text-2xl text-center font-bold leading-7 text-sky-900">Registra tu consultoria</h2>
          <p className="mt-1 text-xl text-center leading-6 text-gray-600">¿Buscas a tu especialista en tecnología y ciberseguridad?</p>
          <p className="mt-1 text-lg text-center leading-6 text-gray-600">Envíanos tus datos y nos pondremos en contacto para asesorarte.</p>


          <div className="mt-10 grid grid-cols-1 flex content-center gap-x-6 gap-y-8 sm:grid-cols-8">
          <div className="sm:col-span-4">
              <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre empresa
              </label>
              <div className="mt-2">
                <input
                  id="empresa"
                  name="empresa"
                  type="empresa"
                  autoComplete="empresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre de contacto
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                Telefono
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  autoComplete="telefono"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
             <p className="mt-3 text-sm leading-6 text-gray-600">Danos una breve descripción de tu necesidad.</p>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Servicios
              </label>
              <div className="mt-2">
                <select
                  id="servicio"
                  name="servicio"
                  autoComplete="servicio-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
        <button type="button" className="text-sm font-bold leading-6 text-gray-900">
          Cancelar
        </button>
      </div>
    </form>
    </div>
  )
}

export default Consultoria