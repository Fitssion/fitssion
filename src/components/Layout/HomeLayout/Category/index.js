import classNames from 'classnames/bind';
import styles from './Category.module.scss';

import './style.css';

import axios from 'axios';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const API_URL = 'http://ec2-43-202-209-187.ap-northeast-2.compute.amazonaws.com:8080/products';

function Category() {
    const [selectedFilters, setSelectedFilters] = useState('');
    const [selectedFiltersGender, setSelectedFiltersGender] = useState(0);
    const [selectedPages, setSelectedPage] = useState(0);
    const [filteredItems, setFilteredItems] = useState([]);
    const [pagination, setPagination] = useState(API_URL);

    const pageNum = [0, 1, 2];

    const handlePageButtonClick = (value) => {
        handleSeletedPage(value);
        if (value > 0) {
            setPagination(`${API_URL}?gender=${selectedFiltersGender}&page=${value}`);
        } else {
            setPagination(API_URL);
        }
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(pagination);
            setFilteredItems(res.data.data);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, [handlePageButtonClick]);

    //카테고리 상품 logic

    let filters = [
        { id: 0, name: '귀여운' },
        { id: 1, name: '산뜻한' },
        { id: 2, name: '댄디한' },
        { id: 3, name: '힙한' },
        { id: 4, name: '화려한' },
        { id: 5, name: '차분한' },
        { id: 6, name: '빈티지한' },
        { id: 7, name: '밝은' },
        { id: 8, name: '어두운' },
        { id: 9, name: '따뜻한' },
        { id: 10, name: '깔끔한' },
        { id: 11, name: '심플한' },
        { id: 12, name: '여유로운' },
        { id: 13, name: '미니멀한' },
        { id: 14, name: '캐주얼한' },
        { id: 15, name: '비즈니스한' },
        { id: 16, name: '독특한' },
        { id: 17, name: '시원한' },
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

    let filterGender = [
        { id: 0, name: '남여공용' },
        { id: 1, name: '남' },
        { id: 2, name: '여' },
    ];
    const handleGenderFilterButtonClick = (selectedGender) => {
        if (selectedFiltersGender === selectedGender) {
            setSelectedFiltersGender(0);
        } else {
            setSelectedFiltersGender(selectedGender);
        }
    };

    const handleSeletedPage = (selectedPage) => {
        if (selectedPages === selectedPage) {
            setSelectedPage(0);
        } else {
            setSelectedPage(selectedPage);
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
            setPagination(`${API_URL}?gender=${selectedFiltersGender}&category=${selectedFilters}`);
            // window.location.href = `${LOCATION_URL}?gender=${selectedFiltersGender}&category=${selectedFilters}`;
            console.log(`page = ${pagination}`);
        } else {
            setPagination(`${API_URL}?gender=${selectedFiltersGender}`);
        }
    };

    /* eslint-disable */
    useEffect(() => {
        filterItemsGender();
    }, [selectedFiltersGender]);
    /* eslint-enable */

    //Filter logic
    const filterItemsGender = () => {
        if (selectedFiltersGender > 0) {
            setPagination(`${API_URL}?gender=${selectedFiltersGender}`);
            // window.location.href = `${LOCATION_URL}?gender=${selectedFiltersGender}`;
            console.log(`page = ${pagination}`);
        } else {
            setPagination(API_URL);
            console.log(`page = ${pagination}`);
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
                                onClick={() => handleGenderFilterButtonClick(gender.id)}
                                className={cx(`btn-sex-filter ${selectedFiltersGender === gender.id ? 'active' : ''}`)}
                                key={`filters-${idx}`}
                            >
                                {gender.name}
                            </button>
                        ))}
                        {/* <button className={cx('btn-sex-filter')}>남여공용</button>
                        <button className={cx('btn-sex-filter')}>남자</button>
                        <button className={cx('btn-sex-filter')}>여자</button> */}
                    </div>
                    <a href="/products" className={cx('category-filter-init')}>
                        필터 초기화
                    </a>
                </div>
                <div className={cx('category-filter')}>
                    {filters.map((category, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(category.id)}
                            className={cx(`filter-name ${selectedFilters?.includes(category.id) ? 'active' : ''}`)}
                            key={`filters-${idx}`}
                        >
                            {category.name}
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
                            <a href={`/products/${item.id}`}>
                                <div className={cx('product')} key={index}>
                                    <img src={item.imgSrc} alt="Product" />
                                    <p className={cx('product-name')}>{item.name}</p>
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
                            </a>
                        );
                    })}
                </div>
                <div className={cx('pagination')}>
                    {pageNum.slice(0, selectedFiltersGender > 0 ? pageNum.length : -1).map((num, index) => {
                        return (
                            <button
                                onClick={() => handlePageButtonClick(num)}
                                className={cx(`page-link ${selectedPages === num ? 'page-active' : ''}`)}
                                key={index}
                            >
                                {num + 1}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Category;
