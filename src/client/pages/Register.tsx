import index from "./index.css";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">The Chat Rooms</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file"/>
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
