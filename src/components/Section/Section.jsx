import s from './Section.module.css'

export const Section = ({children}) => {
  return <div className={s.section}>{children}</div>
}
export default Section