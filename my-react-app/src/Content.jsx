/* eslint-disable react/prop-types */
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Content(props) {
  return (
    <div>
      <div className="content-left-right">
        <div className="content-left">
          <p>รอบที่เปิด: {props.roundSeats.map((seat, index) => (
            <span key={index}>
              {seat}{index < props.roundSeats.length - 1 && '  '}
            </span>
          ))}</p>
        </div>
      </div>

      <div className="content-left-right">
        <div className="content-left">
          <h4>รอบที่ 4: {props.score ? props.score.scoreType : "ไม่มีข้อมูล"}</h4>
        </div>
        <div className="content-right">
          <button className="card-footer-button">แก้ไขคะแนน</button>
        </div>
      </div>

      <div className="content-left-right">
        <div className="content-left">
          <WorkspacePremiumIcon/>
        </div>
        <div className="your-score-container">
          <div className="your-score-label">คะแนนของคุณคือ</div>
          <div className="your-score-value">{props.score ? "23,456" : "ไม่มีข้อมูล"}</div>
        </div>
      </div>

      <div className="content-bottom">
        <div className="score-container">
          <div className="score-value">{props.score ? props.score.min : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนต่ำสุด</div>
        </div>
        <div className="score-container">
          <div className="score-value">{props.score ? props.score.avg : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนเฉลี่ย</div>
        </div>
        <div className="score-container">
          <div className="score-value">{props.score ? props.score.max : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนสูงสุด</div>
        </div>
      </div>
    </div>
  );
}

export default Content