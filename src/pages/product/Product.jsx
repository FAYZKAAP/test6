import { useParams } from 'react-router-dom';
import data from '../../../public/data';
import Header from '../../components/header/Header';
import  './product.css'

function Product() {
    const {id}=useParams();
    console.log(id);
    let mah=data.filter(m=> m.id==id)[0];
    console.log(mah);
    
  return (
    <div>
       <Header></Header>
       <a href="/">Back</a>
       <div className="ota container">
         <img src={mah.image} alt="" />
         <div className="text">
            <h1>{mah.title}</h1>
            <h2> ${mah.price}</h2>
            <p>{mah.description}</p>
         </div>
       </div>
    </div>
  )
}

export default Product
