import Header from '~/components/Layout/Header';
import Details from './Category';

function DetailsLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Details />
            </div>
        </div>
    );
}

export default DetailsLayout;
