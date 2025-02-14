import { FaArrowRight } from "react-icons/fa";

export const InfoPayment = () => {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<div className='flex justify-between'>
					<span className='text-sm text-stone-500 font-medium'>
						Subtotal
					</span>
					<span className='text-sm font-bold text-black'>$30.00</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-sm text-stone-500 font-medium'>
						Descuento
					</span>
					<span className='text-sm font-bold text-black'>$0</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-sm text-black font-medium'>
						Total
					</span>
					<span className='text-sm font-bold text-black'>$30.00</span>
				</div>
			</div>

			<button className='bg-black text-white flex justify-center items-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all hover:scale-105'>
				Pagar $30.00
				<FaArrowRight size={14} />
			</button>
		</>
	);
};
