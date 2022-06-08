const is_mobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i);

if (is_mobile != null){
    document.getElementById('output').innerText = "you are on moblie"
} else {
    document.getElementById('output').innerText = "you are not on moblie"
}