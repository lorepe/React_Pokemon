const Card = ({name,avatar}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={avatar} alt="" />
        </div>
    );
}

export default Card;