//defining each variable and specifing that they must be inout my the user
let firstname = prompt("Enter your first name: ")
let state = prompt("Enter your state of residence: ")
let temp = prompt("Enter the current temperature in degrees Farenheit: ")
let messages = [
  `Hey ${firstname}, because the temperature is currently ${temp} degrees you should wear a warm coat, hat, scarf and gloves.`, 
  `Hey ${firstname}, because the temperature is currently ${temp} degrees you should wear a warm coat but you won't need a hat, scarf or gloves.`, 
  `Hey ${firstname}, because the temperature is currently ${temp} degrees you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`, 
  `Hey ${firstname}, because the temperature is currently ${temp} degrees you should wear a warm coat, hat and gloves. Maybe a scarf too.`, 
  `Please input relevant data.`

  ]
  
 //sorting user inputs to see if they nmatch specific weather and location varibales, and then associating a specific message to those  
    switch(state) {
  case state == 'NE' && temp < 32:
    console.log(messages[0])
    break;
  case state == 'NE' && temp >= 32 && temp < 50:
    console.log(messages[1])
    break;
  case state == 'FL' && temp >= 32 && temp < 50:
    console.log(messages[2])
    break;
  case state == 'FL' && temp >= 50 && temp < 70:
    console.log(messages[3]) 
    break;
  default:
    console.log(messages[4])
  }