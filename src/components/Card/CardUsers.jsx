function CardUsers ({item}){
    return (
        <article className="cardUser">
            <h3>{item.email}</h3>
            <h3>{item.role}</h3>
           
           
        </article>

    )
}

export default CardUsers;