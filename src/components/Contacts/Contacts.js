import { ContactsList, ContactsListItem } from './Contacts.styled';

export const Contacts = () => {
  return (
    <address>
      <ContactsList>
        <ContactsListItem>
          <a href="tel:+380634320878">+38 063 432 08 78</a>
        </ContactsListItem>
        <ContactsListItem>
          <a href="mailto:info@travel-lab.com.ua">info@travel-lab.com.ua</a>
        </ContactsListItem>
      </ContactsList>
    </address>
  );
};
