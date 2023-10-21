function numClick(val){
    document.querySelector("#outScreen").value+=val;
}

function disClear(){
    document.querySelector("#outScreen").value ="";
}

function equal(){
    var text=document.querySelector("#outScreen").value;
    var res=eval(text);
    document.querySelector('#outScreen').value=res;
}