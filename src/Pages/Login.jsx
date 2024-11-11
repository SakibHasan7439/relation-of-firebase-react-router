import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const handleUserLogIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((userCredential)=>{
          console.log(userCredential.user);
          e.target.reset();
          navigate('/');
        })
        .catch((err)=>{
          console.log("ERROR", err);
        })
    }

    const handleSignInWithGoogle = () =>{
      signInWithGoogle()
      .then((result)=>{
        console.log(result.user);
        navigate('/');
      })
      .catch((error)=>{
        console.log("ERROR", error.message);
      })
    }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col w-[400px]">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 p-4 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUserLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-fuchsia-600 text-white">Login</button>
              <p className="text-center text-sm">OR</p>
              <button onClick={handleSignInWithGoogle} className="shadow-md px-4 py-2 rounded-lg bg-white flex items-center">
                <FcGoogle className="text-xl"></FcGoogle>
                <p className="font-semibold">Sign in with Google</p>
              </button>
            </div>
          </form>
          <p>New to this website ? <Link className="text-fuchsia-600" to={"/register"}>Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
