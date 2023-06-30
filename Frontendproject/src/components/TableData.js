import Panelin from './Panelin';
import MapComponent from './MapComponent';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import 'leaflet/dist/leaflet.css';

const TableData = ({ datas }) => {
  const [active, setActive] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [openMap, setOpenMap] = useState(false);
  const [location, setLocation] = useState([])

  const handlePanelin = (data) => {
    setSelectedData(data);
    setActive(true);
  };


  const openLocationSlideBar = (data) => {
    setOpenMap(true);
    setActive(false);
    const loc = [data.Lat, data.Lng];
    setLocation(loc)

  };


  return (
    <div>
      {!active && !openMap && (
        <table className="table">
          <thead>
            <tr>
              <th>Panel Name</th>
              <th>Mac ID</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={data._id}>
                <td className="panel" onClick={() => handlePanelin(data)}>
                  {data.panel_name}
                </td>
                <td>{data.mac_id}</td>
                <td>{data.Lat}</td>
                <td>{data.Lng}</td>
                <td className="location"
                    onClick={() => openLocationSlideBar(data)}><FaLocationDot  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {active && selectedData && (
        <>
          <Panelin
            key={selectedData._id}
            voltage={selectedData.r_volt_status}
            mcb={selectedData.r_mcb_status}
            load={selectedData.r_load_status}
            pf={selectedData.r_pf_status}
          />
          <button onClick={() => setActive(false)}>Close</button>
        </>
      )}

      {openMap && (
        <>
          <div className="map">
            <MapComponent location={location} />
          </div>
          <button className="cancel" onClick={() => setOpenMap(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default TableData;