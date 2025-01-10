/* eslint-disable react/prop-types */
function CardFooter(props) {
    return (
        <div className="card-footer">
            <div className="card-footer-left">
                <p className="card-footer-text">{props.likes} คนที่สนใจ</p>
            </div>
        </div>
    );
}

export default CardFooter