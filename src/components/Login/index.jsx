import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from './Login.module.css'

const Login = () => {

  const [user, setUser] =useState ({
    email:"",
    password:""
  });
  const route = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const fetchLogin = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
      const result = await fetch('http://localhost:8080/auth/local/login', fetchLogin)

      const userLogged = await result.json()

      localStorage.setItem('token', userLogged.token);
      localStorage.setItem('name', userLogged.name);
      localStorage.setItem('email', userLogged.email);

      route.push(`/profile/${userLogged.profile.name}`)
    
    } catch(error) {
      console.error(error);
    }
  }

  return (
  <div className={styles.background}>
    <div className={styles.card}>
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image 
              className="mx-auto w-45 h-40 w-auto"
              src={'/LogoSinBack.png'}
              priority={false}
              alt='logoGS'
              width={auto}
              height={auto}
            />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
            className="space-y-6"
            action="#" 
            onSubmit={handleSubmitLogin}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" test@guardian.com"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" *******"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresa
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link href={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              ¿No tienes cuenta?
            </Link>
          </p>
        </div>
    </div>

    </div>
  </div>
  )
}

export default Login