import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);

const App = () => {
  // estados
  const [clients, setClients] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  // funciones para manejar el cambio de los inputs
  const handleInputChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  // función para manejar el evento cuando se le da clic al botón de guardar
  const handleSubmit = async () => {
    // espera a guardar el cliente
    await addClient();
    // vuelve a llamar el listado de clientes para actualizar la información
    await getClients();

    // resetea todos los inputs
    setFirstName("");
    setLastName("");
    setAge("");
  };

  // función para traer el listado de clientes
  const getClients = async () => {
    // espera a traer el listado de clientes, en una variable data
    const { data } = await supabase
      .from("clients")
      .select("*")
      .order("id", { ascending: true });

    // se actualiza el estado para contener la data
    setClients(data);
  };

  // función para añadir un nuevo cliente
  const addClient = async () => {
    // espera a agregar la información que tenemos guardad en el estado en la BD
    await supabase.from("clients").insert({ firstName, lastName, age });
  };

  // función que borra un cliente por id
  const deleteClientById = async (id) => {
    // espera a borrar el cliente que tenga el id que le pasamos como parámetro
    await supabase.from("clients").delete().eq("id", id);
    // vuelve a consultar el listado de clientes para actualizar el cambio
    await getClients();
  };

  // efecto que se ejecuta la primera vez que se monta el componente
  useEffect(() => {
    // trae el listado de clientes
    getClients();
  }, []);

  return (
    <div className="container">
      <div
        className="col-md-6 offset-md-3 mt-3 d-flex flex-column"
        style={{ gap: "10px" }}
      >
        <div className="d-flex" style={{ gap: "10px" }}>
          <input
            className="form-control"
            placeholder="Nombres"
            type="text"
            value={firstName}
            onChange={handleInputChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Apellidos"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <input
          className="form-control"
          type="number"
          placeholder="Edad"
          value={age}
          onChange={handleAgeChange}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Guardar
        </button>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Edad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.age}</td>
                <td className="d-flex" style={{ gap: "10px" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteClientById(client.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
