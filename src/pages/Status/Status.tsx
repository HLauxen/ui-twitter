import { FormEvent, KeyboardEvent,useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet";
import './Status.css';
import { PaperPlaneRight } from "phosphor-react";


export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'concordo...',
        'Olha, faz sentido',
        'Parabens pelo progresso'
    ])

    const createNewAnswer = (event: FormEvent) => {
        event.preventDefault()
        
        setAnswers([newAnswer,...answers])
        setNewAnswer('')
    }
    
    const handleHotKeySubmit = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer,...answers])
            setNewAnswer('')
        }
    }

    return(
        <main className='status'>
            <Header title="Tweet" />
        
            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, obcaecati! Ipsum dignissimos iusto at ullam consequuntur alias aut deserunt unde debitis? Velit, voluptatum quam? Dicta eos quos nesciunt ratione maiores."/>

            <Separator />

            <form onSubmit={createNewAnswer} className='answer-tweet-forme'>
                <label htmlFor="tweet">
                    <img src="https://github.com/HLauxen.png" alt="fotoPerfil" />
                    <textarea
                    placeholder="Tweet your answer" 
                    id="tweet"
                    onKeyDown={handleHotKeySubmit}
                    value={newAnswer}
                    onChange={(event) => {
                        setNewAnswer(event.target.value);
                    }}
                    />
                </label>

                <button type='submit'>
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>
            </form>

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}
        </main>
    );
}