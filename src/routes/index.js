import Home from '~/pages/Home';
import Details from '~/pages/Details';
import { HomeLayout, DetailsLayout } from '~/components/Layout';

//로그인을 안 해도 볼 수 있는 페이지
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/details', component: Details, layout: DetailsLayout },
];

//로그인해야 볼 수 있는 페이지
const privateRoutes = [];

export { publicRoutes, privateRoutes };
