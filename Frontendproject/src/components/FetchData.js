import axios from 'axios';
import TableData from './TableData';
import { useState, useEffect } from 'react';

const FetchData = () => {
  const url = 'https://uat.utopiatech.in:4520/panel/gettestlist?org_id=3';
  const [dataResult, setDataResult] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      const data = response.data;
      const dataResult = data.result
      setDataResult(dataResult)
    })
      .catch((error) => console.log(`Failed to fetch data:${error}`))
  }, [])

  return (
    <>
      <TableData datas={dataResult} />
    </>
  )
}

export default FetchData