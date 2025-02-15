import {
	InfoPayment,
	InputCheckout,
	ProductCard,
	RadioInputDelivery,
	RadioInputPaymentMethod,
} from '../components/checkout';
import { useForm } from 'react-hook-form';
import {
	CheckoutFormValues,
	checkoutSchema,
} from '../schemas/checkout.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export const CheckoutPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		unregister,
		reset,
	} = useForm<CheckoutFormValues>({
		defaultValues: {
			delivery: 'express',
			paymentMethod: 'card',
		},
		resolver: zodResolver(checkoutSchema),
	});

	const delivery = watch('delivery');
	const methodPayment = watch('paymentMethod');

	useEffect(() => {
		if (methodPayment === 'card') {
			unregister('bank');
		} else {
			unregister('card');
		}
	}, [methodPayment, unregister]);

	const onSubmit = handleSubmit(data => {
		if (data.paymentMethod === 'card') {
			data.bank = undefined;
		}

		if (data.paymentMethod === 'bank') {
			data.card = undefined;
		}

		const result = checkoutSchema.safeParse(data);

		if (!result.success) {
			console.log('Errores de validación', result.error.format());
			return;
		}

		alert('Pago realizado correctamente');
		console.log(data);
		reset();
	});

	return (
		<form
			className='flex flex-col gap-4 md:flex-row'
			onSubmit={onSubmit}
		>
			<section className='flex flex-col gap-3 flex-1'>
				<h2 className='font-semibold'>Información de Producto</h2>

				<ProductCard />

				<h2 className='font-semibold'>Información de Entrega</h2>

				<div className='flex flex-col gap-4'>
					<RadioInputDelivery
						register={register}
						value='express'
						delivery={delivery}
					/>

					<RadioInputDelivery
						register={register}
						value='free'
						delivery={delivery}
					/>
				</div>
			</section>

			<section className='flex flex-col gap-4 flex-1 bg-white p-5 rounded-xl'>
				<h2 className='font-semibold text-center'>
					Detalles de Pago
				</h2>

				<div className='flex flex-col gap-2'>
					<InputCheckout
						register={register}
						name='email'
						label='Correo Electrónico'
						type='email'
						placeholder='Ejem: correo@gmail.com'
						error={errors.email?.message}
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<span className='font-medium text-sm'>
						Seleccione método de pago:
					</span>
					<div className='flex gap-6'>
						<RadioInputPaymentMethod
							register={register}
							value='card'
							paymentMethod={methodPayment}
						/>

						<RadioInputPaymentMethod
							register={register}
							value='bank'
							paymentMethod={methodPayment}
						/>
					</div>
				</div>

				{/* FORMULARIO DE TARJETA */}
				{methodPayment === 'card' ? (
					<div className='flex flex-col gap-2'>
						<label className='flex flex-col gap-1'>
							<InputCheckout
								label='Nombre en la tarjeta'
								name='card.name'
								type='text'
								register={register}
								error={errors.card?.name?.message}
							/>
						</label>

						<label className='flex flex-col gap-1'>
							<InputCheckout
								label='Numero de tarjeta'
								name='card.number'
								type='text'
								register={register}
								error={errors.card?.number?.message}
								onChangeOverride={e => {
									const value = e.target.value.replace(/\D/g, '');
									e.target.value = (
										value.match(/.{1,4}/g)?.join(' ') ?? ''
									).substring(0, 19);
								}}
							/>
						</label>

						<div className='flex gap-2'>
							<label className='flex flex-col gap-1 flex-1'>
								<InputCheckout
									label='Fecha de expiración'
									type='text'
									register={register}
									name='card.expiration'
									error={errors.card?.expiration?.message}
									placeholder='MM/AA'
									onChangeOverride={e => {
										const value = e.target.value.replace(/\D/g, '');
										e.target.value = (
											value.match(/.{1,2}/g)?.join('/') ?? ''
										).substring(0, 5);
									}}
								/>
							</label>

							<label className='flex flex-col gap-1 flex-1'>
								<InputCheckout
									label='CVC'
									type='password'
									register={register}
									name='card.cvc'
									error={errors.card?.cvc?.message}
									maxLength={3}
									onChangeOverride={
										// Solo permitir números
										e => {
											e.target.value = e.target.value.replace(
												/\D/g,
												''
											);
										}
									}
								/>
							</label>
						</div>
					</div>
				) : (
					<div className='flex flex-col gap-2'>
						<label className='flex flex-col gap-1'>
							<InputCheckout
								label='Nombre de Propietario'
								type='text'
								register={register}
								name='bank.nameAccount'
								error={errors.bank?.nameAccount?.message}
							/>
						</label>

						<label className='flex flex-col gap-1'>
							<InputCheckout
								label='Cuenta bancaria'
								type='text'
								register={register}
								name='bank.accountNumber'
								error={errors.bank?.accountNumber?.message}
								maxLength={10}
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
