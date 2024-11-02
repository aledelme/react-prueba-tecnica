import './style.css'
import { useCatFact, useCatImage } from "./hooks/hooks"

export default function App(){
    const { fact, refreshFact } = useCatFact()
    const { urlImage } = useCatImage({fact})

    return <main>
        <h1>Hola mundo de gatitos :3</h1>
        <button onClick={refreshFact}>Refresh</button>
        {fact && <p>{fact}</p>}
        <div>
            {urlImage && 
            <img 
                src={urlImage} 
                alt="Image from cat saying the first word from a random fact" 
            />
            }
        </div>
    </main> 
    
}