import Header from '~/components/Layout/Header';
import Category from './Category';

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Category />
            </div>
        </div>
    );
}

export default HomeLayout;
