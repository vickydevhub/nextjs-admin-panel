import { useState } from 'react'
import { useFormik } from 'formik'
import { registerSchema } from '../schema/register'
import { FocusError } from 'focus-formik-error';
import { ErrorMessage } from './ErrorMessage';

const Signup = () => {
  const [input, setInput] = useState('')

  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      name: '', 
      email: '',
      password: '', 
    },
    onSubmit: async values => {
      try {
        console.log("values==", values);
      } catch (err) {
         
      }
    },
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    setValues,
    isSubmitting,
    setFieldValue,
    setFieldError,
  } = formik;

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Create an account
        </h1>
        <FocusError formik={formik} />
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              autoComplete="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
            <ErrorMessage name="name" errors={errors} touched={touched} />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              autoComplete="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage name="email" errors={errors} touched={touched} />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              autoComplete="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <ErrorMessage name="password" errors={errors} touched={touched} />
          </div>
          <p className="text-xs text-gray-800 font-bold">
            Password must be at least 8 characters long
          </p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-2 text-xs text-center text-gray-700">
          {" "}
          Already a member?{" "}
          <a href="/login" className="font-medium text-gray-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup