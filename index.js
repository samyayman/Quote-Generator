const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random quote function 

function randomQuote(){
    quoteBtn.innerText = "Loading Quote..."
    //fething random quotes/data from API 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content; 
        authorName.innerHTML = result.author;
        quoteBtn.innerText = "New Quote"
    });
}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance);
});


copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerHTML)
});

twitterBtn.addEventListener("click",()=>{
   let twitterUrl = `https://twitter.com/intent/tweet?url = ${quoteText.innerHTML}`;
   window.open(twitterUrl , "_blank"); 
});


quoteBtn.addEventListener("click" , randomQuote)