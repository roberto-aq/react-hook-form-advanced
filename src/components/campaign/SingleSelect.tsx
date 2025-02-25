import { Control, Controller, Path } from 'react-hook-form';
import { CampaignFormValues } from '../../schemas/campaign.schema';
import { ReactNode } from 'react';
import Select, { StylesConfig } from 'react-select';

interface Props {
	name: Path<CampaignFormValues>;
	options: Option[];
	control: Control<CampaignFormValues>;
	// Optionals
	label?: string;
	error?: string;
	icon?: ReactNode;
}

const getCustomStyles = (
	error?: string
): StylesConfig<Option, false> => ({
	control: styles => ({
		...styles,
		display: 'flex',
		alignItems: 'center',
		border: error ? '1px solid #e53e3e' : '1px solid #e2e8f0',
		borderRadius: '6px',
	}),
	singleValue: styles => ({
		...styles,
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
	}),
	valueContainer: styles => ({
		...styles,
		display: 'flex',
		alignItems: 'center',
	}),
});

export const SingleSelect = ({
	name,
	options,
	label,
	control,
	error,
	icon,
}: Props) => {
	return (
		<div className='flex flex-col w-full'>
			{label && (
				<label className='text-stone-600 font-semibold-text-sm'>
					{label}:
				</label>
			)}
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Select
						{...field}
						options={options}
						components={{
							SingleValue: ({ data }) => (
								<div className='flex items-center gap-2 h-auto'>
									{icon && icon}
									{data.label}
								</div>
							),
						}}
						onChange={selected => field.onChange(selected?.value)}
						value={options.find(
							option => option.value === field.value
						)}
						className='w-full'
						styles={getCustomStyles(error)}
					/>
				)}
			/>
			{error && <span className='text-red-500 text-sm'>{error}</span>}
		</div>
	);
};
