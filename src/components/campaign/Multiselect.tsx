import { Control, Controller, Path } from 'react-hook-form';
import { CampaignFormValues } from '../../schemas/campaign.schema';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

interface Props {
	name: Path<CampaignFormValues>;
	options: Option[];
	label: string;
	control: Control<CampaignFormValues>;
	error?: string;
}

// Animaciones de react-select
const animatedComponents = makeAnimated();

export const Multiselect = ({
	name,
	options,
	label,
	control,
	error,
}: Props) => {
	return (
		<div className='flex flex-col gap-2 flex-1'>
			<label className='text-stone-600 font-semibold-text-sm'>
				{label}:
			</label>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Select
						{...field}
						options={options}
						isMulti
						components={animatedComponents}
						onChange={selected =>
							field.onChange(selected.map(s => s.value))
						}
						value={options.filter(
							option =>
								Array.isArray(field.value) &&
								(field.value as string[]).includes(option.value)
						)}
					/>
				)}
			/>
			{error && <span className='text-red-500 text-sm'>{error}</span>}
		</div>
	);
};
