import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import Image from 'next/image';

const BannerHome = () => {
    
  return (
    <>
       <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Guardian Security Solutions</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          </svg>
          <br />
          Revisa todos nuestros servicios.
        </p>
        <Link
          href={'/login'}
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Registrate ahora <span aria-hidden="true">&rarr;</span>
        </Link>

        <Image
          layout='responsive'
          src={'/banner.jpg'}
          width={750}
          height={750}
          alt="Banner" />
      </div>


      <div className="bg-white py-24 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trabajamos con las mejores técnologías y marcas del mercado.
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/cisco.png'}
              alt="Cisco"
              width={158}
              height={48} />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={'/fortinet.png'}
              alt="Fortinet"
              width={158}
              height={48} />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={'/amazon.png'}
              alt="AWS"
              width={158}
              height={48} />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={'/Azure.png'}
              alt="Azure"
              width={158}
              height={48} />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={'/aruba.jpg'}
              alt="aruba"
              width={158}
              height={48} />
          </div>
        </div> 
      </div>
    </>

    );
}

export default BannerHome