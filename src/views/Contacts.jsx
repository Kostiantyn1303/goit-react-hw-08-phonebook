import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const token = useSelector(getToken);

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
