import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const API_URL = 'http://ec2-43-202-209-187.ap-northeast-2.compute.amazonaws.com:8080/products/';

const Details = ({ id }) => {
    const [pagination, setPagination] = useState(API_URL + `${id}`);
    const [item, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(pagination);
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('product')}>
                    <img src={item.imgSrc} alt="Product" />
                    <div className={cx('produc-details')}>
                        <a href={`/products/${item.id}`} className={cx('product-name')}>
                            {item.name}
                        </a>
                        <p className={cx('product-price')}>{item.price}원</p>
                        <p className={cx('product-seller')}>{item.seller}</p>
                        <div className={cx('btn')}>
                            <a href={`${item.link}`} className={cx('seller-link')} target="_blank">
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
};

export default Details;
