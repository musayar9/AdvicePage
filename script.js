const adviceText =  document.querySelector(".advice")
const adviceId = document.querySelector(".idNum")
const btnRandom = document.querySelector(".btn")
const sound = document.querySelector(".sound")
const copy = document.querySelector(".copy")

btnRandom.addEventListener("click", ()=>{
 showAdvice()
})

async function  showAdvice() {
try{
  const url = "https://api.adviceslip.com/advice"

    const response = await fetch(url)
   
    const data = await response.json()

    const result = await data.slip.advice;
    const Id = await data.slip.id



    adviceText.innerText =  `"${result}"`
    adviceId.innerHTML = `<span>Advice #${Id}</span>`
}catch(err){
  console.log(err)
}
  

}

sound.addEventListener("click", () =>{
    let utterance ;
    utterance = new SpeechSynthesisUtterance(adviceText.innerText)
    speechSynthesis.speak(utterance)
  })

  copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(adviceText.innerText)
  })


