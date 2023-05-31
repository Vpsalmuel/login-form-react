import React from "react";

export const Main = () => {
  return (
    <div className="main">
      <section>
        <h1>Login Form</h1>
        <div>
          <button id="login">Login</button>
          <button id="signup">Signup</button>
        </div>
        <form>
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="password"></input>
          <p>Forgot Password</p>
          <button type="submit" id="login">
            Login
          </button>
        </form>
        <span>
          Not a member?&nbsp;<a href="https://google.com">Signup now</a>
        </span>
      </section>
    </div>
  );
};
