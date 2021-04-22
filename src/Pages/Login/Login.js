import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../services/userService";

const Login = () => {
  useEffect(() => {
    document.body.className = "bg-gradient-primary";
  }, []);

  let history = useHistory();

  const [intialValue, setIntialValue] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIntialValue({ ...intialValue, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(intialValue);
    login(intialValue).then((res) => {
      console.log(res.data.token);
      const token = res.data.token;
      localStorage.setItem("FormaLab", token);
      let payload = "";
      try {
        payload = jwtDecode(token);
      } catch (error) {
        console.log(error);
      }

      if (!payload) {
        console.log("Invalide ToKen");
      }
      if (payload.role === "Admin") {
        history.push("/users");
      }
      if (payload.role === "User") {
        history.push("/");
      }
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={intialValue.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          value={intialValue.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw"></i> Login with
                        Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
