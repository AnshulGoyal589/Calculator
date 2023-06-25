let btn=document.querySelector(".content");
let screenContent=document.querySelector(".screen");

btn.addEventListener("click" , performOperation)

function performOperation(e){
    if(e.target.classList.contains("operations")){
        switch(e.target.innerText){
            case 'AC':
                screenContent.innerText="";
                break;
            case '=':
                let result=eval(screenContent.innerText);
                if( result.toString().indexOf('.')!=-1){
                    result=result.toString().slice(0,result.toString().indexOf('.')+4);
                }
                screenContent.innerText=result;
                break;
            default:
                screenContent.innerText+=e.target.innerText;                                 
        }
    }
}