/* eslint-disable react/prop-types */
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';


function Content(props) {
  return (
    <div>
      <div className="content-left-right">
        <div className="content-left">
          <p>รอบที่เปิด</p>
          <LooksOneOutlinedIcon style={{ color: props.roundSeats[0] > 0 ? 'green' : 'black' }}></LooksOneOutlinedIcon>
          <LooksTwoOutlinedIcon style={{ color: props.roundSeats[1] > 0 ? 'green' : 'black' }}></LooksTwoOutlinedIcon>
          <Looks3OutlinedIcon style={{ color: props.roundSeats[2] > 0 ? 'green' : 'black' }}></Looks3OutlinedIcon>
          <Looks4OutlinedIcon style={{ color: props.roundSeats[3] > 0 ? 'green' : 'black' }}></Looks4OutlinedIcon>
          <Looks5OutlinedIcon style={{ color: props.roundSeats[4] > 0 ? 'green' : 'black' }}></Looks5OutlinedIcon>
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
          {/* ไม่แน่ใจว่าคะแนนของคุณเอามาจากไหนค่ะ ก็เลยใส่เป็นเลข mock ไป */}
          <div className="your-score-value">{props.score ? "23,456" : "ไม่มีข้อมูล"}</div>
        </div>
      </div>

      <div className="content-bottom">
        <div className="score-container">
          <div className="score-value">{props.score ? props.score.min : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนต่ำสุด</div>
        </div>

        <div className="vertical-line"></div>

        <div className="score-container">
          <div className="score-value">{props.score ? props.score.avg : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนเฉลี่ย</div>
        </div>

        <div className="vertical-line"></div>

        <div className="score-container">
          <div className="score-value">{props.score ? props.score.max : "ไม่มีข้อมูล"}</div>
          <div className="score-label">คะแนนสูงสุด</div>
        </div>
      </div>
    </div>
  );
}

export default Content