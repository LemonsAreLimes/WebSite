
async function CheckForMobile(){
    await YoinkSumData()

    const is_mobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i);

    console.log(navigator.userAgent)
    console.log('script ran')
    
    if (is_mobile != null){
        document.location.href = "MOBILE/home.html"

    } else {
        document.location.href = "DESKTOP/home.html"
    }
}

async function YoinkSumData(){
    // var agent = navigator.userAgent;

    console.log('yoinkin...');

    // //get that jucy data
    // const request = await fetch("https://ipinfo.io/json?token=e692731e0ece1d");
    // const res = await request.json();

    // const data = {
    //     TYPE: "NEWUSER",
    //     DATA: {
    //         AGENT: agent,
    //         IP: res.ip,
    //         LOCATION: res.loc,
    //         INTERNET_PROVIDER: res.org
    //     }

    const data = {TYPE:"TEST"}

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    //give me that jucy data pls
    await fetch('/send', options);
}