import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="main-title" style={{ textAlign: "center" }}>
        Contacto
      </h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre")}
          required
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          required
        />
        <input
          type="text"          
          placeholder="Número de celular"
          {...register("celular")}
          required
        />
        <textarea
          rows="10"
          placeholder="Aquí escribe tu mensaje"
          {...register("mensaje")}
          required
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
