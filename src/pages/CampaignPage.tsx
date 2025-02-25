import { useFieldArray, useForm } from 'react-hook-form';
import { FaCommentSms, FaRegTrashCan } from 'react-icons/fa6';
import { TiPlus } from 'react-icons/ti';
import {
	CampaignFormValues,
	campaignSchema,
} from '../schemas/campaign.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	channels,
	customersOptions,
	operators,
	rulesOptions,
} from '../constants/data';
import { InputCampaign } from '../components/campaign/InputCampaign';
import { InputIcon } from '../components/campaign/InputIcon';
import { IoPeople, IoPerson } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Multiselect } from '../components/campaign/Multiselect';
import { SingleSelect } from '../components/campaign/SingleSelect';
import { useState } from 'react';

export const CampaignPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<CampaignFormValues>({
		defaultValues: {
			channels: [channels[0].value],
			audience: {
				clientType: customersOptions[0].value,
			},
		},
		resolver: zodResolver(campaignSchema),
	});

	const { append, fields, remove } = useFieldArray({
		control,
		name: 'rules',
	});

	const appendRule = () => {
		append({
			field: 'age',
			operator: '=',
			value: '',
		});
	};

	// * Almacena la data ingresada
	const [data, setData] = useState<CampaignFormValues | null>(null);

	const onSubmit = handleSubmit(data => {
		alert('Los datos se han enviado correctamente');
		setData(data);
		reset();
	});

	return (
		<>
			<form
				className='space-y-8 container mx-auto w-[1000px]'
				onSubmit={onSubmit}
			>
				<h2 className='mb-6 text-lg font-semibold text-stone-700'>
					Información de Campaña
				</h2>

				<section className='flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<InputCampaign
							label='Nombre de Campaña'
							placeholder='Nombre de campaña'
							name='name'
							type='text'
							register={register}
							error={errors.name?.message}
						/>
					</div>

					<div className='flex gap-8'>
						<div className='flex flex-col gap-2 flex-1'>
							<InputCampaign
								label='Marca'
								placeholder='Ejm: Marca 1'
								name='brand'
								type='text'
								register={register}
								error={errors.brand?.message}
							/>
						</div>

						<Multiselect
							label='Canales'
							name='channels'
							options={channels}
							control={control}
							error={errors.channels?.message}
						/>
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
							{...register('description')}
						></textarea>
					</div>
				</section>

				{/* AUDIENCIA */}
				<section className='flex flex-col gap-4'>
					<h2 className='mb-3 text-lg font-semibold text-stone-700'>
						Audiencia
					</h2>

					<div className='flex gap-8'>
						<InputIcon
							label='Clientes Objetivo'
							type='number'
							register={register}
							name='audience.targetClients'
							error={errors.audience?.targetClients?.message}
							placeholder='Ejm: 10000'
							icon={<IoPerson />}
						/>

						<InputIcon
							label='Solo correos electrónicos'
							type='number'
							register={register}
							name='audience.onlyEmails'
							error={errors.audience?.onlyEmails?.message}
							placeholder='Ejm: 2000'
							icon={<MdEmail />}
						/>
					</div>

					<div className='flex gap-8'>
						<InputIcon
							label='Solo SMS'
							type='number'
							register={register}
							name='audience.onlySMS'
							error={errors.audience?.onlySMS?.message}
							placeholder='Ejm: 1200'
							icon={<FaCommentSms />}
						/>

						<div className='flex flex-col gap-2 flex-1'>
							<SingleSelect
								options={customersOptions}
								label='Clientes'
								icon={<IoPeople />}
								control={control}
								name='audience.clientType'
								error={errors.audience?.clientType?.message}
							/>
						</div>
					</div>
				</section>

				{/* REGLAS */}
				<section className='flex flex-col gap-4'>
					<h2 className='mb-3 text-lg font-semibold text-stone-700'>
						Reglas
					</h2>

					{fields.map((field, index) => (
						<div className='flex gap-8 items-start' key={field.id}>
							<SingleSelect
								options={rulesOptions}
								control={control}
								name={`rules.${index}.field`}
								error={errors.rules?.[index]?.field?.message}
							/>

							<SingleSelect
								options={operators}
								control={control}
								name={`rules.${index}.operator`}
								error={errors.rules?.[index]?.operator?.message}
							/>

							<div className='flex flex-col gap-2 w-full'>
								<div className='flex items-center gap-3 border bg-white border-stone-300 rounded-md p-2 text-sm font-medium resize-none text-stone-800'>
									<input
										type='number'
										className='w-full outline-none'
										min={0}
										placeholder='300'
										{...register(`rules.${index}.value`)}
									/>
								</div>
								{errors.rules?.[0]?.value && (
									<p className='text-red-500 text-sm'>
										{errors.rules?.[index]?.value?.message}
									</p>
								)}
							</div>

							<button
								type='button'
								className='cursor-pointer transition-all group mt-3 '
								onClick={() => remove(index)}
							>
								<FaRegTrashCan className='text-stone-500 group-hover:text-red-500' />
							</button>
						</div>
					))}

					<button
						className='text-stone-800 text-sm font-medium self-start flex items-center gap-1 leading-0 cursor-pointer'
						type='button'
						onClick={appendRule}
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
			{data && (
				<div className='container mx-auto w-[1000px] mt-8 bg-white py-6 px-10 rounded-lg'>
					<h2 className='mb-6 text-lg font-semibold text-stone-700'>
						Data Ingresada
					</h2>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</div>
			)}
		</>
	);
};
