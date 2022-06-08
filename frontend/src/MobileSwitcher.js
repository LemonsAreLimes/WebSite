
function CheckForMobile(){

    const is_mobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i);

    console.log(navigator.userAgent)
    console.log('script ran')
    
    if (is_mobile != null){
        document.getElementById("output").innerText = "you are on moblie"
    } else {
        document.getElementById("output").innerText = "you are not on moblie"
        console.log('not mobile')
    }

}
