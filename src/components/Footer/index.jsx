import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-1">
      <div class="container mx-auto flex flex-col items-center">
        <div class="mb-4">
        <Image
					className="w-26 h-26 flex-col items-center"
					src={'/LogoSinBack.png'}
					alt="LogoGS"
					width={228}
					height={288}
				/>
        </div>
        <p class="text-sm text-gray-400">&copy; 2023 Guardian Security. All rights reserved.</p>
        <div class="mt-4 flex space-x-4">
          <Link href={'/'} class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href={'/services'} class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Services
          </Link>
          <Link href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>
        <div class="mt-4 flex space-x-4">
          <Link href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Privacy Policy
          </Link>
          <Link href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Terms of Service
          </Link>
        </div>
        <div class="mt-4">
          <Link href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Follow us on social media
          </Link>

					<div class="mt-4 flex space-x-4" className={styles.center_icons}>
					<FaFacebookF />
					<FaGoogle />
					<AiFillLinkedin />
					</div>

        </div>
      </div>
    </footer>
      
  )
}

export default Footer