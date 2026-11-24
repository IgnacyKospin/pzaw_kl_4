import { useState } from 'react'
import './App.css'

enum Races{
  race1 = "Race1", race2 = "Race2", race3 = "Race3", race = "Race4"
};
enum CharacterClasses{

}
interface PropsCharacterForm{
  FunctionSubmitForm: () => void;
}
function CharacterForm(props: PropsCharacterForm){
  const [CharacterFormData, setCharacterFormData] = useState({
    characterName: String,
    race: Races,
    characterClass: CharacterClasses,
    level: Number,
    characterDescription: String,
    publicCharacter: Boolean
  })

}
function App() {
  return (
    
  )
}

export default App
