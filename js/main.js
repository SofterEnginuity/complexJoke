

document.querySelector('button').addEventListener('click', getJoke)


// console.log(twoPart)

function getJoke(){

let jokeType = document.querySelector('#jokeType').value

console.log(jokeType)
// const userInput = document.querySelector('input').value 
fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode&type=${jokeType}`)
.then(res => res.json())
.then(data => {
    console.log(data)

    //https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

   if(data.type === 'single'){
    document.querySelector('#originalJoke').innerText = data.joke 
    document.querySelector('#setup').innerText = ""
    document.querySelector('#delivery').innerText = ""
   }else if(data.type === 'twopart'){
    document.querySelector('#delivery').innerText = data.delivery   
    document.querySelector('#setup').innerText = data.setup 
    document.querySelector('#originalJoke').innerText = ""
  }
  getTranslation()

})
}
// // document.querySelector('#originalJoke').innerHTML
 function getTranslation(text){


     const url = `https://655.mtis.workers.dev/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr`
    fetch(url, {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(res => res.json())
    .then(data2 =>{
        console.log(data2)
    })
   .catch(err => {
    console.log(`error ${err}`)
})
}











// })
// })


// document.querySelector('').innerText = data.setup

//  document.querySelector('translatedJoke').innerText = ????