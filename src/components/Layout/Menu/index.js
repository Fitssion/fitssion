import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const API_URL = 'http://ec2-43-202-209-187.ap-northeast-2.compute.amazonaws.com:8080/products/';

function Menu({ id }) {
    const [pagination, setPagination] = useState(API_URL + `${id}`);
    const [item, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(pagination);
                console.log(res.data);
                setData(res.data.relProducts);
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2> </h2>
            </div>
            {/* <div className={cx('title')}>
                <h2>의류 목록</h2>
                <button>키테고리 정확도 순</button>
            </div> */}
            <div className={cx('content')}>
                {item.map((item, index) => {
                    return (
                        <div className={cx('product')} key={index}>
                            <img src={item.imgSrc} alt="Product" />
                            <a href={`/products/${item.id}`} className={cx('product-name')}>
                                {item.name}
                            </a>
                            <div className={cx('product-seller-price')}>
                                <p className={cx('product-seller')}>{item.seller}</p>
                                <p className={cx('product-price')}>{item.price.toLocaleString()}원</p>
                            </div>
                            {/* <div className={cx('product-category')}>
                                {[...item.categoryId].map((x, i) => (
                                    <div className={cx('product-category-id')} key={i}>
                                        {x}
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    );
                })}
            </div>
            <div className={cx('pagination')}>
                <a href="/products" className={cx('page-link')}>
                    1
                </a>
                <a href="/products" className={cx('page-link')}>
                    2
                </a>
                <a href="/products" className={cx('page-link')}>
                    3
                </a>
                <a href="/products" className={cx('page-link')}>
                    4
                </a>
                <a href="/products" className={cx('page-link')}>
                    5
                </a>
            </div>
        </div>
    );
}

export default Menu;
