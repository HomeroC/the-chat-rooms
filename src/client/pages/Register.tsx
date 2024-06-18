import { ReactEventHandler } from "react";
import index from "./index.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

    const form = e.currentTarget;
    const displayName = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const password = (form[3] as HTMLInputElement).value;
    const file = (form[3] as HTMLInputElement).files?.[0];
    
  

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">The Chat Rooms</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="" />
          </label>
          <button className="p-5 text-white font-bold bg-[#2f4f4f] rounded-md cursor-pointer">
            Sign Up
          </button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
