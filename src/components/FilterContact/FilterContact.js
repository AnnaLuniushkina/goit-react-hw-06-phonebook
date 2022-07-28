import { filterChange } from 'redux/actions-contacts';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FilterContact.module.css';

const FilterContact = ({ title }) => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <label className={styles.filter__label}>
            {title}
            <input
                className={styles.filter__input}
                type='text'
                name='filter'
                value={value}
                onChange={event => dispatch(filterChange(event.currentTarget.value))} />
        </label>
    );
};

export default FilterContact;