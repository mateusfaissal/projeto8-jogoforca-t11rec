function checkLetter(choosenLetters, letter, wordLetters, showWord, setShowWord, errors, setErrors) {
    let i = 0;
    wordLetters.forEach(l => {
        if (l === letter) {
            showWord[i] = letter
        } i++
    });
    setShowWord([...showWord]);
    choosenLetters.push(letter);
    if (!wordLetters.includes(letter)) {
        setErrors(errors + 1);
    }
}

function Letter(props) {
    return (
        <div>
            <button data-test="letter" onClick={(e) => {
                checkLetter(
                    props.choosenLetters,
                    props.letter,
                    props.wordLetters,
                    props.showWord,
                    props.setShowWord,
                    props.errors,
                    props.setErrors
                )

                e.target.disabled = true;
                e.target.className = 'button desabilitada';
            }
            }
                disabled={props.habilitaBtn}
                className={`${props.habilitaBtn ? 'button desabilitada' : 'button habilitada'}`}>{props.letter.toUpperCase()}</button>
        </div>
    );
}

function Letras(props) {
    let { wordLetters, showWord, setShowWord, errors, setErrors } = props;
    let choosenLetters = [];
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <section className='letters'>
            {alfabeto.map(letter => <Letter
                choosenLetters={choosenLetters}
                wordLetters={wordLetters}
                letter={letter}
                habilitaBtn={props.habilitaBtn}
                showWord={showWord}
                setShowWord={setShowWord}
                errors={errors}
                setErrors={setErrors}
            />
            )}
        </section>
    )
}

export default Letras;




