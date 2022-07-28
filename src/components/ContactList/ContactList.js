// import { deleteContact } from 'redux/actions-contacts';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

    const contactsFilter = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    // const onDelete = id => {
    //     dispatch(deleteContact(id));
    // }

    return (
        <ul>
            {contactsFilter.map(({ id, name, number }) => {
                return (
            <ContactListItem
                contact={{ id, name, number }}
                key={id}
            />
            );
            })}
        </ul>
    );
};

export default ContactList;