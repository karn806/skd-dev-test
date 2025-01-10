/* eslint-disable react/prop-types */
import Content from "./Content";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import Collapsible from 'react-collapsible';

function Card(props){
    return (
        <div className="card">
            <div className="card-header">
                <CardHeader logo={props.record.logo} name={props.record.name} faculty={props.record.faculty} />
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
            <CardFooter likes={props.record.likes}/>
          </div>
        </div>
      );
}

export default Card