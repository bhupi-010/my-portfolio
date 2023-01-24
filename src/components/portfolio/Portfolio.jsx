import React from 'react'
import './portfolio.css'
import ecommerce from "../../assets/ecommerce.jpg"
import todo from "../../assets/todo.jpg"
import inventory_management from "../../assets/inventory_management.jpg"
import quotes from "../../assets/quotes.jpg"
import restaurent from "../../assets/restaurent.jpg"
import redux from "../../assets/redux-toolkit.jpg"
import local from "../../assets/local.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container' >
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={ecommerce} alt="ecommerce img" />
          </div>
          <h3>Ecommerce Website</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/S-ecom" className='btn'>Github</a>
            <button className='btn btn-primary' >Live not available</button>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={redux} alt="ecommerce img" />
          </div>
          <h3>CRUD-(React-ReduxToolkit)</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/CRUD--React-ReduxToolkit-" className='btn'>Github</a>
            <a href="https://crudreact-reduxtoolkit.netlify.app/" className='btn btn-primary'>Live</a>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={quotes} alt="ecommerce img" />
          </div>
          <h3>inspired-by-quotes</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/inspired-by-quotes" className='btn'>Github</a>
            <a href="https://inspired-by-quotes.netlify.app/" className='btn btn-primary'>Live</a>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={local} alt="ecommerce img" />
          </div>
          <h3>store-Data-Localstorage-project</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/React-Form-Data-Localstorage-project" className='btn'>Github</a>
           <button className='btn btn-primary' >Live not available</button>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={restaurent} alt="ecommerce img" />
          </div>
          <h3>Resturant-website-Reactjs-MUI</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/Resturant-website-Reactjs-MUI" className='btn'>Github</a>
            <a href="https://resturant-website-reactjs-mui.netlify.app/" className='btn btn-primary'>Live</a>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={inventory_management} alt="inventory_management" />
          </div>
          <h3>Inventory Management</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/sellbuy" className='btn'>Github</a>
            <button className='btn btn-primary' >Live not available</button>
          </div>
        </article>
        <article className='portfolio_item' >
          <div className='portfolio_item-image' >
            <img src={todo} alt="todo img" />
          </div>
          <h3>Todo App</h3>
          <div className='portfolio_item-cta' >
            <a href="https://github.com/bhupi-010/To-do" className='btn'>Github</a>
             <a href="https://todo0-appp.netlify.app/" className='btn btn-primary'>Live</a>
          </div>
        </article>
       
        
      </div>
    </section>
  )
}

export default Portfolio