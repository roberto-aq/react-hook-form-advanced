import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout = () => {
	return (
		<div className='h-screen flex'>
			<Sidebar />

			<main className='w-full bg-stone-200 px-8 py-10 overflow-y-auto'>
				<Outlet />
			</main>
		</div>
	);
};
