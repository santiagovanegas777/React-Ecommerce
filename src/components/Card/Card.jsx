


function Card  ({item}){
    return (
        <article className="articleCard">
            <h3>{item.name}</h3>
            <h3>{item.city}</h3>
            <h3>{item.stock}</h3>
          
        </article>

    )
}

export default Card;