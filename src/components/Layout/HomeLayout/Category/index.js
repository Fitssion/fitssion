import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category')}>
                <div className={cx('category-sex-filter')}>
                    <h2>카테고리 필터</h2>
                    <button className={cx('btn-sex-filter')}>남여공용</button>
                    <button className={cx('btn-sex-filter')}>남자</button>
                    <button className={cx('btn-sex-filter')}>여자</button>
                </div>
                <div className={cx('category-filter-init')}>필터 초기화</div>
            </div>
            <div className={cx('category-filter')}>
                <div className={cx('category-filter-top')}>
                    <p className={cx('filter-name')}>귀여운</p>
                    <p className={cx('filter-name')}>산뜻한</p>
                    <p className={cx('filter-name')}>댄디한</p>
                    <p className={cx('filter-name')}>힙한</p>
                    <p className={cx('filter-name')}>화려한</p>
                    <p className={cx('filter-name')}>차분한</p>
                    <p className={cx('filter-name')}>빈티지한</p>
                    <p className={cx('filter-name')}>밝은</p>
                    <p className={cx('filter-name')}>어두운</p>
                </div>
                <div className={cx('category-filter-bottom')}>
                    <p className={cx('filter-name')}>따뜻한</p>
                    <p className={cx('filter-name')}>깔끔한</p>
                    <p className={cx('filter-name')}>심플한</p>
                    <p className={cx('filter-name')}>여유로운</p>
                    <p className={cx('filter-name')}>미니멀한</p>
                    <p className={cx('filter-name')}>캐주얼한</p>
                    <p className={cx('filter-name')}>비즈니스한</p>
                    <p className={cx('filter-name')}>독특한</p>
                    <p className={cx('filter-name')}>시원한</p>
                </div>
            </div>
        </div>
    );
}

export default Category;
