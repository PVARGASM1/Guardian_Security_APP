import DashboardUser from "@/components/Dashborad";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const MyConsultingPage = () => {
  const router = useRouter();
 
  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const consultingData = router.query.consultingData
    ? JSON.parse(router.query.consultingData)
    : null;

  return (
    <div>
      <DashboardUser
        title="Mis Consultorias"
      />

      <div className="overflow-x-auto mx-auto sm:mx-8 rounded">
        <table className="table-auto w-full border mb-8">
          <thead>
            <tr className="bg-gray-100"
            >
              <th className="px-4 py-2 bg-gray-800 text-white">Nombre empresa</th>
              <th className="px-4 py-2 bg-gray-800 text-white">Nombre contacto</th>
              <th className="px-4 py-2 bg-gray-800 text-white">Mensaje</th>
              <th className="px-4 py-2 bg-gray-800 text-white">Servicio</th>
            </tr>
          </thead>
          <tbody>


            <tr
              className="text-center">
                <td className="border px-4 py-2">{consultingData.consulting.company}</td>
                <td className="border px-4 py-2">{consultingData.consulting.name}</td>
                <td className="border px-4 py-2">{consultingData.consulting.message}</td>
                <td className="border px-4 py-2">{consultingData.consulting.services}</td>
            </tr>

          
          </tbody>
        </table>
      </div>


      <Footer />
    </div>
  )
}

export default MyConsultingPage;

