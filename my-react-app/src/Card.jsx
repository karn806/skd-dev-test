/* eslint-disable react/prop-types */
import Content from "./Content";
import Collapsible from 'react-collapsible';

function Card(props){
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.record.logo}  className="card-image" />
                <div className="card-titles">
                    <h2 className="card-title">{props.record.faculty.name}</h2>
                    <h3 className="card-subtitle">{props.record.name}</h3>
                    <p>{props.record.faculty.university.name}</p>
                </div>
            </div>
            <div className="card-content">
                <Content roundSeats={props.record.roundSeats} score={props.record.score}/>
            </div>

            <div className="card-content">
                <Collapsible trigger="ดูสัดส่วนคะแนน">
                    <p>สัดส่วน 1</p>
                    <p>สัดส่วน 2</p>
                </Collapsible>
            </div>

          <div className="card-footer">
            <div className="card-footer-left">
                <p className="card-footer-text">{props.record.likes} คนที่สนใจ</p>
            </div>
            <div className="card-footer-right">
                <button className="card-footer-button">Link</button>
            </div>
          </div>
        </div>
      );
}

export default Card