import React from 'react' ;


let d=new Date(10);
d= d.getHours();
let greeting ='';
const cssstyle={};

if(d>=1 && d<12){
   greeting='Good Morning';
   cssstyle.color="green";
}
else if(d>=12 && d<19){

 greeting='Good afternoon';
 cssstyle.color="yellow";
}
else
{
  greeting='Good night';
  cssstyle.color="blue";
}

const heading={
    textAlign : "center",
    color : "red"
    };
const para={
    textAlign :"center",
    alignItem : "center",
    marginTop : "100px",
    backGroundColor :'#ffe9cs',
    borderRadius :"20px",
    color : "pink"

};
const w={
 
   backGroundColor : "pink "
};
const Greetings=()=>{
return(
  <>
  <div style={w}>
  <h1 style={heading} > challenge 3 </h1>
  
  <h1 style={para}>Hello Sir,<span style={cssstyle}>{greeting}</span></h1>
  
  </div>
  </>
 );

}
export default Greetings
