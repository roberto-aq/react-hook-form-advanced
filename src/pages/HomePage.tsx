export const HomePage = () => {
	return (
		<div className='flex flex-col gap-5 h-full'>
			<h1 className='font-semibold text-2xl text-center'>
				Formularios Avanzados con React Hook Form 🚀
			</h1>

			<p className='text-lg text-gray-600 max-w-3xl mb-8 flex-1'>
				En este proyecto, te enseño paso a paso cómo crear formularios
				eficientes y reutilizables utilizando{' '}
				<span className='font-semibold'>React Hook Form</span>,
				<span className='font-semibold'> TypeScript</span>, y
				<span className='font-semibold'> Zod</span>. Aprenderás a
				gestionar validaciones complejas, campos dinámicos y más en el
				contexto de un dashboard moderno.
			</p>

			<p className='text-sm'>
				&copy; Desarrollado por{' '}
				<span className='font-medium'>Roberto Andrade</span> - 2025
			</p>
		</div>
	);
};
