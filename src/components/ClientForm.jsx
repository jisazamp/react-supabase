const ClientForm = ({
  age, // Edad del cliente actual
  client, // Cliente seleccionado para edición (o null si es uno nuevo)
  firstName, // Nombre del cliente actual
  lastName, // Apellido del cliente actual
  handleAgeChange, // Función para manejar cambios en el campo de la edad
  handleFirstNameChange, // Función para manejar cambios en el campo del nombre
  handleLastNameChange, // Función para manejar cambios en el campo del apellido
  handleSubmit, // Función que se ejecuta al enviar el formulario
  setClient, // Función para limpiar la selección del cliente actual
}) => {
  return (
    // Contenedor para el formulario con clases de Bootstrap para estilos responsivos
    <div className="d-flex flex-column mt-3 col-md-6 offset-md-3 mb-3">
      {/* Contenedor para los campos de input, con un espaciado entre ellos */}
      <div className="d-flex flex-column" style={{ gap: "10px" }}>
        {/* Input para el nombre del cliente */}
        <input
          className="form-control"
          placeholder="Nombres" // Placeholder que muestra una sugerencia para el campo
          type="text" // Tipo de input de texto
          value={firstName} // Valor controlado desde el estado
          onChange={handleFirstNameChange} // Manejador del evento de cambio
        />

        {/* Input para el apellido del cliente */}
        <input
          className="form-control"
          type="text" // Tipo de input de texto
          placeholder="Apellidos" // Placeholder que muestra una sugerencia para el campo
          value={lastName} // Valor controlado desde el estado
          onChange={handleLastNameChange} // Manejador del evento de cambio
        />

        {/* Input para la edad del cliente */}
        <input
          className="form-control"
          type="number" // Tipo de input numérico para la edad
          placeholder="Edad" // Placeholder que muestra una sugerencia para el campo
          value={age} // Valor controlado desde el estado
          onChange={handleAgeChange} // Manejador del evento de cambio
        />
      </div>

      {/* Contenedor para los botones de acción, con separación entre ellos */}
      <div className="d-grid mt-3 gap-1">
        {/* Botón para guardar o editar el cliente */}
        <button className="btn btn-primary" onClick={handleSubmit}>
          {/* El texto del botón cambia según si se está editando o guardando */}
          {client ? "Editar" : "Guardar"}
        </button>

        {/* Botón para cancelar la edición si un cliente está seleccionado */}
        {client ? (
          <button className="btn btn-secondary" onClick={() => setClient(null)}>
            Cancelar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ClientForm;
