
async function CheckForMobile(){
    AddLoadingText();
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

function AddLoadingText(){
    
    //gen loading text
    const LoadingMsgList = ['welcome to the page you are not supposed to see!', 'ayo we loading 1 sec', 'hold on im stealing ur data', 'grab a snack cuz this gon be a while...', 'heyyy loading text', 'so yeah this is my site', 'server not responding', '404', 'deleteing system32', 'hacking mainframe...']
    const randINT = Math.floor(Math.random() * LoadingMsgList.length);
    const LoadingText = LoadingMsgList[randINT]

    //add loadingtext to html
    document.getElementById('output').innerText = LoadingText

}

async function YoinkSumData(){
    console.log('yoinkin...');

    //get that jucy data
    const request = await fetch("https://ipinfo.io/json?token=e692731e0ece1d");
    const res = await request.json();
    var agent = navigator.userAgent;

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
    await fetch('/send', options);
}