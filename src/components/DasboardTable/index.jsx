

const DashboardTable = ({ consulting }) => {


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
          {/* {data?.map((info, index) => ( */}

            <tr 
            // key={index}
            className="text-center">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>

            </tr>

          {/* ) */}
          {/* )} */}
        </tbody>
      </table>
    </div>
  )

}
  export default DashboardTable;