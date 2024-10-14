const ClientsTable = ({
  clients, // Lista de clientes obtenida desde el estado en el componente padre
  deleteClientById, // Función para eliminar un cliente por su ID
  setClient, // Función para seleccionar un cliente y editarlo
}) => {
  return (
    // Tabla de Bootstrap para mostrar los datos de los clientes
    <table className="table">
      <thead>
        {/* Cabecera de la tabla con los títulos de las columnas */}
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Edad</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapeo de los clientes para generar una fila por cada uno */}
        {clients.map((client) => (
          <tr key={client.id}>
            {/* Cada fila muestra los detalles de un cliente */}
            <th scope="row">{client.id}</th>
            <td>{client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.age}</td>
            <td className="d-flex" style={{ gap: "10px" }}>
              {/* Botón para borrar un cliente, llamando a deleteClientById */}
              <button
                className="btn btn-danger"
                onClick={() => deleteClientById(client.id)} // Al hacer clic, se elimina el cliente
              >
                Borrar
              </button>

              {/* Botón para seleccionar un cliente para su edición */}
              <button
                className="btn btn-primary"
                onClick={() => setClient(client)} // Al hacer clic, se selecciona el cliente para editar
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
