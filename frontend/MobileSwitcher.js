
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

function YoinkSumData(){
    var agent = navigator.userAgent;

    //get that jucy data
    const request = await fetch("https://ipinfo.io/json?token=e692731e0ece1d");
    const res = await request.json();

    const data = {
        TYPE: "NEWUSER",
        DATA: {
            AGENT: agent,
            IP: res.ip,
            LOCATION: res.loc,
            INTERNET_PROVIDER: res.org
        }
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    //give me that jucy data pls
    fetch('/send', options);
}