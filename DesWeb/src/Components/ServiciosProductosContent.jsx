import React, { useEffect, useState } from 'react';
import GetProducto from '../services/GetProducto';
import "../Styles/ServiciosProductosContent.css"; // Agrega los estilos necesarios

function ServiciosProductosContent() {
  const [productos, setProductos] = useState([]);

  // Cargar productos
  useEffect(() => {
    const fetchProductos = async () => {
      const productos = await GetProducto();
      setProductos(productos);
    };
    fetchProductos();
  }, []);

  return (
    <div className='divServicios'>
      <div className="PortadaServicios">
      <div className="TextoPortada">
      <h1 className='SuVision'>Su Visión, Nuestro Diseño:<br />Resultados que Inspiran  
      <span className='punto'>.</span> </h1><br /><br />
      </div>
    </div> {/* Cierra divImgPortada */}
      <div className='products-list'>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className='product-item'>
              <h2>{producto.nombre}</h2>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.descripcion}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default ServiciosProductosContent;
