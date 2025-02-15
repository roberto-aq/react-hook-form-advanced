import { UseFormRegister } from 'react-hook-form';
import { CheckoutFormValues } from '../../schemas/checkout.schema';
import { FaDhl, FaFedex } from 'react-icons/fa';

interface Props {
	delivery: 'free' | 'express';
	register: UseFormRegister<CheckoutFormValues>;
	value: 'free' | 'express';
}

export const RadioInputDelivery = ({
	delivery,
	register,
	value,
}: Props) => {
	return (
		<label
			className={`flex gap-4 items- center bg-white rounded-xl p-3 cursor-pointer border ${
				delivery === value ? 'border-black' : 'border-transparent'
			}`}
		>
			<div className='flex '>
				<input
					type='radio'
					className='hidden'
					value={value}
					{...register('delivery')}
				/>

				<span
					className={`h-4 w-4 rounded-full border  flex items-center justify-center  ${
						delivery === value
							? 'bg-black border-transparent'
							: 'bg-white border-stone-300'
					}`}
				>
					{delivery === value && (
						<span className='h-1.5 w-1.5 rounded-full bg-white'></span>
					)}
				</span>
			</div>

			<div className='space-y-2'>
				<p className='font-semibold text-sm'>
					{value === 'free'
						? 'Envío Gratis'
						: '$4.99 - Entrega rápida'}
					{value === 'express' && (
						<span className='bg-emerald-200 text-emerald-700 text-xs rounded-full px-2 py-1 font-medium ml-3'>
							Recomendado
						</span>
					)}
				</p>
				<p className='text-xs text-stone-500'>
					{value === 'free'
						? 'Entrega en 5-7 días hábiles. Sin seguimiento'
						: 'Entrega en 2-4 días hábiles. Incluye seguimiento y notificaciones.'}
				</p>
			</div>

			<div className='p-2'>
				{value === 'express' ? (
					<FaFedex size={50} />
				) : (
					<FaDhl size={50} />
				)}
			</div>
		</label>
	);
};
