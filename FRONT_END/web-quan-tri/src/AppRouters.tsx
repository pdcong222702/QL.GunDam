import { createBrowserRouter } from 'react-router-dom';
// import HomePage from '@/features/home/pages/HomePage';
// import LoginPage from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: MainLayout } = await import('./layouts/MainLayout');

      return {
        Component: MainLayout,
      };
    },
    children: [
      {
        index: true,
        lazy: () => import('./modules/home')
      },
      {
        path: 'admin/nguoi-dung/*',
        lazy: () => import('./modules/admin.nguoi_dung')
      }
    ]

  },
]);
