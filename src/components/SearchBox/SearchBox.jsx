import { RiUserSearchFill } from "react-icons/ri";
import s from './SearchBox.module.css'

export const SearchBox = ({ setSearcWord, searchWord }) => {
  return <div className={s.wrap}>
    <label >
        <RiUserSearchFill className={s.icon_style}/>
        <input className={s.form_style } value={searchWord} onChange={(e) => setSearcWord(e.target.value)} placeholder='Place enter name'/>
    </label>
  </div>
}
export default SearchBox