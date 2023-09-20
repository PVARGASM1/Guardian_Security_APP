import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer class="aiz" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="t">Footer</h2>
      <div class="gx ua ark aru cfk ddh ddo">
        <div class="diy dkj dkv">

        <Image
             src={'/LogoSinBack.png'}
             width={150}
             height={150}
             alt="Logo page GS" 
             />
             
            <div class="la mb yi zt dhj diq">
              <div class="clk cms cni">
                <div>
                  <h3 class="awa awg awp bah">
                    Solutions
                  </h3>
                  <ul role="list" class="lk abw">
                    <li>
                      <Link href="#" class="awa awp axo blu">
                        Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="awa awp axo blu">
                      Analytics
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="awa awp axo blu">
                        Commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#" class="awa awp axo blu">
                        Insights
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>          
    </footer>
  )
}

export default Footer