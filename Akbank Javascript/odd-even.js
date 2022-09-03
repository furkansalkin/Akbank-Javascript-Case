function oddishOrEvenish(number){

    let strNum = number.toString();
    let sum = 0;

    //Control if number is negative
    if(strNum[0] == '-'){
        for(let i = 1; i < strNum.length;i++){
        sum += parseInt(strNum[i]);
        }
        //Control number is odd or even
        if(sum%2 == 0){
            return 'Even';
        }
        else{
            return 'Odd';
        }
    }
    else{
        for(let i = 0; i < strNum.length;i++){
            sum += parseInt(strNum[i]);
        }
        //Control number is odd or even
        if(sum%2 == 0){
            return 'Even';
        }
        else{
            return 'Odd';
        }
    }
}
console.log(oddishOrEvenish(21));