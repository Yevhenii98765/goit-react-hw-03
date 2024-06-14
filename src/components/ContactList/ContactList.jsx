import Contact from "../Contact/Contact"
import s from './ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => {
  return <ul className={s.wrap}>
    {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
    ))}
  </ul>
}
export default ContactList