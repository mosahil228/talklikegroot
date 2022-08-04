const btn=document.querySelector("#btn-translate");
const textArea=document.querySelector("#txt-input")
const temp1=document.querySelector("#output")


// let api="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var api = "https://api.funtranslations.com/translate/groot.json";
function getTranslate(text){
    return api+"?text="+text;
}
const errorH=(error)=>{
    console.log("error occured", error);
    alert("somthing wrong in the server, Please try again after some time")
}
const toggle=()=>{
   let text=textArea.value;
   fetch(getTranslate(text)).then(res=>res.json()).then(json=>{
    let translatedText=json.contents.translated;
    output.innerText=translatedText;
   }).catch(errorH);

}
btn.addEventListener("click",toggle);