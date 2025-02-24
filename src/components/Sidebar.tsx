import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaFileWaveform } from 'react-icons/fa6';
import { MdCampaign } from 'react-icons/md';
import { NavLink } from 'react-router';

const navLinks = [
	{ to: '/dashboard', label: 'Inicio', icon: <FaHome size={20} /> },
	{
		to: '/dashboard/checkout',
		label: 'Checkout',
		icon: <FaShoppingCart size={18} />,
	},
	{
		to: '/dashboard/campaign',
		label: 'Campaña',
		icon: <MdCampaign size={22} />,
	},
];

export const Sidebar = () => {
	return (
		<aside className='bg-stone-900 text-white min-w-[250px] flex flex-col gap-8 p-5'>
			<span className='flex gap-4 pl-3 items-center justify-center mt-4'>
				<FaFileWaveform size={28} />

				<h1 className=' text-xl font-bold'>Formularios Avanzados</h1>
			</span>

			<nav className='flex flex-col gap-4'>
				{navLinks.map(link => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`flex gap-3 items-center py-3 px-4 rounded-md font-medium ${
								isActive
									? 'text-yellow-300 bg-stone-600'
									: 'text-stone-500'
							}`
						}
						end
					>
						{link.icon}
						{link.label}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};
