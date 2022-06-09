
function CheckForMobile(){

    const is_mobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i);

    console.log(navigator.userAgent)
    console.log('script ran')
    
    if (is_mobile != null){
        document.location.href = "MOBILE/home.html"

    } else {
        document.location.href = "DESKTOP/home.html"
    }
}
