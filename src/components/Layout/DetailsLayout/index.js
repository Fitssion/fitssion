import Header from '~/components/Layout/Header';
import Menu from '~/components/Layout/Menu';
import Details from './Details';

function DetailsLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Details />
                <Menu />
            </div>
        </div>
    );
}

export default DetailsLayout;
