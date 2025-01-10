/* eslint-disable react/prop-types */
function CardHeader(props) {
    return(
        <div className="card-header">
            <img src={props.logo} className="card-image"></img>
            <div className="card-titles">
                <div className="card-title">{props.faculty.name}</div>
                <div className="card-subtitle">{props.name}</div>
                <p>{props.faculty.university.name}</p>
            </div>
        </div>
    );
}

export default CardHeader