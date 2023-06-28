import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperation';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {token && (
        <>
          <ContactForm />
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default Contacts;
