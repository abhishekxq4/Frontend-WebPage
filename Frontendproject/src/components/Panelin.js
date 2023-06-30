const Panelin = ({ voltage, mcb, load, pf }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Parameters</th>
            <th>R Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Voltage Status</td>
            <td>{voltage}</td>
          </tr>
          <tr>
            <td>MCB Status</td>
            <td>{mcb}</td>
          </tr>
          <tr>
            <td>Load Status</td>
            <td>{load}</td>
          </tr>
          <tr>
            <td>PF Status</td>
            <td>{pf}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Panelin