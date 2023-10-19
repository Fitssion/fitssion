import classNames from 'classnames/bind';
import styles from './Category.module.scss';

import './style.css';

import { Data } from '~/Database/Data';

import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Category() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(Data);

    // // Sử dụng fetchDataFromAPI
    // useEffect(() => {
    //     const datas = async () => {
    //         try {
    //             const res = await axios.get(
    //                 'http://ec2-43-202-209-187.ap-northeast-2.compute.amazonaws.com:8080/products',
    //             );
    //             console.log(res.data);
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     };
    //     datas();
    // });

    //카테고리 상품 logic

    let filters = [
        '귀여운',
        '산뜻한',
        '댄디한',
        '힙한',
        '화려한',
        '차분한',
        '빈티지한',
        '밝은',
        '어두운',
        '따뜻한',
        '깔끔한',
        '심플한',
        '여유로운',
        '미니멀한',
        '캐주얼한',
        '비즈니스한',
        '독특한',
        '시원한',
    ];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    //카테고리 성별 Logic

    let filterGender = ['남여공용', '남', '여'];
    const handleGenderFilterButtonClick = (selectedGender) => {
        if (selectedFilters.includes(selectedGender)) {
            let filters = selectedFilters.filter((el) => el !== selectedGender);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedGender]);
        }
    };

    /* eslint-disable */
    useEffect(() => {
        filterItems();
    }, [selectedFilters]);
    /* eslint-enable */

    //Filter logic
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = Data.filter(
                    (item) => selectedCategory === item.gender || selectedCategory === item.categoryId,
                );
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...Data]);
        }
    };

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('category')}>
                    <div className={cx('category-sex-filter')}>
                        <h2>카테고리 필터</h2>
                        {filterGender.map((gender, idx) => (
                            <button
                                onClick={() => handleGenderFilterButtonClick(gender)}
                                className={cx(`btn-sex-filter ${selectedFilters?.includes(gender) ? 'active' : ''}`)}
                                key={`filters-${idx}`}
                            >
                                {gender}
                            </button>
                        ))}
                        {/* <button className={cx('btn-sex-filter')}>남여공용</button>
                        <button className={cx('btn-sex-filter')}>남자</button>
                        <button className={cx('btn-sex-filter')}>여자</button> */}
                    </div>
                    <a href="/" className={cx('category-filter-init')}>
                        필터 초기화
                    </a>
                </div>
                <div className={cx('category-filter')}>
                    {filters.map((category, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={cx(`filter-name ${selectedFilters?.includes(category) ? 'active' : ''}`)}
                            key={`filters-${idx}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className={cx('title')}>
                    <h2> </h2>
                </div>
                {/* <div className={cx('title')}>
                <h2>의류 목록</h2>
                <button>키테고리 정확도 순</button>
            </div> */}
                <div className={cx('content')}>
                    {filteredItems.map((item, index) => {
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
                                {/* <div className={cx('product-category')}> */}
                                {/* {[...item.categoryId].map((x, i) => (
                                        <div className={cx('product-category-id')} key={i}>
                                            {x}
                                        </div>
                                    ))} */}
                                {/* <div className={cx('product-category-id')}>{item.categoryId}</div> */}
                                {/* </div> */}
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
        </div>
    );
}

export default Category;
