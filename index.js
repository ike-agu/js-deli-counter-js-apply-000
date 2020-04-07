function takeANumber(katzDeli , person){
  katzDeli.push(person)
  
  return  `Welcome, ${person}. You are number ${katzDeli.length} in line.`
  
 
}


function nowServing(katzDeliLine){
  

  for (let i=0 ; i < katzDeliLine.length ; i++){
    
    if (katzDeliLine.length===0){
      
      return "There is nobody waiting to be served!"
    }else{
      
      return `Currently serving ${katzDeliLine.shift()}.`
    }
    
  }
  
  
}

function currentLine(katzDeliLine){
  
  
  
  if (katzDeliLine.length===0){
  return "The line is currently empty."
  
}else{
  
  let string ="The line is currently: "
  
  for (let i=0; i<katzDeliLine.length ; i++){

  return string += `${i+1}. ${katzDeliLine[i]}, `
}

return string.slice(0,-2)
}
}


