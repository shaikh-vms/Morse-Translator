var btn = document.querySelector("#btn");
var inputText = document.querySelector("#inputText");
var output = document.querySelector("#output");
const sb = document.querySelector('#translation');


var url2morse = "https://api.funtranslations.com/translate/morse.json";
var url2english = "https://api.funtranslations.com/translate/morse2English.json";

btn.addEventListener('click',()=> {
    let selectedOption = sb.options[sb.selectedIndex];
    let selectedValue = selectedOption.value;
    if(selectedValue=='toMorse'){
        url = url2morse;
    }else{
        url= url2english;
    }
    var textInput = inputText.value;
    fetch(`${url}?text=${textInput}`)
        .then(res => res.json())
        .then(data => {
            output.innerText =  data.contents.translated;
        })
        .catch(() => alert('Sorry :( something is wrong with server'))
});
