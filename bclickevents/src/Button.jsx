
function Button(){
let count = 0;
const handleClick = (name) => {
    if(count<=3){
          count += 1;
    console.log(`${name} clicked Button ${count} times`);
    }
    else{
        console.log(`${name} Button click limit reached`);
    }
  
  };

  return (
    <button onClick={() => handleClick("vansh")}>
      Click Me
    </button>
  );
}

export default Button;