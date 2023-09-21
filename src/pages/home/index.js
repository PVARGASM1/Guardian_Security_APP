import BannerHome from '@/components/Banner';
import Footer from '@/components/Footer';
import ServicesHome from '@/components/ServiciosHome';
import Header from '@components/Header/index';

const HomePage = () => {
  return (
    <div>
    <Header />
    <BannerHome />
    <ServicesHome />
    <Footer />
    </div> 
  )
}

export default HomePage