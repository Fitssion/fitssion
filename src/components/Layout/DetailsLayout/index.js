import Header from '~/components/Layout/Header';
import Menu from '~/components/Layout/Menu';
import Details from './Details';
import { useParams } from 'react-router-dom';

function DetailsLayout({ children }) {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <div className="container">
                <Details id={id} />
                <Menu id={id} />
            </div>
        </div>
    );
}

export default DetailsLayout;
