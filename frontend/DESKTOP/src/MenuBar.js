
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


function OpenMenu(){
    //open menu
    // document.getElementById('menu').className = 'MenuBarOpenAnim'

    //create menu text
    const MenuWithText = '<p id="homeIcon" class="MenuItem">📜</p><a onclick="CrossPage(1);" id="MenuText1" class="MenuCloseText">Home</a><p class="MenuItem">🖥️</p><a id="MenuText2" class="MenuCloseText" onclick="CrossPage(2)">Projects</a><p class="MenuItem">📁</p><a id="MenuText3" class="MenuCloseText" onclick="CrossPage(3)">About me</a>'
    
    // <p id="homeIcon" class="MenuItem">📜</p>
    // <a id="MenuText3" class="MenuCloseText" onclick="CrossPage(3)">Home</a>
    // <p class="MenuItem">🖥️</p>
    // <a id="MenuText1" class="MenuCloseText" onclick="CrossPage(1)">Projects</a>
    // <p class="MenuItem">📁</p>
    // <a id="MenuText2" class="MenuCloseText" onclick="CrossPage(2)">About me</a>
    
    document.getElementById('menu').innerHTML = MenuWithText

    //js wtf
    // document.getElementsByClassName('MenuCloseText').className = 'MenuOpenText'

    //open preview text
    document.getElementById('MenuText1').className = 'MenuText'
    document.getElementById('MenuText2').className = 'MenuText'
    document.getElementById('MenuText3').className = 'MenuText'
}

async function CloseMenu(){
    //close menu
    // document.getElementById('menu').className = 'MenuBarCloseAnim'

    //close preview text
    document.getElementById('MenuText1').className += ' closeMenuText'
    document.getElementById('MenuText2').className += ' closeMenuText'
    document.getElementById('MenuText3').className += ' closeMenuText'

    //wait for animation to finish
    await sleep(150);

    //delete menu text
    const MenuWithoutText = '<p id="homeIcon" class="MenuItem">📜</p><p class="MenuItem">🖥️</p><p class="MenuItem">📁</p>'
    document.getElementById('menu').innerHTML = MenuWithoutText
}


async function LoadPage(){
    console.log('anima call');

    //gen loading text
    const LoadingMsgList = ['heyyy loading text', 'OwO whats this?', 'whats 9 + 10?', 'what are you looking at?', 'never gonna give you up', 'delete system23', 'UwU', 'dont check the js', 'am i a web dev now?', 'wtf is css', '(ㆆ _ ㆆ)', '✴.·´¯`·.·★  🎀𝔀𝓽𝓯 𝓲𝓼 𝓸𝓪𝓽𝓶𝓮𝓪𝓵🎀  ★·.·`¯´·.✴', 'd2hhdCBkZSBoZWFs', 'the internet is dead', 'the inversion has already happend', 'whats up from line 45']
    const randINT = Math.floor(Math.random() * LoadingMsgList.length);
    const LoadingText = LoadingMsgList[randINT]

    localStorage.setItem('load', LoadingText);

    //why do i need this?????
    await sleep(1);

    //this is does something
    document.getElementById('loadtext').innerText = LoadingText
    document.getElementById('loadingPage').className = 'loadingPageAnimClose'

    await sleep(500);
    document.getElementById('loadtext').innerText = ''
}


async function CrossPage(toPage){
    console.log('page transition');

    //gen loading text
    const LoadingMsgList = ['heyyy loading text', 'yert', 'my name a jeyoph', 'shitty web page', 'nvm this is pretty cool', 'never gonna let you down', '🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿', 'UwU', 'dont uwu at me u gremlin', '*coughs virtually*', 'ayo what font is that?', 'bro im just trynna exist', 'im on github!', 'ILOVECODING!!!!', 'xue piao piao beng fu xiao xiao', 'whats up from line 76']
    const randINT = Math.floor(Math.random() * LoadingMsgList.length);
    const LoadingText = LoadingMsgList[randINT]

    //show transition and show loading text
    document.getElementById('loadingPage').className = 'loadingPageAnimOpen'
    document.getElementById('loadtext').innerText = LoadingText

    if(toPage==1){
        await sleep(1000);
        window.location = 'index.html'
    }
    if(toPage==2){
        await sleep(1000);
        window.location = 'Projects.html'
    }
    if(toPage==3){
        await sleep(1000);
        window.location = 'AboutMe.html'
    }
}