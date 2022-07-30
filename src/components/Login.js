import React from "react";
function Login() {
  return (
    <>
      <div className="login-base">
        <div className="login-container">
          <section className="login">
            <div className="title-login">
              <h2>Iniciar Sesión</h2>
              <p>¡Escucha todo el talento que hay cerca de ti!</p>
            </div>
            <div>
              <form className="login-form">
                <label for="email">Correo Electrónico:</label>
                <input
                  className="input-text"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                ></input>

                <label for="password">Contraseña:</label>
                <input
                  className="input-text"
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>

                <button type="submit" className="btn btn-login">
                  Iniciar sesión
                </button>
              </form>
            </div>
          </section>
          <section className="login">
            <div className="title-login">
              <h2>¡Unete a nuestra comunidad!</h2>
              <p>¡Descubre un mundo increíble a tu alrededor!</p>
            </div>
            <div>
              <form className="login-form">
                <label for="email">Correo Electrónico:</label>
                <input
                  className="input-text"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                ></input>

                <label for="email">Contraseña:</label>
                <input
                  className="input-text"
                  type="password"
                  name="signinPassword1"
                  placeholder="Password"
                ></input>
                <label for="email">Repite tu Contraseña:</label>
                <input
                  className="input-text"
                  type="password"
                  name="signinPassword2"
                  placeholder="Password"
                ></input>

                <button type="submit" className="btn btn-login">
                  Crear Cuenta
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
