import ClientForm from "./components/ClientForm"; // Componente separado para el formulario del cliente
import ClientsTable from "./components/ClientsTable"; // Componente separado para la tabla de clientes
import { supabase } from "./supabase"; // Importa la instancia de Supabase para interactuar con la base de datos
import { useState, useEffect } from "react"; // Importa hooks necesarios de React

const App = () => {
  // Estado para manejar los valores de los inputs
  const [age, setAge] = useState(""); // Edad del cliente actual
  const [client, setClient] = useState(null); // Cliente seleccionado para edición
  const [clients, setClients] = useState([]); // Lista de todos los clientes obtenidos de la base de datos
  const [firstName, setFirstName] = useState(""); // Nombre del cliente actual
  const [lastName, setLastName] = useState(""); // Apellido del cliente actual

  // Maneja cambios en el input del nombre
  const handleFirstNameChange = (event) => setFirstName(event.target.value);

  // Maneja cambios en el input del apellido
  const handleLastNameChange = (event) => setLastName(event.target.value);

  // Maneja cambios en el input de la edad
  const handleAgeChange = (event) => setAge(event.target.value);

  // Maneja el envío del formulario para agregar o actualizar un cliente
  const handleSubmit = async () => {
    if (client) {
      // Si hay un cliente seleccionado, actualiza el cliente
      await updateClient(client);
    } else {
      // Si no hay cliente seleccionado, agrega un nuevo cliente
      await addClient();
    }

    // Después de agregar o actualizar, recarga la lista de clientes
    await getClients();

    // Resetea los inputs del formulario
    resetInputs();

    // Limpia el cliente seleccionado
    setClient(null);
  };

  // Obtiene todos los clientes de la base de datos
  const getClients = async () => {
    const { data } = await supabase.from("clients").select("*");

    // Actualiza el estado con los clientes obtenidos
    setClients(data);
  };

  // Agrega un nuevo cliente a la base de datos
  const addClient = async () => {
    await supabase
      .from("clients")
      .insert({ first_name: firstName, last_name: lastName, age });
  };

  // Elimina un cliente de la base de datos basado en su id
  const deleteClientById = async (id) => {
    await supabase.from("clients").delete().eq("id", id);

    // Vuelve a cargar la lista de clientes después de borrar uno
    await getClients();
  };

  // Actualiza un cliente existente en la base de datos
  const updateClient = async (client) => {
    await supabase
      .from("clients")
      .update({ first_name: firstName, last_name: lastName, age })
      .eq("id", client.id);
  };

  // Resetea los campos del formulario
  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setAge("");
  };

  // Hook useEffect para cargar la lista de clientes cuando el componente se monta
  useEffect(() => {
    getClients(); // Obtiene los clientes cuando el componente se monta por primera vez
  }, []); // El array vacío significa que solo se ejecuta una vez

  // Hook useEffect para cargar los datos de un cliente seleccionado en el formulario
  useEffect(() => {
    if (!client) return resetInputs(); // Si no hay cliente seleccionado, resetea los campos
    // Si hay un cliente, rellena los campos del formulario con sus datos
    setFirstName(client.first_name);
    setLastName(client.last_name);
    setAge(client.age);
  }, [client]); // Se ejecuta cada vez que 'client' cambia

  return (
    <div className="container">
      {/* Componente que renderiza el formulario del cliente */}
      <ClientForm
        age={age}
        client={client}
        firstName={firstName}
        lastName={lastName}
        handleAgeChange={handleAgeChange}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleSubmit={handleSubmit}
        setClient={setClient} // Pasa la función para limpiar el cliente seleccionado
      />

      {/* Sección para mostrar la tabla de clientes */}
      <div className="table-responsive mt-3">
        {/* Componente que renderiza la tabla de clientes */}
        <ClientsTable
          clients={clients} // Pasa la lista de clientes
          deleteClientById={deleteClientById} // Pasa la función para eliminar un cliente
          setClient={setClient} // Pasa la función para seleccionar un cliente para edición
        />
      </div>
    </div>
  );
};

export default App;
