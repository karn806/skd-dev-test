import { useState, useEffect } from 'react';
import Content from "./Content";

function Card(){
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        // Simulate fetching view count from server or incrementing it locally
        const count = Math.floor(Math.random() * 1000) + 1; // Example random number for views
        setViewCount(count);
    }, []);

    return (
        <div className="card">
          <div className="card-header">
            {/* <img src={image}  className="card-image" /> */}
            <div className="card-titles">
              <h2 className="card-title">คณะวิศวกรรมศาสตร์</h2>
              <h3 className="card-subtitle">สาขาวิศวกรรมทั้วไป</h3>
              <p>จุฬา</p>
            </div>
          </div>
          <div className="card-content">
            <Content/>
          </div>
          <div className="card-footer">
            <div className="card-footer-left">
                <p className="card-footer-text">{viewCount} คนที่สนใจ</p>
            </div>
            <div className="card-footer-right">
                <button className="card-footer-button">Action</button>
             </div>
          </div>
        </div>
      );
}

export default Card