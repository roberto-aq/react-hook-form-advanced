import { z } from 'zod';
import {
	customersOptions,
	operators,
	rulesOptions,
} from '../constants/data';

export const campaignSchema = z.object({
	name: z
		.string()
		.min(3, 'El nombre debe tener al menos 3 caracteres'),
	brand: z.string().min(3, 'La marca es obligatoria'),
	description: z.string().optional(),
	channels: z
		.array(z.string())
		.nonempty('Debes seleccionar al menos un canal'),
	audience: z.object({
		targetClients: z.coerce
			.number()
			.int()
			.positive('Debe ser un número positivo'),
		onlyEmails: z.coerce
			.number()
			.int()
			.positive('Debe ser un número positivo'),
		onlySMS: z.coerce
			.number()
			.int()
			.positive('Debe ser un número positivo'),
		clientType: z.enum(
			customersOptions.map(option => option.value) as [
				string,
				...string[]
			]
		),
	}),

	rules: z
		.array(
			z.object({
				field: z.enum(
					rulesOptions.map(option => option.value) as [
						string,
						...string[]
					]
				),
				operator: z.enum(
					operators.map(option => option.value) as [
						string,
						...string[]
					]
				),
				value: z.union([
					z.string().min(1, 'El valor es obligatorio'),
					z.number(),
				]),
			})
		)
		.optional(),
});

export type CampaignFormValues = z.infer<typeof campaignSchema>;
