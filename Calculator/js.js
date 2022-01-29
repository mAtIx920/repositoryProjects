let userValue = "0";
let start = false;
const numTab = [];
const operantsTab = [];
let singleNumber = "";
let trimedValue = "";
let finallyResult = "";
let flag = true;

document.querySelector('.result').textContent = userValue;

//Trimming function
const trim = (value) => {
    let number = "";
    for(let i = 0; i < value.length; i++){
        if(!(value[i] === " ")){
            number += value[i];
        }
    }
    return number;
}

//Multiplication and split user number
const firstTreatment = (firstTab, secondTab) => {
    let result = "";
    for(let i = 0; i < firstTab.length; i++){
        if(firstTab[i] === "*"){
            result = secondTab[i] * secondTab[i + 1];
            secondTab[i] = result;
            secondTab.splice(i + 1, 1);
            firstTab.splice(i, 1);
            i--;
    
        } else if(firstTab[i] === "/"){ 
            result = secondTab[i] / secondTab[i + 1];
            secondTab[i] = result;
            secondTab.splice(i + 1, 1);
            firstTab.splice(i, 1);
            i--;
        }
    }
}

//Addition and substraction user number
const secondTreatment = (firstTab, secondTab) => {
    let result = "";
    for(let i = 0; i < firstTab.length; i++){
        if(firstTab[i] === "+"){
            result = secondTab[i] + secondTab[i + 1];
            secondTab[i] = result;
            secondTab.splice(i + 1, 1);
            firstTab.splice(i, 1);
            i--;
    
    
        } else if(firstTab[i] === "-"){
            result = secondTab[i] - secondTab[i + 1];
            secondTab[i] = result;
            secondTab.splice(i + 1, 1);
            firstTab.splice(i, 1);
            i--;
        }
    }
}

//Restore to default values
const defaultValue = () => {
    start = false;
    trimedValue ="";
    userValue = "0";
    numTab.splice(0);
    operantsTab.splice(0);
}

document.querySelectorAll('span').forEach( (button, numIndex) => {
    
    //Function returning a clicked button
    const clickedNum = () => {
        switch(numIndex){
            case 0:
                return "c";
            break;
            case 1:
                return " / ";
            break;
            case 2:
                return " * ";
            break;
            case 3:
                return "7";
            break;
            case 4:
                return "8";
            break;
            case 5:
                return "9";
            break;
            case 6:
                return " - ";
            break;
            case 7:
                return "4";
            break;
            case 8:
                return "5";
            break;
            case 9:
                return "6";
            break;
            case 10:
                return " + ";
            break;
            case 11:
                return "1";
            break;
            case 12:
                return "2";
            break;
            case 13:
                return "3";
            break;
            case 14:
                return "0";
            break;
            case 15:
                return "a";
            break;
            case 16:
                return ".";
            break;
            case 17:
                return "=";
            break;
        }       
    }

    button.addEventListener('click', () => {
       
        if(clickedNum() === "="){
            
           trimedValue = trim(userValue);
           trimedValue+= "#";
             
           //Addding numbers and operants to table
           for(let i = 0; i < trimedValue.length; i++){
                if(trimedValue[i] !== "+" && trimedValue[i] !== "-" && trimedValue[i] !== "*" && trimedValue[i] !== "/" && trimedValue[i] !== "#"){
                    singleNumber += trimedValue[i];
                
                } else {
                    numTab.push(Number(singleNumber));
                    operantsTab.push(trimedValue[i]);
                    singleNumber = "";
                    
                }
            }
            
            firstTreatment(operantsTab, numTab);
            secondTreatment(operantsTab, numTab);
            finallyResult = numTab[0];
            defaultValue();

            document.querySelector('.result').textContent = finallyResult;
            
        } else if(clickedNum() === "c"){    
            defaultValue();
            finallyResult = "";
            document.querySelector('.result').textContent = userValue;

        } else if(clickedNum() === "a") {
            document.querySelector('.result').textContent = 'Ans';
            userValue = finallyResult;
            console.log(userValue);
            finallyResult = "";
            start = !start;
            console.log(start)

        } else {  
            if(start){
                if((clickedNum() === " + " || clickedNum() === " - " || clickedNum() === " * " || clickedNum() === " / ") && flag){
                    userValue += clickedNum();
                    document.querySelector('.result').textContent += `${clickedNum()}`;
                    flag = false;

                } else {
                    if(clickedNum() === " + " || clickedNum() === " - " || clickedNum() === " * " || clickedNum() === " / "){
                        userValue += "";
                        document.querySelector('.result').textContent += "";
                    } else {
                        userValue += clickedNum();
                        document.querySelector('.result').textContent += `${clickedNum()}`;
                        flag = true;
                    }
                }
                
            } else { 
                console.log(clickedNum())
                
                if(clickedNum() === " + " || clickedNum() === " - " || clickedNum() === " * " || clickedNum() === " / "){
                    document.querySelector('.result').textContent = "0";
                    userValue = "0";
                } else {
                    document.querySelector('.result').textContent = `${clickedNum()}`;
                    userValue = clickedNum();
                    start = !start; 
                }                 
            }   
        }
    })  
})

