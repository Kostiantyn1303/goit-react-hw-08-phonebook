import { List, Items, BtnDelete } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { deleteContacts } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import { selectItems } from '../../redux/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  let filter = useSelector(getFilter);
  const contacts = useSelector(selectItems);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = () =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

  const handleDeleteContact = contactsId => {
    dispatch(deleteContacts(contactsId));
  };

  return (
    <List>
      {contacts &&
        filteredContacts()?.map(({ id, name, number }) => (
          <Items key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <BtnDelete type="submit" onClick={() => handleDeleteContact(id)}>
              {' '}
              Delete
            </BtnDelete>
          </Items>
        ))}
    </List>
  );
};
export default ContactList;
