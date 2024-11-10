import { Link } from "react-router-dom";

const Login = () => {
    const handleUserLogIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
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
            </div>
          </form>
          <p>New to this website ? <Link className="text-fuchsia-600" to={"/register"}>Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;