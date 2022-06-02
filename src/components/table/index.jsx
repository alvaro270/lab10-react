// props.datos

const Table = ({ datos }) => {
  // const { datos } = props;
  // props.datos
  // nota: Para usar destructuring, debemos tener en consideracion la cantidad de parametros que estamos recibiendo
  // como consejo tener max 6

  return (
    <div>
      <h1>Table</h1>
      <table border="1">
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Celular</th>
          <th>Correo</th>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr>
              <td>{dato.nombre}</td>
              <td>{dato.apellido}</td>
              <td>{dato.celular}</td>
              <td>{dato.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
