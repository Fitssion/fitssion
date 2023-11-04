import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    //(root) 사이트가 자동으로 /products 페이지를 이동
    const Home = () => {
        const navigate = useNavigate();
        React.useEffect(() => {
            navigate('/products');
        }, [navigate]);

        return <div>Home Page</div>;
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
