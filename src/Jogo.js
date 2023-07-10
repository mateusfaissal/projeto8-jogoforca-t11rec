import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

function endGame(setHabilitaBtn, res, setResult, wordLetters, setShowWord) {
    if (res === 1) {
        setHabilitaBtn(true);
        setResult('red');
        setShowWord(wordLetters);
    } else {
        setHabilitaBtn(true);
        setResult('green');
        setShowWord(wordLetters);
    }
}

function imageForca(errors, setHabilitaBtn, setResult, wordLetters, setShowWord) {
    if (errors === 0) {
        return forca0
    }
    else if (errors === 1) {
        return forca1
    }
    else if (errors === 2) {
        return forca2
    }
    else if (errors === 3) {
        return forca3
    }
    else if (errors === 4) {
        return forca4
    }
    else if (errors === 5) {
        return forca5
    }
    else {
        endGame(setHabilitaBtn, 1, setResult, wordLetters, setShowWord);
        return forca6
    }
}

function Word(props) {
    return (
        <div>
            <p className={props.result}>{props.caracter} </p>
        </div>
    );
}

function chooseWord(palavras, setWord, setWordLetters, setShowWord) {
    let choosenWord = palavras[Math.floor(Math.random() * palavras.length)];
    let caracters = choosenWord.split('');
    setWord(choosenWord);
    setWordLetters(caracters);

    let underline = [];
    caracters.forEach(() => underline.push('_'));
    let spacedUnderlines = underline.map((underline, index) => (
        <span key={index}>
            {underline}
            {index < underline.length - 1 && ' '}
        </span>
    ));

    setShowWord(spacedUnderlines);

}

function Jogo(props) {
    const { showWord, setHabilitaBtn, setErrors, errors, setWordLetters, setShowWord, result, setResult, wordLetters } = props;
    if (JSON.stringify(showWord) === JSON.stringify(wordLetters)) {
        endGame(setHabilitaBtn, 0, setResult, wordLetters, setShowWord);
    }
    return (
        <div className='container-game'>
            <h1 className='titulo'>FORCA!</h1>
            <div className='main'>
                <img data-test="game-image" src={imageForca(errors, setHabilitaBtn, setResult, wordLetters, setShowWord)} />
                <div>
                    <button data-test="choose-word" onClick={() => {
                        chooseWord(props.palavras, props.setWord, setWordLetters, setShowWord);
                        props.setHabilitaBtn(false);
                        setErrors(0);
                        setResult('');
                    }
                    }>
                        <p> Escolher palavra </p> </button>
                    <div data-test="word" className='word'>
                        {showWord.map((caracter, index) => (
                            <div key={index}>
                                <Word caracter={caracter} result={result} />
                                {index < showWord.length - 1 && ' '}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Jogo;