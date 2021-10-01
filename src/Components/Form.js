import React from "react";

export default function Form() {
  return (
    <div className="left">
      <div className="sec">
        <div className="form">
          <div className="form-head">
            <h1>Let's set up your account</h1>
            <p>
              Already have an account? <a href="#">Sign in</a>
            </p>
          </div>
          <form action="" id="form">
            <div className="form-input">
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Your name"
              />
              <label htmlFor="name" className="brd">
                Your name
              </label>
            </div>
            <div className="form-input">
              <input
                autoComplete="off"
                type="text"
                className="validate-mail"
                name="useremail"
                id="email"
                placeholder="Email address"
                onKeyDown={["validation"]}
              />
              <label htmlFor="email" className="brd">
                Email address
              </label>
              <span className="valid-mail" id="text"></span>
            </div>
            <div className="form-input">
              <select name="user_type_value" id="user_type">
                <option defaultValue disabled>
                  I would describe my user type as
                </option>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select>
            </div>
            <div className="form-input">
              <input
                type="password"
                name="user_password"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="password" className="brd">
                Password
              </label>
              <p className="helper">Minimum 8 characters</p>
            </div>
            <div className="form-input">
              <button href="#" className="btn btn-lrg">
                Next
              </button>
            </div>
            <div className="form-bottom">
              <p>
                By clicking "Next" button, you agree to creation a free account,
                and to
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
