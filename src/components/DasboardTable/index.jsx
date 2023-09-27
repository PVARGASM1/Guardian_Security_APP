

const DashboardTable = () => {

	return (
    <div className="overflow-x-auto mx-auto sm:mx-8 rounded">
      <table className="table-auto w-full border mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 bg-gray-800 text-white">Nombre empresa o contacto</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Servicio</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Estado</th>
						<th className="px-4 py-2 bg-gray-800 text-white">Valor Consultoría</th>
          </tr>
        </thead>
        <tbody>

          <tr className="text-center">
            <td className="border px-4 py-2"> Juan Pérez</td>
            <td className="border px-4 py-2"> Instalación </td>
            <td className="border px-4 py-2"> Solicitada</td>
            <td className="border px-4 py-2"> $220.000 </td>

          </tr>
          
        </tbody>
      </table>
    </div>
  )

}
  export default DashboardTable;