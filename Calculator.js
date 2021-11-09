const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	console.log(tokens)
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
    console.log(mathSymbol, num1, num2);
    if (mathSymbol == '+') {
    console.log(num1 + num2);

     } else if (mathSymbol == '-') {
        console.log(num1 - num2);

        
     } else if (mathSymbol == '*') {
       console.log(num1 * num2);
        
     } else if  (mathSymbol == '/') {
        console.log(num1 / num2);
     
     }
                
     reader.close()
})  

      
// 	// This line closes the connection to the command line interface