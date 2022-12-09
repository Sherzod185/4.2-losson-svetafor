let rang1 =document.querySelector(".rang1")
let rang2 =document.querySelector(".rang2")
let rang3 =document.querySelector(".rang3")
let count =0
setInterval(()=>{
  if(count%14==1 || count%14==2 || count%14==3 || count%14==5 ){
    rang1.style.backgroundColor = "#ff00009d"
    rang3.style.backgroundColor = "#1C2E2C"  
  }
  else if(count%14==4){
    rang1.style.backgroundColor = "#1C2E2C"
  }
  else if(count%14==6){
    rang1.style.backgroundColor = "#1C2E2C"
  }

  else if (count%14==7 || count%14==8 || count%14==9){
       rang1.style.backgroundColor = "#1C2E2C"
    rang2.style.backgroundColor = "yellow"
    rang3.style.backgroundColor = "#1C2E2C" 
  }
  else if (count%14==10 || count%14==11 || count%14==13){
    rang1.style.backgroundColor = "#1C2E2C"
 rang2.style.backgroundColor = "#1C2E2C"
 rang3.style.backgroundColor = "green" 
}
else if(count%15==12){
  rang3.style.backgroundColor = "#1C2E2C"
}
else{
  rang1.style.backgroundColor = "#1C2E2C"
  rang2.style.backgroundColor = "#1C2E2C"
  rang3.style.backgroundColor = "#1C2E2C" 
}
  count++
}, 600)
