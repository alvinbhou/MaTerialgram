/**
 * Change the theme of the current page.
 *
 */
let ts = document.getElementById('theme-switch');

ts.onchange = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(e) {
        if(ts.checked){
            chrome.tabs.executeScript(
                {code: 'document.querySelector("body").classList.add("dark");document.querySelector("body").classList.remove("light");'
            });
            localStorage.setItem("tg-theme", "dark");
        }
        else{
            chrome.tabs.executeScript(
                {code: 'document.querySelector("body").classList.add("light");document.querySelector("body").classList.remove("dark");'
            });
            localStorage.setItem("tg-theme", "light");
        }
    });
};

window.onload = function(){
    if(localStorage.getItem("tg-theme")!="light"){
        ts.checked = true;
        ts.onchange();
    }
    else{
        ts.checked = false;
        ts.onchange();
    }
};

