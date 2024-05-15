import './App.css';
import { useFormik } from 'formik';
import * as Yup from "yup"

function App() {
  const DisplayingErrorMessagesSchema = Yup.object().shape({

    first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First Name is Required'),
    last_name: Yup.string().min(2,"Too Short!").max(50,"Too Long!").required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    address: Yup.string().min(2,"Too Short!").max(50,"Too Long!"),
    password:Yup.string().min(2,"Too Short!").max(50,"Too Long!").required('Password is Required')
 
  });
  
  const formik = useFormik({
    initialValues:{
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      confirm_passwod:"",
      Address:"",

    },

    validationSchema:DisplayingErrorMessagesSchema,

    onSubmit:values => {
      alert(JSON.stringify(values.email))
    }
  })

  return (
   <>
   <section className="h-[100vh] py-2 md:py-10 flex justify-center items-center w-full px-2">
      <div className='md:w-1/2 w-full border border-spacing-2 p-5 rounded-md'>
          <form action="" className="flex gap-10 flex-col p-2" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full text-center flex flex-col gap-3">
                <input type="text" name='first_name' onBlur={formik.handleBlur} value={formik.values.first_name} onChange={formik.handleChange} placeholder='First Name' className="font-serif text-2xl border border-spacing-1 w-full h-10 outline-none px-6 py-6 rounded-lg" />
                {formik.touched.first_name && formik.errors.first_name ? (<div className="text-red-500 opacity-70 text-xl capitalize">{formik.errors.first_name}</div> ) : null}
                </div> 
                <div className="w-full text-center flex flex-col gap-3">
                <input type="text" name='last_name' onBlur={formik.handleBlur} value={formik.values.last_name} onChange={formik.handleChange} placeholder='Last Name' className="font-serif text-2xl border border-spacing-1 h-10 w-full outline-none px-6 py-6 rounded-lg" />
                {formik.touched.last_name && formik.errors.last_name ? (<div className="text-red-500 text-xl capitalize">{formik.errors.last_name}</div> ) : null}
                </div>
              </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full text-center flex flex-col gap-3">
                <input type="text" name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email'  className="font-serif text-2xl border border-spacing-1 h-10 outline-none px-6 py-6 rounded-lg w-full" />
                {formik.touched.email && formik.errors.email ? (<div className="text-red-500 text-xl capitalize">{formik.errors.email}</div> ) : null}
                </div>
                <div className="w-full text-center flex flex-col gap-3">
                <input type="text" name='Address' value={formik.values.Address} onCanPlay={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Address' className="font-serif text-2xl border border-spacing-1 h-10 outline-none px-6 py-6 rounded-lg w-full" />
                {formik.touched.Address && formik.errors.Address ? (<div className="text-red-500 text-xl capitalize">{formik.errors.Address}</div> ) : null}
                </div>
              </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full text-center flex flex-col gap-3">
                <input type="password" name='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='Password' className="font-serif text-2xl border border-spacing-1 h-10 outline-none px-6 py-6 rounded-lg w-full" />
                {formik.touched.password && formik.errors.password ? (<div className="text-red-500 text-xl capitalize">{formik.errors.password}</div> ) : null}
                </div>
                <div className="w-full text-center flex flex-col gap-3">
                <input type="confirm_passwod" name='confirm_passwod'  onBlur={formik.handleBlur} value={formik.values.confirm_passwod} onChange={formik.handleChange} placeholder='Confirame Password' className="font-serif text-2xl border border-spacing-1 h-10 outline-none px-6 py-6 rounded-lg w-full" />
                {formik.touched.confirm_passwod && formik.errors.confirm_passwod ? (<div className="text-red-500 text-xl capitalize">{formik.errors.confirm_passwod}</div> ) : null}
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button type="submit" className="text-2xl font-bold capitalize px-4 py-2 rounded-lg hover:shadow-xl bg-blue-600 text-white">Submite</button>
              </div>
          </form>
      </div>
   </section>
  
   </>
  );
}

export default App;
