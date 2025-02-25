import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { CampaignFormValues } from '../../schemas/campaign.schema';

interface Props {
	label: string;
	type: HTMLInputTypeAttribute;
	register: UseFormRegister<CampaignFormValues>;
	name: Path<CampaignFormValues>;
	// Optionals
	placeholder?: string;
	error?: string;
	className?: string;
	onChangeOverride?: ChangeEventHandler<HTMLInputElement>;
	maxLength?: number;
}

export const InputCampaign = ({
	register,
	name,
	label,
	type,
	placeholder,
	error,
	className,
	onChangeOverride,
	maxLength,
}: Props) => {
	return (
		<>
			<label className='font-medium text-sm' htmlFor={name}>
				{label}:
			</label>
			<input
				type={type}
				id={name}
				className={`border bg-white rounded-md px-4 py-2 text-sm outline-none ${
					error ? 'border-red-500' : 'border-stone-300'
				} ${className} `}
				placeholder={placeholder}
				maxLength={maxLength}
				{...register(name, {
					onChange: onChangeOverride,
				})}
			/>
			{
				error && (<p className='text-red-500 text-sm'>{error}</p>)
			}
		</>
	);
};
