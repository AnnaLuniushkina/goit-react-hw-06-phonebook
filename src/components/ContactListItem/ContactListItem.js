import { deleteContact } from 'redux/actions-contacts';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactListItem.module.css';

const ContactListItem = ({contact}) => {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const onDelete = id => {
        dispatch(deleteContact(id));
    }

    return (
    <li
        key={contacts.id}
            className={styles.contactListItem}>
            {contact.name}: {contact.number}
        <button
            className={styles.contactListItem__button}
            type='button'
            onClick={() => onDelete(contact.id)}
        >
            Delete
        </button>
    </li>
    );
};

export default ContactListItem;