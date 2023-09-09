import Link from "next/link";
import InputComponent from "../components/InputComponent";
import ActionButton from "../components/ActionButton";
export default function SignupPage() {
  return (
    <div className="w-[500px] h-screen pt-[12vh] flex justify-center items-end bg-white">
      <form className="w-full h-[80vh] px-6 py-4 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
        <h3 className="text-3xl font-light mb-10 tracking-tight mt-2 text-center ">
          Login Here
        </h3>
        <div className="w-full mb-4 h-[5vh] px-4 flex justify-between items-center">
          <label className="uppercase text-xs" htmlFor="username">
            Username
          </label>
          <InputComponent name="username" type="text" />
        </div>
        <div className="w-full mb-4 h-[5vh] px-4 flex justify-between items-center">
          <label className="uppercase text-xs" htmlFor="pass">
            password
          </label>
          <InputComponent name="password" type="password" />
        </div>
        <div className="w-full flex justify-center mt-8 flex-col items-center">
          <ActionButton name="Login" />
        </div>
        <div className="w-full flex items-center flex-col mt-4">
          <p className="text-xs text-gray-500 mb-2">Create your account now!</p>
          <Link href="/auth/signup" className="w-[40%]">
            <button className="w-full px-6 py-2 rounded-sm cursor-pointer border-none text-green-800 bg-white shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
