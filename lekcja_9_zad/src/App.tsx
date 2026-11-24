import { useState } from 'react'
import './App.css'

enum Races{
  race1 = "Race1", race2 = "Race2", race3 = "Race3", race5 = "Race4"
};
enum CharacterClasses{

}


interface PropsCharacter{
  characterName: String,
  race: Races,
  characterClass: CharacterClasses,
  level: Number,
  characterDescription: String,
  isPublicCharacter: Boolean
}
interface PropsCharacterForm{
  //FunctionSubmitForm: (event: React.SubmitEvent<HTMLFormElement>) => void;
}
function CharacterForm(props: PropsCharacterForm){
  const [CharacterFormData, setCharacterFormData] = useState<PropsCharacter>()
  let options_race = [];
  for(let current_race in Races){
    options_race.push(
      <option key={current_race} value={current_race}>{Races[current_race]}</option> //ignore the error here it works okay
    );
  }

  let options_class = [];
    for(let current_class in CharacterClasses){
    options_class.push(
      <option key={current_class} value={current_class}>{Races[current_class]}</option> //ignore the error here it works okay
    );
  }
  return (
    <form onSubmit={e=> props.FunctionSubmitForm(e)}>
      <label htmlFor=''>Character name</label>
      <input type='text'></input>

      <br></br>
      <label htmlFor='characterRaceSelect'>Character race</label>
      <select name='characterRaceSelect'>
        {
          options_race
        }
      </select>
      <br/>
      <label htmlFor='characterClassSelect'>Character class</label>
      <select name='characterClassSelect'>
        {
          options_class
        }
      </select>
    </form>
  )
}
function App() {
  const [Characters, setCharacters] = useState<PropsCharacter[]>();
  function HandleNewCharacter(event: React.SubmitEvent<HTMLFormElement>){
    event?.preventDefault();
  }
  return (
    <CharacterForm />
  )
}

export default App
