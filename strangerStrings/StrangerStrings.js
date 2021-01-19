class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment) ;
    }

    getPrefix(input){

        return input.substring(0, 3);
    }

    getSuffix(input){
// get last three letters


return input.substring(input.length-3, input.length);

    }

    getMiddleCharacter(inputValue){
        var position;
        var length;
        if(inputValue.length % 2 == 0) {
            position = inputValue.length / 2 - 1;
            length = 2;
        } else {
            position = (inputValue.length - 1)/ 2;
            length = 1;
        }
        return inputValue.substring(position, position + length)
    }
    

    getFirstWord(inputValue){
        var firstWord = inputValue.substr(0, inputValue.indexOf(" "));
        return firstWord;
    }
    
    getSecondWord(spaceDelimnatedInput){
         
      return spaceDelimnatedInput.split(' ')[1]
    }
    
    reverse(input){
        const revArray = []; 
    const length = input.length - 1; 
      
    // Looping from the end 
    for(let i = length; i >= 0; i--) { 
        revArray.push(input[i]); 
    } 
      
    // Joining the array elements 
    return revArray.join(''); 
} 
            
           
}

    module.exports = StrangerStrings;
