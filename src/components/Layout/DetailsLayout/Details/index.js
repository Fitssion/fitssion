import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import './style.css';
import { Data } from '~/Database/Data.js';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Details = ({ id }) => {
    const [item, setData] = useState(Data);

    for (let i = 0; i < Data.length; i++) {
        if (id == item[i].id) {
            return (
                <div className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <div className={cx('product')}>
                            <img src={item[i].imgSrc} alt="Product" />
                            <div className={cx('produc-details')}>
                                <a href={`/products/${item[i].id}`} className={cx('product-name')}>
                                    {item[i].name}
                                </a>
                                <p className={cx('product-price')}>{item[i].price.toLocaleString()}원</p>
                                {/* <div className={cx('product-category')}>
                                    {[...item.categoryId].map((x, i) => (
                                        <div className={cx('product-category-id')} key={i}>
                                            {x}
                                        </div>
                                    ))}
                                </div> */}

                                <p className={cx('product-seller')}>{item[i].seller}</p>
                                <div className={cx('btn')}>
                                    <a href={`${item[i].link}`} className={cx('seller-link')} target="_blank">
                                        구매 링크로 이동
                                    </a>
                                    <a href="/products" className={cx('home')}>
                                        목록으로
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default Details;
