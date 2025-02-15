import { z } from 'zod';

const cardSchema = z
	.object({
		name: z.string().min(3, 'El nombre es obligatorio'),
		number: z
			.string()
			.min(19, 'El número de tarjeta debe tener 16 dígitos')
			.max(19, 'El número de tarjeta debe tener 16 dígitos'),
		expiration: z
			.string()
			.regex(
				/^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
				'Formato de fecha inválido (MM/AA)'
			),
		cvc: z
			.string()
			.min(3, 'El CVC debe tener 3 dígitos')
			.max(4, 'El CVC debe tener 3 dígitos'),
	})
	.optional();

const bankSchema = z
	.object({
		nameAccount: z.string().min(3, 'El nombre es obligatorio'),
		accountNumber: z
			.string()
			.min(10, 'El número de cuenta debe tener al menos 10 dígitos'),
	})
	.optional();

export const checkoutSchema = z
	.object({
		email: z.string().email('Email inválido'),
		paymentMethod: z.enum(['card', 'bank'], {
			required_error: 'Seleccione un método de pago',
		}),
		delivery: z.enum(['free', 'express'], {
			required_error: 'Seleccione un método de envío',
		}),
		card: cardSchema,
		bank: bankSchema,
	})
	.refine(
		data => {
			if (data.paymentMethod === 'card') {
				return (
					!!data.card?.name &&
					!!data.card?.number &&
					!!data.card?.expiration &&
					!!data.card?.cvc
				);
			}

			if (data.paymentMethod === 'bank') {
				return !!data.bank?.nameAccount && !!data.bank?.accountNumber;
			}
		},
		{
			message:
				'Debe completar los datos del método de pago seleccionado',
			path: ['paymentMethod'],
		}
	);

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
