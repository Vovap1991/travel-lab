import { ContactsList } from './Contacts.styled';

export const Contacts = () => {
  return (
    <address>
      <ContactsList>
        <li>
          <a href="tel:+380634320878">+38 063 432 08 78</a>
        </li>
        <li>
          <a href="mailto:info@travel-lab.com.ua">info@travel-lab.com.ua</a>
        </li>
      </ContactsList>
    </address>
  );
};
