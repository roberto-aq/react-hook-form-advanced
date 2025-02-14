import { FaCreditCard, FaDhl, FaFedex } from 'react-icons/fa';
import { useState } from 'react';
import { BsBank2 } from 'react-icons/bs';
import { InfoPayment, ProductCard } from '../components/checkout';

export const CheckoutPage = () => {
	const [delivery, setDelivery] = useState('fast');
	const [methodPayment, setMethodPayment] = useState('card');
	const [expirationDate, setExpirationDate] = useState('');

	const handleExpirationInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let value = e.target.value.replace(/\D/g, ''); // Solo permitimos números
		if (value.length > 2) {
			value = value.slice(0, 2) + '/' + value.slice(2, 4);
		}
		if (value.length > 5) {
			value = value.slice(0, 5); // Limitar a 'MM/YY'
		}
		setExpirationDate(value);
	};

	return (
		<form className='flex flex-col gap-4 md:flex-row'>
			<section className='flex flex-col gap-3 flex-1'>
				<h2 className='font-semibold'>Información de Producto</h2>

				<ProductCard />

				<h2 className='font-semibold'>Información de Entrega</h2>

				<div className='flex flex-col gap-4'>
					<label
						className={`flex gap-4 items- center bg-white rounded-xl p-3 cursor-pointer border ${
							delivery === 'fast'
								? 'border-black'
								: 'border-transparent'
						}`}
					>
						<div className='flex '>
							<input
								name='free'
								type='radio'
								className='hidden'
								onChange={() => {
									setDelivery('fast');
								}}
								value={delivery}
								checked={delivery === 'fast'}
							/>

							<span
								className={`h-4 w-4 rounded-full border  flex items-center justify-center  ${
									delivery === 'fast'
										? 'bg-black border-transparent'
										: 'bg-white border-stone-300'
								}`}
							>
								{delivery === 'fast' && (
									<span className='h-1.5 w-1.5 rounded-full bg-white'></span>
								)}
							</span>
						</div>

						<div className='space-y-2'>
							<p className='font-semibold text-sm'>
								$4.99 - Entrega rápida
								<span className='bg-emerald-200 text-emerald-700 text-xs rounded-full px-2 py-1 font-medium ml-3'>
									Recomendado
								</span>
							</p>
							<p className='text-xs text-stone-500'>
								Entrega en 2-4 días hábiles. Incluye seguimiento y
								notificaciones.
							</p>
						</div>

						<div className='p-2'>
							<FaFedex size={50} />
						</div>
					</label>

					<label
						className={`flex gap-4 items- center bg-white rounded-xl p-3 cursor-pointer border ${
							delivery === 'free'
								? 'border-black'
								: 'border-transparent'
						}`}
					>
						<div className='flex items-center'>
							<input
								name='free'
								type='radio'
								className='hidden'
								onChange={() => {
									setDelivery('free');
								}}
								value={delivery}
								checked={delivery === 'free'}
							/>

							<span
								className={`h-4 w-4 rounded-full border  flex items-center justify-center  ${
									delivery === 'free'
										? 'bg-black border-transparent'
										: 'bg-white border-stone-300'
								}`}
							>
								{delivery === 'free' && (
									<span className='h-1.5 w-1.5 rounded-full bg-white'></span>
								)}
							</span>
						</div>

						<div className='space-y-2 flex-1'>
							<p className='font-semibold text-sm'>Entrega Gratis</p>
							<p className='text-xs text-stone-500'>
								Entrega en 5-7 días hábiles. Sin seguimiento.
							</p>
						</div>

						<div className='p-2 '>
							<FaDhl size={50} />
						</div>
					</label>
				</div>
			</section>

			<section className='flex flex-col gap-4 flex-1 bg-white p-5 rounded-xl'>
				<h2 className='font-semibold text-center'>
					Detalles de Pago
				</h2>

				<div className='flex flex-col gap-2'>
					<label className='font-medium text-sm' htmlFor='email'>
						Correo electrónico:
					</label>
					<input
						type='email'
						id='email'
						className='border border-stone-300 px-3 py-2 text-sm rounded-md outline-none'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<span className='font-medium text-sm'>
						Seleccione método de pago:
					</span>
					<div className='flex gap-6'>
						<label
							className={`flex flex-col gap-1.5 flex-1 border p-4 rounded-xl cursor-pointer ${
								methodPayment === 'card'
									? 'border-black'
									: 'border-stone-300'
							} `}
						>
							<input
								type='radio'
								className='hidden'
								onChange={() => {
									setMethodPayment('card');
								}}
								value={methodPayment}
								checked={methodPayment === 'card'}
							/>

							<FaCreditCard />
							<span
								className={`text-xs font-medium ${
									methodPayment === 'card'
										? 'text-black'
										: 'text-stone-500'
								}`}
							>
								Tarjeta Débito / Crédito
							</span>
						</label>
						<label
							className={`flex flex-col gap-1.5 flex-1 border p-4 rounded-xl cursor-pointer ${
								methodPayment === 'bank'
									? 'border-black'
									: 'border-stone-300'
							} `}
						>
							<input
								type='radio'
								className='hidden'
								onChange={() => {
									setMethodPayment('bank');
								}}
								value={methodPayment}
								checked={methodPayment === 'bank'}
							/>

							<BsBank2 />
							<span
								className={`text-xs font-medium ${
									methodPayment === 'bank'
										? 'text-black'
										: 'text-stone-500'
								}`}
							>
								Cuenta Bancaria
							</span>
						</label>
					</div>
				</div>

				{/* FORMULARIO DE TARJETA */}
				{methodPayment === 'card' ? (
					<div className='flex flex-col gap-2'>
						<label className='flex flex-col gap-1'>
							<span className='text-sm text-stone-500'>
								Nombre en la tarjeta
							</span>
							<input
								type='text'
								className='border border-stone-300 p-2 rounded-md'
							/>
						</label>

						<label className='flex flex-col gap-1'>
							<span className='text-sm text-stone-500'>
								Número de tarjeta
							</span>
							<input
								type='text'
								className='border border-stone-300 p-2 rounded-md'
							/>
						</label>

						<div className='flex gap-2'>
							<label className='flex flex-col gap-1 flex-1'>
								<span className='text-sm text-stone-500'>
									Fecha de expiración
								</span>
								<input
									type='text'
									value={expirationDate}
									onChange={handleExpirationInput}
									placeholder='MM/AA'
									maxLength={5}
									className='border border-stone-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900'
								/>
							</label>

							<label className='flex flex-col gap-1 flex-1'>
								<span className='text-sm text-stone-500'>CVC</span>
								<input
									type='password'
									maxLength={3}
									className='border border-stone-300 p-2 rounded-md'
								/>
							</label>
						</div>
					</div>
				) : (
					<div className='flex flex-col gap-2'>
						<label className='flex flex-col gap-1'>
							<span className='text-sm text-stone-500'>
								Nombre de propietario:
							</span>
							<input
								type='text'
								className='border border-stone-300 p-2 rounded-md'
							/>
						</label>

						<label className='flex flex-col gap-1'>
							<span className='text-sm text-stone-500'>
								Cuenta bancaria:
							</span>
							<input
								type='text'
								className='border border-stone-300 p-2 rounded-md'
							/>
						</label>
					</div>
				)}

				{/* INFORMACION DE PAGO */}
				<InfoPayment />
			</section>
		</form>
	);
};
