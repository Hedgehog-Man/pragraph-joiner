function Getpara1(){
  var input=[];  
  for(var i=1;i<=7;i++)
  {
  input.push(document.getElementById("input_"+i).value);
  }
  input.join(". ")
  document.getElementById("para1").innerHTML=input.join(". ");
}

function Getpara2(){
  var input=[];  
  for(var i=1;i<=7;i++)
  {
  input.push(document.getElementById("input_"+i+"a").value);
  }
  input.join(". ")
  document.getElementById("para2").innerHTML=input.join(". ");
}