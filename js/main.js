

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
    
    if(data.type === 'single'){
    document.querySelector('#originalJoke').innerText = data.joke 
    document.querySelector('#setup').innerText = ""
    document.querySelector('#delivery').innerText = ""
   }else if(data.type === 'twopart'){
    document.querySelector('#delivery').innerText = data.delivery   
    document.querySelector('#setup').innerText = data.setup 
    document.querySelector('#originalJoke').innerText = ""
  }
 
 let joke = data.joke


  const API_KEY = 'AIzaSyBUrq4lhHGnO67IgFoJ6dJicVUiu9PJYDI';
  const sourceLang = 'en';
  const targetLang = 'es';
  const urlDos = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${joke}`;
   
  fetch(urlDos)
  .then(res => res.json())
  .then(data => {
        console.log(data.data.translations[0].translatedText)

    document.querySelector('#translatedJoke').innerText = data.data.translations[0].translatedText
  })
 

//   if( document.querySelector('#translatedJoke').innerText = data.data.translations[0].translatedText){
// document.querySelector('#originalJoke').classList.remove('originalJoke') 
//     document.querySelector('#originalJoke').classList.add('originalJoke')
//   }else{
//  console.log(`it's working`)
//   }
  


})

}
// // document.querySelector('#originalJoke').innerHTML
