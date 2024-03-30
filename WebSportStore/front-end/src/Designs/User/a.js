import React, {useEffect, useState} from 'react'
import getAPI from '../../Api/ApiClient'

const A = () => {
    const [cate, setCate] = useState([]);

  useEffect(() => {
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async() =>{
    setCate(await getAPI());
  }
  return (
    Array.isArray(cate) && cate.map((item) => (
        <>                                         
          <div>{item.categoryName}</div>
          <h1>123456</h1>                                      
        </>
      ))
  )
}

export default A