import { FormEvent, useState  } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [title, setTitle] = useState('')
  
  const [googleScholar, setGoogleScholar] = useState('')
  const [googleBooks, setGoogleBooks] = useState('')
  const [worldCat, setWorldCat] = useState('')
  const [openLibrary, setOpenLibrary] = useState('')
  const [doaj, setDoaj] = useState('')
  const [elsevier, setElsevier] = useState('')
  const [textTranslated, setTextTranslated] = useState('')

  const [textToSearch, setTextToSearch] = useState('')


  const [isLoading, setIsLoading] = useState(true)
  const [optionTranslation, setOptionTranslation] = useState(false)
  
  const translateText = async () => {


 }

 function getLinks(textToSearch: string) {
  
  setGoogleScholar('https://scholar.google.com/scholar?hl=pt-BR&as_sdt=0%2C5&q='.concat(textToSearch.replaceAll(' ','+')))
  setGoogleBooks('https://www.google.com/search?tbm=bks&q='.concat(textToSearch.replaceAll(' ','+')))
  setWorldCat('https://www.worldcat.org/pt/search?q='.concat(textToSearch.replaceAll(' ','+')))
  setOpenLibrary('https://openlibrary.org/search?q='.concat(textToSearch.replaceAll(' ','+')))
  setDoaj('https://www.doaj.org/search/articles?ref=homepage-box&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22'.concat(textToSearch.replaceAll(' ','%20')).concat('"%2C"default_operator"%3A"AND"%7D%7D%2C"track_total_hits"%3Atrue%7D'))
  setElsevier('https://www.elsevier.com/pt-br/search-results?query='.concat(textToSearch.replaceAll(' ','%20')))

  setIsLoading(false)
 }

  async function searchTitle(event: FormEvent){
    event.preventDefault()
    setIsLoading(true)
    let data = {
      q : title,
      source: 'pt',
      target: 'en'
    }
    setIsLoading(true)
    await axios.post(`https://libretranslate.de/translate`, data)
    .then((response) => {
        { optionTranslation ?  getLinks(title) : getLinks(response.data.translatedText) }
    })

    

  }

  return (
    <div >
      <div>
        
        <img src={reactLogo} className="logo" alt="React logo" />
        
      </div>
      <h1>What do you want to search?</h1>
      <div>
      <form onSubmit={searchTitle}>
          <div>
            <input 
              type="text"              
              required
              placeholder='Write your search here and press enter'
              onChange={event => setTitle(event.target.value)}
              value={title}
            />
          </div>
        </form>
        

          
      { !isLoading ?
       <div>
          <span>Tranlated: </span>{textTranslated}
          <a href={googleScholar} target="_blank">
            <h2>Google Scholar</h2>
          </a>
          <a href={googleBooks} target="_blank">
            <h2>Google Books</h2>
          </a>
            
          <a href={worldCat}target="_blank">
            <h2>World Cat</h2>
          </a>
          <a href={openLibrary}target="_blank">
            <h2>Open Library</h2>
          </a>
          <a href={doaj}target="_blank">
            <h2>Directory of Open Access Journals</h2>
          </a>
          <a href={elsevier}target="_blank">
            <h2>Elsevier</h2>
          </a>
        </div>
      : <></>
      
      }
      </div>
    </div>
  )
}

export default App
