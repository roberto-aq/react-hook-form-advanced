import { UseFormRegister } from 'react-hook-form';
import { CheckoutFormValues } from '../../schemas/checkout.schema';
import { FaCreditCard } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';

interface Props {
	paymentMethod: 'card' | 'bank';
	register: UseFormRegister<CheckoutFormValues>;
	value: 'card' | 'bank';
}

export const RadioInputPaymentMethod = ({
	register,
	value,
	paymentMethod,
}: Props) => {
	return (
		<label
			className={`flex flex-col gap-1.5 flex-1 border p-4 rounded-xl cursor-pointer ${
				paymentMethod === value ? 'border-black' : 'border-stone-300'
			} `}
		>
			<input
				type='radio'
				className='hidden'
				value={value}
				{...register('paymentMethod')}
			/>

			{value === 'card' ? <FaCreditCard /> : <BsBank2 />}
			<span
				className={`text-xs font-medium ${
					paymentMethod === value ? 'text-black' : 'text-stone-500'
				}`}
			>
				{value === 'card'
					? 'Tarjeta Débito / Crédito'
					: 'Cuenta Bancaria'}
			</span>
		</label>
	);
};
