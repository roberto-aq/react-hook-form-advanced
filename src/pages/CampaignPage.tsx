import { FaRegTrashCan } from 'react-icons/fa6';
import { TiPlus } from 'react-icons/ti';

export const CampaignPage = () => {
	return (
		<>
			<form className='space-y-8 container mx-auto w-[1000px]'>
				<h2 className='mb-6 text-lg font-semibold text-stone-700'>
					Información de Campaña
				</h2>

				<section className='flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<label className='font-medium text-sm' htmlFor='name'>
							Nombre de Campaña
						</label>
						<input
							type='text'
							id='name'
							className={`border bg-white rounded-md px-4 py-2 text-sm outline-none `}
							placeholder={'Nombre de campaña'}
						/>
					</div>

					<div className='flex gap-8'>
						<div className='flex flex-col gap-2 flex-1'>
							<label className='font-medium text-sm' htmlFor='brand'>
								Marca
							</label>
							<input
								type='text'
								id='brand'
								className={`border bg-white rounded-md px-4 py-2 text-sm outline-none `}
								placeholder={'Nombre de la marca'}
							/>
						</div>

						{/* TODO: MULTISELECT */}
					</div>

					<div className='flex flex-col gap-2'>
						<label
							htmlFor='description'
							className='text-stone-600 font-semibold text-sm'
						>
							Descripción:
						</label>
						<textarea
							id='description'
							placeholder='Nombre de campaña'
							className='border bg-white border-stone-300 rounded-md p-3 text-sm resize-none text-stone-800'
						></textarea>
					</div>
				</section>

				{/* AUDIENCIA */}
				<section className='flex flex-col gap-4'>
					<h2 className='mb-3 text-lg font-semibold text-stone-700'>
						Audiencia
					</h2>

					<div className='flex gap-8'>
						<div className='flex flex-col gap-2 flex-1'>
							<label className='font-medium text-sm' htmlFor='name'>
								Clientes Objetivo:
							</label>
							<div
								className={`flex items-center gap-3 border bg-white rounded-md p-3 text-sm resize-none text-stone-800`}
							>
								{/* TODO: ICON */}
								<input
									type='text'
									id='name'
									className={`outline-none w-full`}
									placeholder={'Ejm: 10000'}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-2 flex-1'>
							<label className='font-medium text-sm' htmlFor='name'>
								Solo correos electrónicos:
							</label>
							<div
								className={`flex items-center gap-3 border bg-white rounded-md p-3 text-sm resize-none text-stone-800`}
							>
								{/* TODO: ICON */}
								<input
									type='text'
									id='name'
									className={`outline-none w-full`}
									placeholder={'Ejm: 4000'}
								/>
							</div>
						</div>
					</div>

					<div className='flex gap-8'>
						<div className='flex flex-col gap-2 flex-1'>
							<label className='font-medium text-sm' htmlFor='name'>
								Solo SMS:
							</label>
							<div
								className={`flex items-center gap-3 border bg-white 
								 rounded-md p-3 text-sm resize-none text-stone-800`}
							>
								{/* TODO: ICON */}
								<input
									type='text'
									id='name'
									className={`outline-none w-full`}
									placeholder={'Ejm: 2000'}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-2 flex-1'>
							{/* TODO: SINGLESELECT */}
						</div>
					</div>
				</section>

				{/* REGLAS */}
				<section className='flex flex-col gap-4'>
					<h2 className='mb-3 text-lg font-semibold text-stone-700'>
						Reglas
					</h2>

					<div className='flex gap-8 items-start'>
						{/* TODO: SINGLE SELECT 1 */}

						{/* TODO: SINGLE SELECT 2 */}

						<div className='flex flex-col gap-2 w-full'>
							<div className='flex items-center gap-3 border bg-white border-stone-300 rounded-md p-2 text-sm font-medium resize-none text-stone-800'>
								<input
									type='number'
									className='w-full outline-none'
									min={0}
									placeholder='300'
								/>
							</div>
						</div>

						<button
							type='button'
							className='cursor-pointer transition-all group mt-3 '
						>
							<FaRegTrashCan className='text-stone-500 group-hover:text-red-500' />
						</button>
					</div>

					<button
						className='text-stone-800 text-sm font-medium self-start flex items-center gap-1 leading-0 cursor-pointer'
						type='button'
					>
						<TiPlus size={12} />
						Agregar Regla
					</button>
				</section>

				<button
					type='submit'
					className='bg-black text-white  px-5 py-2 rounded-lg font-light text-sm cursor-pointer'
				>
					Crear Campaña
				</button>
			</form>

			{/* Muestra la data ingresada */}
			{/* {data && (
				<div className='container mx-auto w-[1000px] mt-8 bg-white py-6 px-10 rounded-lg'>
					<h2 className='mb-6 text-lg font-semibold text-stone-700'>
						Data Ingresada
					</h2>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</div>
			)} */}
		</>
	);
};
