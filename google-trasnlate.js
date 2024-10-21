const API_KEY = AIzaSyBUrq4lhHGnO67IgFoJ6dJicVUiu9PJYDI

async translate(text) {
    let res = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    { q: text, target: "tr" }
    );
    let translation = res.data.data.translations[0].translatedText;
    return translation;
  }