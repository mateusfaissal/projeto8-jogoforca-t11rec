import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from './palavras';


function App() {
  let [word, setWord] = useState('');
  let [wordLetters, setWordLetters] = useState([]);
  let [showWord, setShowWord] = useState([]);
  let [habilitaBtn, setHabilitaBtn] = useState(true);
  let [errors, setErrors] = useState(0);
  let [result, setResult] = useState('');


  return (
    <div className='container-game'>
      <Jogo
        palavras={palavras}
        word={word}
        setWord={setWord}
        wordLetters={wordLetters}
        setWordLetters={setWordLetters}
        showWord={showWord}
        setShowWord={setShowWord}
        habilitaBtn={habilitaBtn}
        setHabilitaBtn={setHabilitaBtn}
        errors={errors}
        setErrors={setErrors}
        result={result}
        setResult={setResult}
      />
      <Letras
        habilitaBtn={habilitaBtn}
        setHabilitaBtn={setHabilitaBtn}
        wordLetters={wordLetters}
        showWord={showWord}
        setShowWord={setShowWord}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}

export default App;