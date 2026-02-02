import { createBrowserRouter } from 'react-router-dom';
// import HomePage from '@/features/home/pages/HomePage';
// import LoginPage from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./layouts/MainLayout'),
    children: [
        { 
            index: true, 
            lazy: () => import('./modules/home') 
        },
    ]
   
  },
]);
