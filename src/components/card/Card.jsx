import  './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.mah.image} alt="fd" />
        <h2>{props.mah.title.slice(0,20)}</h2>
        <h3>Price: ${props.mah.price}</h3>
    </div>
  )
}

export default Card
