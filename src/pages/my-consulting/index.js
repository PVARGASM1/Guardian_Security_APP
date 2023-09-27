import DashboardUser from "@/components/Dashborad";
import DashboardTable from "@/components/DasboardTable";
import Footer from "@/components/Footer";


const MyConsultingPage = () => {
  return (
    <div>
        <DashboardUser 
          title="Mis Consultorias"
        />
        <DashboardTable />
        <Footer />
    </div>
  )
}

export default MyConsultingPage;