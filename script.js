function buttonClick(val)
{
    // console.log(val); for testing
    document.querySelector(".screen").value = document.querySelector(".screen").value +val; //concatenating the already existing types value with the new input 

}

function clearScreen(){
    document.querySelector(".screen").value = null;   
}

function equalClick(){
    var text = document.querySelector(".screen").value; //took the already existing values from the screen
    var result = eval(text);
    // eval() is a build in method in JS which exe all the operations inside the text field
    document.querySelector(".screen").value = result;
    console.log(result);
}