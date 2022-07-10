import React from "react";
import { registerAsync } from "../redux/actions/actionRegister";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import "../styles/Forms.css";

export default function Register() {
  
  const [values, samePassword, handleInputChange, handleSamePassword, reset] = useForm(
    {
      name: "",
      email: "",
      password: "",
      repPassword: "",
      img: "",
    }
  );

  const [imgSRC, setImgSrc] = useState('https://secure.gravatar.com/avatar/db88f02646f76ff15c9eeb6cd06d61c9?s=300&d=mm&r=g')
  const [disabledButton, setDisabledButton] = useState(true);
  const [buttonText, setButtonText] = useState('Crear cuenta');

  const FileUpload = async (file) => {
    try {
      setButtonText('Subiendo Imagen...')
      const cloudUrl = `https://api.cloudinary.com/v1_1/dkwuew3ie/upload`;
      const formData = new FormData();
      formData.append("upload_preset", "estudiantes");
      formData.append("file", file);

      const resp = await fetch(cloudUrl, {
        method: "POST",
        body: formData,
      });
      const cloudResp = await resp.json();
      values.img = cloudResp.secure_url;
      setImgSrc(values.img)
      setButtonText('Crear cuenta')
      setDisabledButton(false);
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();

  const { name, email, password, repPassword, img } = values;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    FileUpload(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(name, email, password, values.img));
    // reset();
  };

  return (
    <div className="global">
      <div className="loginFORM">
        <h1 className="formTitle">Crear Cuenta</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="formLabel" htmlFor="name">
              {" "}
              Nombre:{" "}
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="mb-3">
            <label className="formLabel" htmlFor="email">
              {" "}
              Correo:{" "}
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Escribe tu correo"
            />
          </div>
          <div className="mb-3">
            <label id="passwordInput" className="formLabel" htmlFor="password">
              {" "}
              Contraseña:{" "}
            </label>
            <input
              id="passwordInput"
              className={
                samePassword !== null
                  ? samePassword === true
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                  : "form-control"
              }
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                repPassword !== ""
                  ? handleSamePassword(repPassword, e)
                  : handleInputChange(e);
              }}
              placeholder="Crea una contraseña"
            />
          </div>
          <div className="mb-2">
            <label id="repPassInput" className="formLabel" htmlFor="password">
              {" "}
              Repite la contraseña:{" "}
            </label>
            <input
              id="repPassInput"
              className={
                samePassword !== null
                  ? samePassword === true
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                  : "form-control"
              }
              type="password"
              name="repPassword"
              value={repPassword}
              onChange={(e) => {
                handleSamePassword(password, e);
              }}
              placeholder="Escribe de nuevo la contraseña"
            />
            {repPassword !== "" ? (
              samePassword === false ? (
                <span className="invalid m-1">
                  Las contraseñas no coinciden!
                </span>
              ) : (
                <span className="valid m-1">Las contraseñas coinciden!</span>
              )
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label className="formLabel" htmlFor="file">
              Imagen:
            </label>
            <input
              className="form-control"
              name="file"
              type="file"
              onChange={handleFileChange}
            />
            <div className="d-flex justify-content-center mt-3">
              <img width="150px" src={imgSRC} alt="profileImage" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success"
              type="submit"
              disabled={disabledButton}
            >
              {
                buttonText
              }
            </button>
          </div>
        </form>
        {/* <h2>¿No tienes una cuenta? Registrate</h2> */}
      </div>
    </div>
  );
}
