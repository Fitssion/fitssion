import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import img1 from '~/assets/images/T-shirt.png';
import img2 from '~/assets/images/shirt.png';
import img3 from '~/assets/images/trousers.png';

const cx = classNames.bind(styles);

function Menu() {
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
        {
            id: 2,
            name: '그라데이션 오피서 하프 셔츠',
            seller: '무신사 (Musinsa)',
            price: 103000,
            categoryId: ['시원한', '독특한'],
            imgSrc: img2,
            gender: '남',
        },
        {
            id: 3,
            name: 'XP138 파스텔 데님 카고 팬츠',
            seller: '에이블리 ',
            price: 9000,
            categoryId: ['화려한'],
            imgSrc: img3,
            gender: '남',
        },
        {
            id: 4,
            name: '세터 로고 자수 보야지 반팔 티셔츠',
            seller: '무신사 (Musinsa)',
            price: 79000,
            categoryId: ['독특한', '시원한', '밝은'],
            imgSrc: img1,
            gender: '남',
        },
        {
            id: 5,
            name: '그라데이션 오피서 하프 셔츠',
            seller: '무신사 (Musinsa)',
            price: 103000,
            categoryId: ['시원한', '독특한'],
            imgSrc: img2,
            gender: '남',
        },
        {
            id: 6,
            name: 'XP138 파스텔 데님 카고 팬츠',
            seller: '에이블리 ',
            price: 9000,
            categoryId: ['화려한'],
            imgSrc: img3,
            gender: '남',
        },
        {
            id: 7,
            name: '세터 로고 자수 보야지 반팔 티셔츠',
            seller: '무신사 (Musinsa)',
            price: 79000,
            categoryId: ['독특한', '시원한', '밝은'],
            imgSrc: img1,
            gender: '남',
        },
        {
            id: 8,
            name: '그라데이션 오피서 하프 셔츠',
            seller: '무신사 (Musinsa)',
            price: 103000,
            categoryId: ['시원한', '독특한'],
            imgSrc: img2,
            gender: '남',
        },
        {
            id: 9,
            name: 'XP138 파스텔 데님 카고 팬츠',
            seller: '에이블리 ',
            price: 9000,
            categoryId: ['화려한'],
            imgSrc: img3,
            gender: '남',
        },
        {
            id: 10,
            name: '세터 로고 자수 보야지 반팔 티셔츠',
            seller: '무신사 (Musinsa)',
            price: 79000,
            categoryId: ['독특한', '시원한', '밝은'],
            imgSrc: img1,
            gender: '남',
        },
        {
            id: 11,
            name: '그라데이션 오피서 하프 셔츠',
            seller: '무신사 (Musinsa)',
            price: 103000,
            categoryId: ['시원한', '독특한'],
            imgSrc: img2,
            gender: '남',
        },
        {
            id: 12,
            name: 'XP138 파스텔 데님 카고 팬츠',
            seller: '에이블리 ',
            price: 9000,
            categoryId: ['화려한'],
            imgSrc: img3,
            gender: '남',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>의류 목록</h2>
                <button>키테고리 정확도 순</button>
            </div>
            <div className={cx('content')}>
                {data.map((item, index) => {
                    return (
                        <div className={cx('product')} key={index}>
                            <img src={item.imgSrc} alt="Product" />
                            <a href="/details" className={cx('product-name')}>
                                {item.name}
                            </a>
                            <div className={cx('product-seller-price')}>
                                <p className={cx('product-seller')}>{item.seller}</p>
                                <p className={cx('product-price')}>{item.price.toLocaleString()}원</p>
                            </div>
                            <div className={cx('product-category')}>
                                {[...item.categoryId].map((x, i) => (
                                    <div className={cx('product-category-id')} key={i}>
                                        {x}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('pagination')}>
                <a href="/" className={cx('page-link')}>
                    1
                </a>
                <a href="/" className={cx('page-link')}>
                    2
                </a>
                <a href="/" className={cx('page-link')}>
                    3
                </a>
                <a href="/" className={cx('page-link')}>
                    4
                </a>
                <a href="/" className={cx('page-link')}>
                    5
                </a>
            </div>
        </div>
    );
}

export default Menu;
