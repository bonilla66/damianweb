import React from 'react';
import Navbar from '../../components/header/Navbar.jsx';
import cover from '../../images/cover.jpg';
import Cards from "../../components/cards/Cards.jsx";
import actividades from '../../images/actividades.jpg';
import independencia from '../../images/independencia.jpg';
import muertos from '../../images/dmuertos.jpg';
import graduacion from '../../images/grads.jpg';

import Footer from '../../components/footer/Footer.jsx';

const Home = () => {
    return (
      <>
        <Navbar/>
        <div>
          <main>
            <img
              src={cover}
              alt="alumnos-clases"
              className="w-full h-80 object-cover"
            />
            <div className=''>
                <p className='font-normal text-3xl ml-2 mt-10 mb-6'>Eventos próximos</p>
                  <div className='w-full max-w-screen-xl mx-auto grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-10 flex justify-evenly'>
                      <Cards
                          image={actividades}
                          month="apr"
                          day="14"
                          title="Retorno de actividades después de vacaciones"
                      />
                      <Cards
                          image={independencia}
                          month="sep"
                          day="15"
                          title="Día de la independencia"
                      />
                      <Cards
                          image={muertos}
                          month="sep"
                          day="18"
                          title="Día de los muertos"
                      />
                      <Cards
                          image={actividades}
                          month="apr"
                          day="14"
                          title="Evaluaciones módulo 4"
                      />
                      <Cards
                          image={actividades}
                          month="apr"
                          day="15"
                          title="Evaluaciones módulo 4"
                      />
                      <Cards
                          image={graduacion}
                          month="apr"
                          day="15"
                          title="Celebreaciones de graduación"
                      />
                  </div>
                </div>
          </main>
          <Footer/>
        </div>
      </>
    );
  };
  
  export default Home;
  