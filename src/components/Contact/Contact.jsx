import s from './Contact.module.css'
import { IoMdContact } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

export const Contact = ({ contact, onDelete }) => {
    const {id, name, number} = contact;
  return (
    <li className={s.list_style}>
        <div>
          <div className={s.wrap_icon}>
            <IoMdContact style={{width: 30, height: 30,}}/>
            <p>{name}</p>
          </div>
          <div className={s.wrap_icon}>
            <BsTelephone style={{width: 30, height: 30,}}/>
            <p>{number}</p>
          </div>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  ) 

}
export default Contact