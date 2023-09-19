import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa6'
import styles from'./Header.module.css';


export const Header = () => {


  return (
    <header className={styles.header}>
      <div className={styles.menu__container}>
        {/* <div className={styles.menu__image-container}> */}
          <Link href={'/home'}>
            <Image
             src={'/LogoSinBack.png'}
             width={200}
             height={200}
             alt="Logo page GS" 
             />
          </Link>
        {/* </div> */}

        <nav className={styles.navbar}>
    
          <ul className={styles.navbar__menu}>
          
            <li
              className={styles.navbar_link}
            >
              <Link
                href={'/home'}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Home
              </Link>
            </li>

            <li
              className={styles.navbar_link}
            >
              <Link
                href={'/services'}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Services
              </Link>
            </li>

            <li
              className={styles.navbar_link}
            >
              <FaUserCircle />
            </li>

          </ul>

        </nav>
      </div>
    </header>
  );
};

export default Header;