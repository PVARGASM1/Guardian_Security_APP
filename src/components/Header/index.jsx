import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaHome, FaServer } from 'react-icons/fa'
import styles from'@/components/Header/Header.module.css';


const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.menu__container}>
        <div className={styles.menu__image}>
          <Link href={'/home'}>
            <Image
             src={'/LogoSinBack.png'}
             width={150}
             height={150}

             alt="Logo page GS" 
             />
          </Link>
        </div>

        <nav className={styles.navbar}>
    
          <ul className={styles.navbar__menu}>
          
            <li
              className={styles.navbar_link}
            >
              <Link
                href={'/home'}
                className={styles.navbar_link}
              >
               <FaHome /> 
               <br />
                Home
              </Link>
            </li>

            <li
              className={styles.navbar_link}
            >
              <Link
                className={styles.navbar_link}
                href={'/services'}
              >
               <FaServer /> 
               <br />
                Services
              </Link>
            </li>

          </ul>

        </nav>

        <nav>
          <ul className={styles.navbar__user}>
          <li
              className={styles.navbar_link}
            >
             <Link 
              href={'/login'}>
              <FaUser />
             </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;