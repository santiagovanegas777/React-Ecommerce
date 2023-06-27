function CardProducts ({item}){
    return (
        <article className="cardProducts">
            <h3>{item.tipo}</h3>
            <h3>{item.temporada}</h3>
            <h5>{item.color}</h5>
            <img src={item.image} alt="imagen1"/>
            <img src={item.image2} alt="imagen2"/>
           
        </article>

    )
}

export default CardProducts;