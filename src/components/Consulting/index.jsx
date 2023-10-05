import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
import { useState } from "react"
import { useJwt } from "react-jwt";
import Modal from "@components/Modal"
import styles from "./Consulting.module.css";
import style from "@components/Modal/Modal.module.css"
import Cookies from "universal-cookie";

const Consulting = () => {
	const [createModal, setCreateModal] = useState(false)
	const cookies = new Cookies()

	const { decodedToken, isExpired } = useJwt(cookies.get('token'));
	console.log("token", decodedToken)

	const [data, setData] = useState({
		name: "",
		company: "",
		email: "",
		phone: "",
		message: "",
		services: "",
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setData((data) => ({
			...data,
			[name]: value,
		}));
	};

	const handleCloseModal = () => {
		setCreateModal(false);
	}
	


	const handlerSubmitConsulting = async (e) => {
		e.preventDefault();

		try {
			const fetchConsulting = {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}

			const response = await fetch(`http://localhost:8080/api/consulting/${decodedToken.id}`, fetchConsulting)
			const consulting = await response.json()
			console.log("consultoria", consulting)

			setCreateModal(true);
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<Header />

			<div>
				<form
					onSubmit={handlerSubmitConsulting}
					className="m-10 p-8 border-2 rounded-lg ">
					<div className="space-y-12 space-x-12 ">

						<div className="border-b border-gray-900/10 pb-12">
							<Image
								className="mx-auto w-45 h-40 w-auto"
								src={'/LogoSinBack.png'}
								alt='logoGS'
								width={170}
								height={170}
							/>

							<h2 className="text-2xl text-center font-bold leading-7 text-sky-900">Registra tu consultoria</h2>
							<p className="mt-1 text-xl text-center leading-6 text-gray-600">¿Buscas a tu especialista en tecnología y ciberseguridad?</p>
							<p className="mt-1 text-lg text-center leading-6 text-gray-600">Envíanos tus datos y nos pondremos en contacto para asesorarte.</p>


							<div className="mt-10 grid grid-cols-1 flex content-center gap-x-6 gap-y-8 sm:grid-cols-8">
								<div className="sm:col-span-4">
									<label htmlFor="empresa" className="block text-base font-medium leading-6 text-gray-900">
										Nombre empresa
									</label>
									<div className="mt-2">
										<input
											id="empresa"
											name="company"
											type="empresa"
											placeholder=" Nombre empresa"
											value={data.company}
											onChange={handleInputChange}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
										Nombre de contacto
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="name"
											id="name"
											placeholder=" Nombre de contacto"
											autoComplete="given-name"
											onChange={handleInputChange}
											value={data.name}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
										Email
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											placeholder=" email@test.com"
											autoComplete="email"
											onChange={handleInputChange}
											value={data.email}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="phone" className="block text-base font-medium leading-6 text-gray-900">
										Teléfono
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="phone"
											id="phone"
											placeholder=" Teléfono"
											autoComplete="telefono"
											onChange={handleInputChange}
											value={data.phone}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>


								<div className="col-span-full">
									<label htmlFor="message" className="block text-base font-medium leading-6 text-gray-900">
										Mensaje
									</label>
									<div className="mt-2">
										<textarea
											id="message"
											name="message"
											placeholder=" Deja un mensaje"
											rows={3}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={''}
											onChange={handleInputChange}
											value={data.message}
										/>
									</div>
									<p className="mt-3 text-base leading-6 text-gray-600">Danos una breve descripción de tu necesidad.</p>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="document" className="block text-base font-medium leading-6 text-gray-900">
										Envío de documentación
									</label>
									<div className="mt-2">
										<label className="flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5 mr-2"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M2 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9H1a1 1 0 0 1-1-1V1zm1 7h2v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm9 2a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"
													clipRule="evenodd"
												/>
											</svg>
											Seleccionar archivo
											<input
												type="file"
												name="document"
												id="document"
												className="hidden"
											/>
										</label>
										<p className="mt-3 text-base leading-6 text-gray-600">Adjunta documentación referente a reglamentación o estado de arquitectura.</p>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="services" className="block text-base font-medium leading-6 text-gray-900">
										Servicios
									</label>
									<div className="mt-2">
										<select
											id="services"
											name="services"
											autoComplete="services-name"
											onChange={handleInputChange}
											value={data.services}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-base ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										>
											<option>Seleciona un servicio</option>
											<option>Instalación</option>
											<option>Administración</option>
											<option>Ciberseguridad</option>
											<option>Consultoria</option>
											<option>Asistencia</option>
										</select>
									</div>
								</div>


							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-center gap-x-6">
						{/* <Link 
							// href={'./my-consulting'}
						> */}
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
						
							Enviar
						</button>
						{/* </Link> */}
						<button type="button" className="text-lg font-bold leading-6 text-gray-900">
							Cancelar
						</button>
					</div>
				</form>
			</div>
			<Footer />

			<Modal
				showModal={createModal}
				handleShowModal={() => setCreateModal(false)}
			>
				<h2 
					className={styles.text}>Tu consultoría fue creada satisfactoriamente, a tu correo llegará la confirmación.</h2>
				<div className={style.center}>
					<button
						className={styles.button}
						type="button"
						onClick={handleCloseModal}
					>
						OK
					</button>
				</div>
			</Modal>

		</div>
	)
}

export default Consulting