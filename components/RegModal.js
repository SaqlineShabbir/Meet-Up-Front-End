import React from "react";
import styles from "../styles/modal.module.css";
import { useForm } from "react-hook-form";
import UseFirebase from "../hooks/UseFirebase";
const RegModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {registerUser} = UseFirebase()
  
  const onSubmit = (data) => {
    let name = data.fname + " " + data.sname
    registerUser(data.email, data.password, name)
  };
  if (!props.show) {
    return null;
  }
  return (
    <div onClick={props.onClose} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className="p-5">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <p className="text-gray-500">Its quick and easy</p>
        </div>
        <hr />
        <form className="p-5 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
          <input className="w-56 bg-gray-100 mb-2 rounded border p-2"  placeholder="First Name" {...register("fname")} />
          <input className="w-56 bg-gray-100 mb-2 rounded border p-2" placeholder="Surname" {...register("sname")} />
          </div>
          <input className="block bg-gray-100 mb-2 rounded p-2 border w-full" 
            placeholder="Mobile number or email address"
            {...register("email")}
          />
          <input className="block bg-gray-100 mb-2 rounded p-2 border w-full"  placeholder="New Password" {...register("password")} />

          

          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <p className="text-xs">
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>
          <div className="flex justify-center">

          <input className="px-10 my-4 cursor-pointer py-1 font-bold rounded-md text-white bg-green-600" value="Sign Up" type="submit" />
          </div>
        </form>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 cursor-pointer w-6 ${styles.close}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={props.onClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default RegModal;
