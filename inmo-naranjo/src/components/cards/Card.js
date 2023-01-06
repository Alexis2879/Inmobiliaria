import React from 'react'
import './Card.css'


const Card = () => {
  return (
    <div className='container-card'>
      <div className='row'>
        {/*Card uno*/}
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img src='https://www.casasparaconstruir.com/projetos/119/05.jpg' alt='' className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'> Casa en Surco</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        {/*Card dos*/}
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
          <img src='https://www.casasparaconstruir.com/projetos/119/05.jpg' alt='' className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'> Casa en Surco</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        {/*Card tres*/}
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
          <img src='https://www.casasparaconstruir.com/projetos/119/05.jpg' alt='' className='card-img-top' />
            <div className='card-body'>
                <h3 className='card-title'> Casa en Surco</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='card-info'>
                  <div>
                    <span className='card-datum'>55 m² Total</span>
                  </div>
                  <div>
                    <span className='card-datum'>1 Cochera</span>
                  </div>
                  <div>
                    <span className='card-datum'>2 Ambientes</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default Card;
