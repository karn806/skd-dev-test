/* eslint-disable react/prop-types */
function Content(props) {
  return (
    <div>
      <div className="content-left-right">
        <div className="content-left">
          <h4>รอบที่เปิด: {props.roundSeats.map((seat, index) => (
            <span key={index}>
              {seat}{index < props.roundSeats.length - 1 && '  '}
            </span>
          ))}</h4>
        </div>
      </div>

      <div className="content-left-right">
        <div className="content-left">
          <p>รอบที่ 4: {props.score ? props.score.scoreType : "ไม่มีข้อมูล"}</p>
        </div>
        <div className="content-right">
          <button className="card-footer-button">แก้ไขคะแนน</button>
        </div>
      </div>

      <div className="content-bottom">
        <div className="text-with-sub">
          <div className="main-text">{props.score ? props.score.min : "ไม่มีข้อมูล"}</div>
          <div className="subtext">คะแนนต่ำสุด</div>
        </div>
        <div className="text-with-sub">
          <div className="main-text">{props.score ? props.score.avg : "ไม่มีข้อมูล"}</div>
          <div className="subtext">คะแนนเฉลี่ย</div>
        </div>
        <div className="text-with-sub">
          <div className="main-text">{props.score ? props.score.max : "ไม่มีข้อมูล"}</div>
          <div className="subtext">คะแนนสูงสุด</div>
        </div>
      </div>
    </div>
  );
}

export default Content