import classNames from 'classnames/bind';
import styles from './Details.module.scss';

import img1 from '~/assets/images/T-shirt.png';

const cx = classNames.bind(styles);

function Details() {
    const data = [
        {
            id: 1,
            name: '세터 로고 자수 보야지 반팔 티셔츠',
            seller: '무신사 (Musinsa)',
            price: 79000,
            categoryId: ['독특한', '시원한', '밝은'],
            imgSrc: img1,
            gender: '남',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {data.map((item, index) => {
                    return (
                        <div className={cx('product')} key={index}>
                            <img src={item.imgSrc} alt="Product" />
                            <div className={cx('produc-details')}>
                                <a href="/details" className={cx('product-name')}>
                                    {item.name}
                                </a>
                                <p className={cx('product-price')}>{item.price.toLocaleString()}원</p>
                                <div className={cx('product-category')}>
                                    {[...item.categoryId].map((x, i) => (
                                        <div className={cx('product-category-id')} key={i}>
                                            {x}
                                        </div>
                                    ))}
                                </div>

                                <p className={cx('product-seller')}>{item.seller}</p>
                                <div className={cx('btn')}>
                                    <a href="/details" className={cx('seller-link')}>
                                        구매 링크로 이동
                                    </a>
                                    <a href="/" className={cx('home')}>
                                        목록으로
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Details;
