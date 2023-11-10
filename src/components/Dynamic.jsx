import React, { useEffect,useMemo,useRef, useState } from 'react'
import './dynamic.css'
import { useData } from '../Export'

// import { useNavigate } from 'react-router-dom'

const Dynamic = () => {
  const {paperdata,scissordata,rockdata,setMainclick} = useData();
  const {setPaper, setScissor, setRock,} = useData();
  const imgs=[
    "https://svgshare.com/i/yEV.svg",
    "https://svgshare.com/i/yFT.svg",
    "https://svgshare.com/i/yFG.svg"
  ];

  const user_img = useRef(); 
  const computer_imgref= useRef();
  const [player,setPlayer] = useState("");
  const [result,setResult] = React.useState("");
  useEffect(()=>{
    

    const userimg = document.getElementById("user-img");
    // console.log(paperdata);
    // console.log(scissordata);
    // console.log(rockdata);
    
    if(paperdata){
      userimg.src=imgs[0];
      setPlayer("paper");
      console.log(user_img);
      user_img.current.style.boxShadow="1px 8px 2px hsl(230, 45%, 45%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
      user_img.current.style.border=" 0.9rem solid hsl(230, 89%, 62%)";
    }
    if(scissordata){
      userimg.src=imgs[1];
      setPlayer("scissors");
      user_img.current.style.boxShadow= "1px 8px 2px hsl(39, 71%, 29%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
      user_img.current.style.border=" 0.9rem solid hsl(39, 89%, 49%)";
    }
    if(rockdata){
      userimg.src=imgs[2];
      setPlayer("rock");
      user_img.current.style.border=" 0.9rem solid hsl(349, 71%, 52%)";
      user_img.current.style.boxShadow= "1px 8px 2px hsl(349, 65%, 39%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
    }
    // computer img
   const computer_img = document.getElementById("computer-img");
   const options = ["paper","scissors","rock"];
   const random = Math.floor(Math.random() * options.length); 
   const computer = options[random];
   switch(computer){
      case "paper":
        computer_img.src=imgs[0];
        computer_imgref.current.style.boxShadow="1px 8px 2px hsl(230, 45%, 45%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
        computer_imgref.current.style.border=" 0.9rem solid hsl(230, 89%, 62%)";
        break;
      case "scissors":
        computer_img.src=imgs[1];
        computer_imgref.current.style.boxShadow= "1px 8px 2px hsl(39, 71%, 29%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
        computer_imgref.current.style.border=" 0.9rem solid hsl(39, 89%, 49%)";
        break;
      case "rock":
        computer_img.src=imgs[2];
        computer_imgref.current.style.border=" 0.9rem solid hsl(349, 71%, 52%)";
        computer_imgref.current.style.boxShadow= "1px 8px 2px hsl(349, 65%, 39%),inset -1px  8px 2px hsla(0, 1%, 45%, 0.466)";
        break;
       default:
        computer_img.src="";
   }
  //  console.log(computer);
  // result
  // localStorage.setItem("score",score);
  switch (true) {
    case player === "paper" && computer === "rock":
    case player === "rock" && computer === "scissors":
    case player === "scissors" && computer === "paper":
      setResult("YOU WIN");
      break;
    case player === computer:
      setResult("MATCH TIED");
      break;
    default:
      setResult("YOU LOSE");
  }
  },[paperdata,scissordata,rockdata,result,player,imgs]);
  // assign userboxes shadow 
  const userboxes = useRef(null);
  const computerboxes = useRef(null);
  useEffect(()=> { 
    const userbox = userboxes.current.querySelector('::before');
    const computerbox = computerboxes.current.querySelector('::before');
    if(result === "YOU WIN"){
      if(userbox){
       userbox.current.style.background="radial-gradient(circle ,hsl(237, 49%, 15%) ,hsl(214, 47%, 23%))";
      }
      else if(result === "YOU LOSE"){
       if(computerbox){
        computerbox.current.style.background="radial-gradient(circle ,hsl(237, 49%, 15%) ,hsl(214, 47%, 23%))";
       }
      }
      else{
        console.log(":)");
      }
    }
  });
  return (
    <div className='dynamic container'>
      <div className="dynamic-wrapper">
      <div className='user' ref={userboxes}>
        <h1>YOU PICKED</h1>
        <img id='user-img' ref={user_img} src="" alt="userlogo"/>
      </div>
      <div className='result'>
        <p>{result}</p>
        <button onClick={()=>{setMainclick(true);
          setPaper("");
          setRock("");
          setScissor("");
          }}>PLAY AGAIN</button>
      </div>
      <div className='computer' ref={computerboxes}>
       <h1>THE HOUSE PICKED</h1>
        <img id='computer-img' ref={computer_imgref} src="" alt="computerlogo"/>
      </div>
      </div>
    </div>
  )
}

export default Dynamic