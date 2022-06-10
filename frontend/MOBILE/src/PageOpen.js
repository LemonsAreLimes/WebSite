function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function OpenSite(){

    //yup still need this
    await sleep(1);
    
    //gen loading text
    const LoadingMsgList = ['heyyy loading text', 'yert', 'my name a jeyoph', 'shitty web page', 'nvm this is pretty cool', 'never gonna let you down', '🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿', 'UwU', 'dont uwu at me u gremlin', '*coughs virtually*', 'ayo what font is that?', 'bro im just trynna exist', 'im on github!', 'ILOVECODING!!!!', 'xue piao piao beng fu xiao xiao', 'whats up from line 76']
    const randINT = Math.floor(Math.random() * LoadingMsgList.length);
    const LoadingText = LoadingMsgList[randINT]

    document.getElementById('TranstionBox').className = 'PageOpen'
    document.getElementById('TransitionText').innerText = LoadingText

    await sleep(1000);

    document.getElementById('TransitionText').innerText = ''
}

async function CloseSite(page){

    await sleep(1);

    //gen loading text
    const LoadingMsgList = ['heyyy loading text', 'yert', 'my name a jeyoph', 'shitty web page', 'nvm this is pretty cool', 'never gonna let you down', '🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿', 'UwU', 'dont uwu at me u gremlin', '*coughs virtually*', 'ayo what font is that?', 'bro im just trynna exist', 'im on github!', 'ILOVECODING!!!!', 'xue piao piao beng fu xiao xiao', 'whats up from line 76']
    const randINT = Math.floor(Math.random() * LoadingMsgList.length);
    const LoadingText = LoadingMsgList[randINT]

    document.getElementById('TranstionBox').className = 'PageClose'
    document.getElementById('TransitionText').innerText = LoadingText

    await sleep(1000);

    if(page == 1){
        window.location.href = 'aboutme.html'
    } if(page == 2){
        window.location.href = 'home.html'
    } if(page == 3){
        window.location.href = 'projects.html'
    } else {
        console.log('yeah somethign is wronge')
    }
}

window.onload = OpenSite();