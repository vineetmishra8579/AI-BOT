let mic=document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let intro=["Hello, I am Hawks"];
let launch=["These are the latest 5G launches. Redmi Note 11 Pro MAX, OnePlus 9RT, Realme GT Neo, Samsung Galaxy A32"];
let ord=["You can track your order from the tracking id you recieved"];
let del=["Please wait. The courier company will contact you if there is any delay"];
let ret=["The return policy is based on the type of product you choose"];
let charge=["Products above 500 cost 0 delivery charge."];
let ref=["The amount refunded will be credited to your bank account within 3 days of refund"];
let hru=["I am fine. What about you"];
let nam=["hello"];
let go=["Good to hear that. How may I assist you"];
let lap=["These are the good laptops under 50000. acer Aspire 5 Core i5 11th Gen, DELL Inspiron Ryzen 5 Quad Core 3450U, DELL Inspiron Ryzen 5 Quad Core 3450U, HP Core i3 11th Gen, HP 14s Core i3 10th Gen"];
let best=["Nike, Adidas and Puma shoes available at min 30% discount"];
let smart=['Samsumg Galaxy Active 2, Letsfit, Noise'];
let book=['Algorithm Unlocked by Thomas H. Cormen, The Algorithm Design Manual by Steven S. Skiena, Data Structures and Algorithms Made Easy:Data Structures and Algorithmic Puzzles by Narasimha Karumanchi'];
let last=['Welcome. Hope the information was helpful'];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-GB'
    speechSynthesis.speak(speech)
    speech.text= "Sorry! Still I am learning. For furthur details contact : 1800202989";
    if(message.includes('who are you')){
        let finalresult=intro[Math.floor(Math.random() * intro.length)];
        speech.text=finalresult;
    }
    if(message.includes('what are the latest 5G mobiles')){
        let finalresult=launch[Math.floor(Math.random() * launch.length)];
        speech.text=finalresult;
    }
    if(message.includes('how can I track my order')){
        let finalresult=ord[Math.floor(Math.random() * ord.length)];
        speech.text=finalresult;
    }
    if(message.includes('the delivery date has arrived and I have not received any notifications')){
        let finalresult=del[Math.floor(Math.random() * del.length)];
        speech.text=finalresult;
    }
    if(message.includes('does the company give return policy')){
        let finalresult=ret[Math.floor(Math.random() * ret.length)];
        speech.text=finalresult;
    }
    if(message.includes('after what amount the delivery charge is not taken')){
        let finalresult=charge[Math.floor(Math.random() * charge.length)];
        speech.text=finalresult;
    }
    if(message.includes('how is the amount refunded if the product is returned')){
        let finalresult=ref[Math.floor(Math.random() * ref.length)];
        speech.text=finalresult;
    }
    if(message.includes('latest 5G mobiles')){
        let finalresult=launch[Math.floor(Math.random() * launch.length)];
        speech.text=finalresult;
    }
    if(message.includes('how are you')){
        let finalresult=hru[Math.floor(Math.random() * hru.length)];
        speech.text=finalresult;
    }
    if(message.includes('who are you')){
        let finalresult=intro[Math.floor(Math.random() * intro.length)];
        speech.text=finalresult;
    }
    if(message.includes('which are the best laptops under 50000')){
        let finalresult=lap[Math.floor(Math.random() * lap.length)];
        speech.text=finalresult;
    }
    if(message.includes('I am fine')){
        let finalresult=go[Math.floor(Math.random() * go.length)];
        speech.text=finalresult;
    }
    if(message.includes('what are the fashion offers available')){
        let finalresult=best[Math.floor(Math.random() * best.length)];
        speech.text=finalresult;
    }
    if(message.includes('hello')){
        let finalresult=nam[Math.floor(Math.random() * nam.length)];
        speech.text=finalresult;
    }
    if(message.includes('I am fine')){
        let finalresult=go[Math.floor(Math.random() * go.length)];
        speech.text=finalresult;
    }
    if(message.includes('best budget friendly smart watches')){
        let finalresult=smart[Math.floor(Math.random() * smart.length)];
        speech.text=finalresult;
    }
    if(message.includes('best book for Data structures and algorithms')){
        let finalresult=book[Math.floor(Math.random() * book.length)];
        speech.text=finalresult;
    }
    if(message.includes('thank you')){
        let finalresult=last[Math.floor(Math.random() * last.length)];
        speech.text=finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text))
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}

mic.addEventListener("click",function(){
    recognition.start();
    console.log("Activated");
})