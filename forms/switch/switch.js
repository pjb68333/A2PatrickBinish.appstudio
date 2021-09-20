//defining each variable and specifing that they must be inout my the user
let firstname1 = prompt("Enter your first name: ")
let state1 = prompt("Enter your state of residence in its two letter abreviasion: ")
let temp1 = prompt("Enter the current temperature in degrees Farenheit: ")
let messages1 = [
  `Hey ${firstname1}, because the temperature is currently ${temp1} degrees you should wear a warm coat, hat, scarf and gloves.`, 
  `Hey ${firstname1}, because the temperature is currently ${temp1} degrees you should wear a warm coat but you won't need a hat, scarf or gloves.`, 
  `Hey ${firstname1}, because the temperature is currently ${temp1} degrees you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`, 
  `Hey ${firstname1}, because the temperature is currently ${temp1} degrees you should wear a warm coat, hat and gloves. Maybe a scarf too.`, 
  `Please input relevant data.`

  ]
  
   
 //sorting user inputs to see if they nmatch specific weather and location varibales, and then associating a specific message to those  
  if (state1 == 'NE' && temp1 < 32) {
    console.log(messages1[0])
  } else if (state1 == 'NE' && temp1 >= 32 && temp1 < 50) {
    console.log(messages1[1])
  } else if (state1 == 'FL' && temp1 >= 32 && temp1 < 50) {
    console.log(messages1[2])
  } else if (state1 == 'FL' && temp1 >= 50 && temp1 < 70)  {
    console.log(messages1[3])
  } else {
    console.log(messages1[4])
    }