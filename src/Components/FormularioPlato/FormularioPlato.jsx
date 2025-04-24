import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import "./FormularioPlato.css";

const ErrorMessage = ({ message }) => {
  if (!message) return <div style={{ minHeight: "24px" }}>&nbsp;</div>;
  return (
    <div className="alerta-error">
      <svg
        className="icono-alerta"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#c62828"
        style={{ width: "16px", height: "16px" }}
      >
        <path d="M1 21h22L12 2 1 21z" />
        <path fill="#fff" d="M13 16h-2v2h2v-2zm0-6h-2v4h2V10z" />
      </svg>
      {message}
    </div>
  );
};

const FormularioPlato = ({ modo = "crear", onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({ defaultValues });

  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        setValue("imagen", file, { shouldValidate: true });
        await trigger("imagen");
      }
    },
  });

  useEffect(() => {
    register("imagen", { required: "La imagen es obligatoria" });
  }, [register]);

  return (
    <div className="wrapper">
      <form className="formulario-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="formulario-campos">
          <label>
            Nombre
            <input
              type="text"
              className={errors.nombre ? "input input-error" : "input"}
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            <ErrorMessage message={errors.nombre?.message} />
          </label>

          <label>
            Descripción
            <input
              type="text"
              className={errors.descripcion ? "input input-error" : "input"}
              {...register("descripcion", {
                required: "La descripción es obligatoria",
              })}
            />
            <ErrorMessage message={errors.descripcion?.message} />
          </label>

          <label>
            Tiempo de preparación
            <input
              type="text"
              className={errors.tiempo ? "input input-error" : "input"}
              {...register("tiempo", {
                required: "El tiempo de preparación es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe tener al menos 2 caracteres",
                },
              })}
            />
            <ErrorMessage message={errors.tiempo?.message} />
          </label>

          <label>
            Precio
            <input
              type="text"
              className={errors.precio ? "input input-error" : "input"}
              {...register("precio", {
                required: "El precio es obligatorio",
                validate: (value) => {
                  const regex = /^[$¢₡]?\s?\d{1,3}(?:\s?\d{3})*(?:,\d{1,2})?$/;
                  return (
                    regex.test(value.trim()) ||
                    "Formato de precio inválido. Ej: $2 800,00"
                  );
                },
              })}
            />
            <ErrorMessage message={errors.precio?.message} />
          </label>

          <button type="submit" className="btn-agregar">
            {modo === "crear" ? "Agregar" : "Editar"}
          </button>
        </div>

        <div className="formulario-imagen">
          <label>Subir imagen</label>
          <div
            {...getRootProps()}
            className={`upload-box ${errors.imagen ? "upload-box-error" : ""}`}
          >
            <input {...getInputProps()} />
            {preview ? (
              <img src={preview} alt="Vista previa" className="preview-img" />
            ) : (
              <>
                <div className="upload-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2b1e0f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 16l-4-4-4 4" />
                    <path d="M12 12v9" />
                    <path d="M20.39 18.39A5.5 5.5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                  </svg>
                </div>
                <span className="upload-text">
                  {isDragActive
                    ? "Suelta la imagen aquí..."
                    : "Arrastra y suelta para agregar"}
                </span>
              </>
            )}
          </div>
          <ErrorMessage message={errors.imagen?.message} />
        </div>
      </form>
    </div>
  );
};

export default FormularioPlato;
