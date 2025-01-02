const Content = () => {
    return (
      <div className="card-content">
        <div className="content-left-right">
          <div className="content-left">
            <p className="card-footer-text">รอบที่เปิด</p>
          </div>
          <div className="content-right">
            <div>
              {["1", "2", "3", "4", "5"].map((num) => (
                <span key={num}>{num}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="content-left-right">
          <div className="content-left">
            <p className="card-footer-text">รอบที่ 4: Admission</p>
          </div>
          <div className="content-right">
            <button className="card-footer-button">แก้ไขคะแนน</button>
          </div>
        </div>
        <div className="content-left-right">
          <div className="content-left">
            <p className="card-footer-text">icon</p>
          </div>
          <div className="content-right">
            <div className="text-with-sub">
              <div className="main-text">20,845</div>
              <div className="subtext">คะแนนของคุณคือ</div>
            </div>
          </div>
        </div>
        
        <div className="content-bottom">
          <div className="text-with-sub">
            <div className="main-text">20,845</div>
            <div className="subtext">คะแนนต่ำสุด 60</div>
          </div>

          <div className="text-with-sub">
            <div className="main-text">21,845</div>
            <div className="subtext">คะแนนเฉลี่ย 60</div>
          </div>

          <div className="text-with-sub">
            <div className="main-text">22,845</div>
            <div className="subtext">คะแนนสูงสุด 60</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
  