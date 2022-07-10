import { useForm } from "../hooks/useForm";
import { loginAsync } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Forms.css";

const Login = () => {
  const [values, samePassword, handleInputChange, handleSamePassword] = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
  };
  return (
    <div className="global">
      <div className="loginFORM">
        <h1 className="formTitle">Iniciar Sesion</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="formLabel" htmlFor="email">
              {" "}
              Correo:{" "}
            </label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Escribe tu correo"
            />
          </div>
          <div className="mb-3">
            <label className="formLabel" htmlFor="password">
              {" "}
              Contraseña:{" "}
            </label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Crea una contraseña"
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-column gap-2">
              <button className="btn btn-success" type="submit">
                Iniciar Sesion
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => {
                  // dispatch(loginGoogle())
                }}
              >
                Iniciar con Google{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </button>
              <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                // dispatch(loginFacebook())
              }}
            >
              Iniciar con Facebook{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </button>
            </div>
            <span className="registerLink">
              <p onClick={()=>navigate('/register')}>No tienes cuenta? Registrate</p>
            </span>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Login;

// <form>
//           <label for="name"> Nombre: </label>
//           <input type="text" id="name" placeholder="Escribe tu nombre"/>
//           <label for="email"> Correo: </label>
//           <input type="email" id="email" placeholder="Escribe tu correo"/>
//           <label for="password"> Contraseña: </label>
//           <input type="password" id="password" placeholder="Crea una contraseña"/>
//           <label for="repPassword">Nombre: </label>
//           <input type="password" placeholder="Repite tu contraseña"/>
//         </form>
