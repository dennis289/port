import './Sidebar.css'
import Category from './category/Category'
import Price from './price/Price';
import Color from './Colors/Color';
function Sidebar({handleChange}){
  
  return <>
  <section className='sidebar'>
    <div className="logo-container">
        <h1>🛒</h1>
    </div>
    <Category handleChange={handleChange}/>
    <Price handleChange ={handleChange}/>
    <Color handleChange ={handleChange}/>
  </section>

  </>
}

export default Sidebar