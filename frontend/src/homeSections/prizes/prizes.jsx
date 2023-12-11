import React from 'react'
import prize1 from '../../assets/images/1st-place.png';
import prize2 from '../../assets/images/2nd-place.png';
import abstract from '../../assets/images/trophy.png';
import women from '../../assets/images/trophy-star.png';
import youngminds from '../../assets/images/young-minds.png'
import '../prizes/prizes.css'

function Prizes() {
  return (
    <div className="prizes-container">

      <div className="prize-item">
        <img src={abstract} alt="Prize 1" className="prize-image" />
        <div className="prize-text">
          <p>BEST ABSTRACT</p>
          <p>2000/-</p>
        </div>
      </div>

      <div className="prize-item">
        <img src={prize1} alt="Prize 2" className="prize-image" />
        <div className="prize-text">
          <p>FIRST PLACE</p>
          <p>15000/-</p>
        </div>
      </div>

      <div className="prize-item">
        <img src={prize2} alt="Prize 3" className="prize-image" />
        <div className="prize-text">
          <p>SECOND PLACE</p>
          <p>10000/-</p>
        </div>
      </div>

      <div className="prize-item">
        <img src={women} alt="Prize 4" className="prize-image" />
        <div className="prize-text">
          <p>WOMEN TEAM</p>
          <p>5000/-</p>
        </div>
      </div>

      <div className="prize-item">
        <img src={youngminds} alt="Prize 5" className="prize-image" />
        <div className="prize-text">
          <p>BEST YOUNG MINDS</p>
          <p>3000/-</p>
        </div>
      </div>
    </div>
  )
}

export default Prizes