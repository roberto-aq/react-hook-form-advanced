import { Navigate, Route, Routes } from 'react-router';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { CampaignPage, CheckoutPage, HomePage } from '../pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to={'/dashboard'} replace />}
			/>
			<Route path='/dashboard' element={<DashboardLayout />}>
				<Route index element={<HomePage />} />
				<Route path='checkout' element={<CheckoutPage />} />
				<Route path='campaign' element={<CampaignPage />} />
			</Route>
		</Routes>
	);
};
