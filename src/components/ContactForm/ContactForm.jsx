import s from './ContactForm.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export const ContactForm = ({handleNewContact}) => {

    const initialValues = { 
        id: nanoid(),    
        name: "",
        number: ""
    }

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too Shrot!').max(50, 'Too Long').required('Required'),
        number: Yup.string().min(3, 'number is too short!').max(50, 'Too Long').required('Required'),
        
    });

    const handleSubmit = (values, option) => {  
        handleNewContact(values)  
        console.log(values);
        option.resetFrorm();
    }

  return <div className={s.wrap}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={s.form_style}>
            <label name='name'> Name
                <Field label="name" name="name" className={s.fie_style} placeholder="name"/>
                <ErrorMessage name='name'component="span" className={s.error_style}/>
            </label>
            <label name='number'> Number 
                <Field name='number'  placeholder="number" className={s.fie_style}/>   
                <ErrorMessage name='number' component="span" className={s.error_style}/>          
            </label>
            <button>ADD contact</button>
        </Form>
    </Formik>

  </div>
}
export default ContactForm