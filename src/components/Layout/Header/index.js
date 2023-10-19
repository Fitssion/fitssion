import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/products" className={cx('home')}>
                    <img src={images.logo} alt="Fission" />
                </a>
            </div>
        </header>
    );
}

export default Header;
