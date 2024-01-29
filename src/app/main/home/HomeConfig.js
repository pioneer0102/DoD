import { lazy } from 'react';

const Home = lazy(() => import('./Home'));

const HomeConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/menu/home',
            element: <Home />
        }
    ]
};

export default HomeConfig;