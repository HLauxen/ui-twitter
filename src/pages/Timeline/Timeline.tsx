import { FormEvent, KeyboardEvent,useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet';
import './Timeline.css';

export function TimeLine() {
    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
        'Meu primeiro tweet',
        'Teste',
        'Deu certo tweetar!'
        ])

    const createNewTweet = (event: FormEvent) => {
        event.preventDefault()
        
        setTweets([newTweet,...tweets])
        setNewTweet('')
    }

    const handleHotKeySubmit = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setTweets([newTweet,...tweets])
            setNewTweet('')
        }
    }
    
    return (
        <main className='timeline'>
            <Header title="Home" />



            <form onSubmit={createNewTweet} className='new-tweet-forme'>
                <label htmlFor="tweet">
                    <img src="https://github.com/HLauxen.png" alt="fotoPerfil" />
                    <textarea 
                    placeholder="What's happening?" 
                    id="tweet"
                    value={newTweet}
                    onKeyDown={handleHotKeySubmit}
                    onChange={(event) => {
                        setNewTweet(event.target.value);
                    }}
                    ></textarea>
                </label>

                <button type='submit'>Tweet</button>
            </form>

            <Separator />

            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}
        </main>
    );
}

