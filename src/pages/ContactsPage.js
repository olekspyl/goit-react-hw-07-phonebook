import Contacts from "components/Contacts";
import Filter from "components/Filter";
import Form from "components/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectIsLoading } from "redux/contacts/contactsSelectors";
 
const ContactsPage = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    return (
        <>
        <title>Contacts</title>
        <Form />
            <div>{isLoading && 'Request in progress...'}</div>
        <Filter />
        <Contacts />
        </>
    );
}

export default ContactsPage;