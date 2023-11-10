import './static.css'
import paperlogo from '../icons/icon-paper.svg'
import scissorlogo from '../icons/icon-scissors.svg'
import rocklogo from '../icons//icon-rock.svg'
import triangle from '../icons/bg-triangle.svg'
import { useData } from '../Export'

const Staticpage = () => {
  
  // get a value from context
  const {setPaper, setScissor, setRock,setMainclick} = useData();
  // assign value functions

  const paper = ()=>{
     setPaper("Paper");
     setMainclick(false);
  }
  const Rock = ()=>{
    setRock("rock");
    setMainclick(false);
  }
  const Scissor = ()=>{
    setScissor("scissors");
    setMainclick(false);
  }
  return (
    <div className='staticpage'>
      <img id='triangle' src={triangle} alt="triangle"/>
      <div className="icons">
       <div className="icons-wrapper-top">
        <img src={paperlogo} alt="paper" onClick={paper}/>
        <img src={rocklogo} alt="paper" onClick={Rock}/>
       </div>
       <div className="icons-wrapper-bottom">
       <img src={scissorlogo} alt="paper" onClick={Scissor}/>
       </div>
      </div>
    </div>
  )
}

export default Staticpage