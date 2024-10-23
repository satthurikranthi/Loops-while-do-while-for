import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <button onClick={()=>{

let engMarks = 95;
if(engMarks >= 35){
  console.log("Student passed in English");
}


 }}>if</button>
 <button onClick={()=>{

let engMarks = 96;
while(engMarks < 1000){
console.log(engMarks);
engMarks++;
}


}}>while</button>
<button  
onClick={()=>{

let mathsMarks = 75;

do{

console.log("Student passed in manths");

}while(mathsMarks >= 35);

}}>Do while</button>

<button 
onClick={()=>{
for(let k = 1; k <= 10000; k++){
if (k >= 1000 && k <= 900){
continue;
}

console.log(`${k}.today is your opportunity to build the tomorrow you want`);
// if(k == 10000){
//  break;
// }

}
}}>for</button>

<button onClick={()=>{
for(let k=1;k<=1000;k++){
if (k ===456|| k===789 || k===123 || k===694 || k===695 || k===696 || k===697){
  continue;
}

for(let s=1;s<=100;s++){
  if(s===44 || s===45|| s===46 || s===67 || s===53 || s===81){
   continue;
  }

  console.log(`${k} * ${s}  = ${k*s}`);
  

}


}
}}>Nested Loops</button>

    </div>
  );
}

export default App;
