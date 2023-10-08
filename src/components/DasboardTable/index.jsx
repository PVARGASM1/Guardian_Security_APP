

const DashboardTable = ({ data }) => {
  // console.log("consulting", data)

	return (
    <div className="overflow-x-auto mx-auto sm:mx-8 rounded">
      <table className="table-auto w-full border mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 bg-gray-800 text-white">Nombre empresa</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Nombre contacto</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Mensaje</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Servicio</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((info, index) => (

            <tr 
            key={index}
            className="text-center">
              <td className="border px-4 py-2">{info.company}</td>
              <td className="border px-4 py-2">{info.name}</td>
              <td className="border px-4 py-2">{info.message}</td>
              <td className="border px-4 py-2">{info.services}</td>

            </tr>

          )
          )}
        </tbody>
      </table>
    </div>
  )

}
  export default DashboardTable;