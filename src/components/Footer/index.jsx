import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer_container}>
        
        <div className={styles.footer_image}>
            <Image
             src={'/LogoSinBack.png'}
             width={150}
             height={150}
             alt="Logo page GS" 
             />
        </div>

          <ul className={styles.ul}>
            <li>
              <FaMapMarkerAlt />
                Bogotá, Colombia
            </li>
            <li>
              <FaPhoneAlt />
                +57 313 221 4028
            </li>
            <li>
              <FaEnvelope />
                guardian.security@gmail.com
            </li>
          </ul>

          <ul className={styles.routes}>
            <li>Home</li>
            <li>Services</li>
            <li>Schedule Consulting</li>
            <li>Home</li>
          </ul>

      </div>

    </ footer>
  )
}

export default Footer