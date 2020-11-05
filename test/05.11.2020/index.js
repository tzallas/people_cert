function fruits(fruitype){
    switch(fruitype){
        case "Bananas":
            console.log(" price of Bananas is 99$");
            break;
        case "Oranges":   
            console.log(" price of Oranges is 0.79$");
            break;
        case "Apples":
            console.log(" price of Apples is o,89$");
            break;
        case "Cherries":
            console.log("The price o Cheries is 2.99$");
            break;
        case "Grapes":
            console.log("The price o Grapes is 3,99$");
            break;
        default:
            console.log("Pick a fruit");
            break;
    }
    }
    fruits("Grapes");
    