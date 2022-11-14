import { FormEvent, useState  } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [title, setTitle] = useState('')
  const [urlRarbg, setUrlRarbg] = useState('')
  const [urlComando, setUrlComando] = useState('')
  const [optionResolution, setOptionResolution] = useState(false)
  const [resolution, setResolution] = useState('2160')


  function searchTitle(event: FormEvent){
    event.preventDefault()
    {optionResolution ?       
      setUrlRarbg('https://www.proxyrarbg.org/torrents.php?search='.concat(title.replaceAll(' ','+')).concat(`+${resolution}`))
      : 
      setUrlRarbg('https://www.proxyrarbg.org/torrents.php?search='.concat(title.replaceAll(' ','+')).concat('+1080'))
    }
    
    {optionResolution ?       
      setUrlComando('https://comandotorrents.to/?s='.concat(title.replaceAll(' ','+')).concat(`+${resolution}`))
      : 
      setUrlComando('https://comandotorrents.to/?s='.concat(title.replaceAll(' ','+')).concat('+1080'))
    }
  }

  return (
    <div >
      <div>
        
        <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>
      <h1>O que você quer assistir hoje?</h1>
      <div>
      <form onSubmit={searchTitle}>
          <div>
            <input 
              type="text" 
              
              required
              placeholder='Qual título você procura?'
              onChange={event => setTitle(event.target.value)}
              value={title}
            />
            {/* <button type='submit'>
              Pesquisar
            </button> */}
          </div>
        </form>
        
      <a href={urlRarbg}>
        <h2>RarBG</h2>
        <text>{urlRarbg}</text>
      </a>
        
      <a href={urlComando}>
        <h2>Comando Torrent</h2>
        <text>{urlComando}</text>
      </a>
      </div>
    </div>
  )
}

export default App
