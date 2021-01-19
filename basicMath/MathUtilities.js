class MathUtilities {


    add(baseValue, valueToAdd){
        let answer = baseValue+valueToAdd;
        return answer;
    }

    subtract(baseValue, valueToAdd){
        let sub =baseValue -valueToAdd;
        return sub;
    }

    divide(baseValue, valueToAdd){
        let divi = baseValue /valueToAdd;
        return divi;
    }

    multiply(baseValue, valueToAdd){
        let mul = baseValue * valueToAdd;
        return mul;
    }
}

module.exports = MathUtilities;