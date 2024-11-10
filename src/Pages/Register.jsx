import { Link } from "react-router-dom";

const Register = () => {

    const handleUserRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);
    }

    return (
        <div className="hero bg-base-200">
      <div className="hero-content flex-col w-[400px]">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 p-4 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUserRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

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
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-fuchsia-600 text-white">Register</button>
            </div>
          </form>
          <p>Already have an account ? <Link className="text-fuchsia-600" to={"/logIn"}>Login Now</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Register;