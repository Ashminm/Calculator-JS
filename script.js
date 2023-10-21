function numClick(val){
    document.querySelector("#outScreen").value+=val;
}

function disClear(){
    document.querySelector("#outScreen").value ="";
}

function backClick(){
    document.querySelector("#outScreen").value =document.querySelector("#outScreen").value.toString().slice(0,-1);
}

function equal(){
    var text=document.querySelector("#outScreen").value;
    var res=eval(text);
    document.querySelector('#outScreen').value=res;
}