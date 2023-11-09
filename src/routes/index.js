import Home from '~/pages/Home';
import Details from '~/pages/Details';
import { HomeLayout, DetailsLayout } from '~/components/Layout';

//로그인을 안 해도 볼 수 있는 페이지
const publicRoutes = [
    { path: '/products', component: Home, layout: HomeLayout },
    { path: '/products/:id', component: Details, layout: DetailsLayout },
];

export { publicRoutes };
