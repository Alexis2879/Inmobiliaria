
import Carousel from 'react-bootstrap/Carousel';


const Inicio = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.legaltoday.com/wp-content/uploads/2020/12/vivienda-alquilada.jpg"
          alt="First slide"
          height= "600px"
          width= "80%"
        />
        <Carousel.Caption>
          <h3>BUSCAMOS TU NUEVO HOGAR</h3>
          <p>Tu eres nuestra prioridad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.arquestil.es/wp-content/uploads/2020/12/proyecto-vivienda-arquitecto-arquestil-5.jpg"
          alt="Second slide"
          height= "500px"
        />

        <Carousel.Caption>
          <h3>EXPERTOS VENDIENDO PROPIEDADES</h3>
          <p>Mas de 100 clientes satisfechos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.telemundoareadelabahia.com/2022/03/Rent-to-Own.jpg?quality=85&strip=all&resize=1200%2C675"
          alt="Third slide"
          height= "500px"
        />

        <Carousel.Caption>
          <h3>ENCUENTRA TU LUGAR IDEAL</h3>
          <p>
          Asesores calificados para tu busqueda.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    /*INICIO DE CARDS*/
 
    
 
  );
}

export default Inicio;
