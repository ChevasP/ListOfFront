import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowProducts = () => {
  //Hooks
  const [products, setProducts] = useState([])
  //Hook de Efecto
  useEffect(() => {
    getAllProducts()
  });
  //Funciones
  const getAllProducts =async()=>{
    await axios.get('${endpoint}/products')
  }
  
  const deleteProduct =()=>{

  }
  return (
    <div>Tabla</div>
  )
}

export default ShowProducts