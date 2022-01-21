function ready(){
    let worklog = document.getElementById('workLog');

    worklog.onclick = function(){
        window.location.href = "workLog.html";
    }

    let copyright = document.getElementById('copyright');

    copyright.onclick = function(){
        window.location.href = "copyright.html"
    }

    let home = document.getElementById('home');

    home.onclick = function(){
        window.location.href = "landing.html"
    }
}

document.addEventListener("DOMContentLoaded", ready);