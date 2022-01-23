const pigLatin = () => {
    let textOutput = document.getElementById('display')
    let pigLatinWord = document.getElementById('pigLatinInput').value
    console.log(pigLatinWord)
    let word = pigLatinWord.toLowerCase().trim();
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(word[0])) {
      return textOutput.innerText = word + "yay"

    }
    let firstVowelIndex = null
    for (let i=0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
       firstVowelIndex = i 
       break;
     
      }  
    }
    // console.log(word.slice(0, firstVowelIndex))
    let start = word.slice(0, firstVowelIndex)
    let end = word.slice(firstVowelIndex) 
    return textOutput.innerText = end + start + 'ay'
  
  }