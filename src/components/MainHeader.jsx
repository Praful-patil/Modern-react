import { Link } from "react-router-dom"
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Leginds Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum provident, eaque iusto maxime deserunt vitae.
          </p>
          <Link to="/plans" className="btn lg"> GetStarted</Link>
        </div>
        <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="Main Header Image" />
            </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader