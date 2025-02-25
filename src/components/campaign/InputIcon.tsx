import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { CampaignFormValues } from '../../schemas/campaign.schema';
import { Path, UseFormRegister } from 'react-hook-form';

interface Props {
	label: string;
	type: HTMLInputTypeAttribute;
	register: UseFormRegister<CampaignFormValues>;
	name: Path<CampaignFormValues>;
	icon: ReactNode;
	// Optionals
	placeholder?: string;
	error?: string;
	className?: string;
	maxLength?: number;
	minLength?: number;
}

export const InputIcon = ({
	label,
	type,
	register,
	name,
	icon,
	placeholder,
	error,
	className,
	maxLength,
	minLength,
}: Props) => {
	return (
		<div className='flex flex-col gap-2 flex-1'>
			<label className='font-medium text-sm' htmlFor={name}>
				{label}:
			</label>
			<div
				className={`flex items-center gap-3 border bg-white rounded-md p-3 text-sm resize-none text-stone-800 ${
					error ? 'border-red-500' : 'border-stone-300'
				} ${className}`}
			>
				{icon}
				<input
					type={type}
					id={name}
					className={`outline-none w-full`}
					placeholder={placeholder}
					min={minLength}
					max={maxLength}
					{...register(name)}
				/>
			</div>
			{error && <span className='text-red-500 text-sm'>{error}</span>}
		</div>
	);
};
