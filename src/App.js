import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let initialValues = {
    nombre: "",
    edad: 0,
    correo: "",
  };
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    let nameProperty = event.target.name;
    setValues({
      ...values,
      [nameProperty]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // Prevenir envio al servidor
    event.preventDefault();

    //Logica
    setUsers([...users, values]);

    // Limpiar los inputs
    setValues(initialValues);
  };

  useEffect(() => {
    // Logica de exclusion
    if (users.length === 0) return;

    // Impresion en consola
    console.log("Agregaste un usuario");

    // Agregar dependencias necesarias para escuchar a un estado en particular
  }, [users]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          value={values.edad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="correo"
          value={values.correo}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>

      <h1>Usuarios totales {users.length}</h1>

      {users.map((user, index) => (
        <div key={index}>
          <p>{user.nombre}</p>
          <p>{user.edad}</p>
          <p>{user.correo}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
