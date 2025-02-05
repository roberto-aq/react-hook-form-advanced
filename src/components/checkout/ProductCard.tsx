export const ProductCard = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='bg-white p-3 rounded-xl flex flex-col items-center gap-4 md:flex-row'>
				<div className='rounded-xl bg-slate-300 h-60 md:h-40 flex-1'>
					<img
						src='https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-blue-gallery-2.png?v=1'
						alt='Mouse Logitech G203'
						className='w-full rounded-xl h-full object-cover'
					/>
				</div>
				<div className='flex flex-col gap-3 flex-[1.5]'>
					<h3 className='font-bold'>Mouse Logitech G203 - $30</h3>
					<p className='text-gray-500 text-sm'>
						Con la tecnología LIGHTSYNC, un sensor para juegos y un
						diseño clásico de 6 botones, animarás tu acción y tu
						espacio.
					</p>
					<div className='border border-stone-300 rounded-full self-start px-2 flex items-center gap-2'>
						<span className='h-3 w-3 rounded-full shadow-xl bg-[#0072ce]'></span>

						<span className='text-sm font-semibold'>Azul</span>
					</div>
				</div>
			</div>
		</div>
	);
};
