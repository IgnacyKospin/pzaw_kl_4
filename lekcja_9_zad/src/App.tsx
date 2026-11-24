import { useState, type ChangeEvent } from 'react'
import './App.css'

enum Races{
  race1 = "Race1", race2 = "Race2", race3 = "Race3", race5 = "Race4"
};
enum CharacterClasses{
  class1 = "Class1", class2 = "Class2"
}


interface PropsCharacter{
  characterName: string,
  characterRace: Races,
  characterClass: CharacterClasses,
  level: number,
  characterDescription: string,
  isPublicCharacter: boolean
}
interface PropsCharacterForm{
  AddNewCharacter: (character: PropsCharacter) => object|boolean; //Validates data and adds if succesful. returns error object or a bool
}
function CharacterForm(props: PropsCharacterForm){
  const [CharacterFormData, setCharacterFormData] = useState<PropsCharacter>();

  const [CharacterName, setCharacterName] = useState<string>("");
  const [CharacterRace, setCharacterRace] = useState<Races>();
  const [CharacterClass, setCharacterClass] = useState<CharacterClasses>();
  const [CharacterLevel, setCharacterLevel] = useState<number>(0);
  const [CharacterDescription, setCharacterDescription] = useState<string>("");
  const [CharacterPublic, setCharacterPublic] = useState<boolean>(false);

  const [Errors, setErrors] = useState<Object>({});
  function HandleNewCharacterSubmission(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    if(CharacterClass !== undefined && CharacterRace !== undefined){
      let res: Boolean|Object = props.AddNewCharacter({
        characterName: CharacterName,
        characterRace: CharacterRace,
        characterClass: CharacterClass,
        level: CharacterLevel,
        characterDescription: CharacterDescription,
        isPublicCharacter: CharacterPublic
      })

      if(res){
        console.log("all is right within the world");
      }
    }
  }
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
    <form onSubmit={HandleNewCharacterSubmission}>
      <label htmlFor=''>Character name</label>
      <input type='text' value={CharacterName} onChange={(event) => setCharacterName(event.currentTarget.value)}></input>

      <br/>
      <label htmlFor='characterRaceSelect'>Character race</label>
      <select name='characterRaceSelect' onChange={(event) => setCharacterRace(event.currentTarget.value)}>
        <option value={"wrong value"}>Select a race...</option>
        {
          options_race
        }
      </select>
      <br/>
      <label htmlFor='characterClassSelect'>Character class</label>
      <select name='characterClassSelect' onChange={(event) => setCharacterClass(event.currentTarget.value)}>
        <option value={"wrong value"}>Select a class...</option>
        {
          options_class
        }
      </select>
      <br/>
      <label htmlFor='characterLevelInput'>Character levle</label>
      <input name='characterLevelInput' type='number' value={CharacterLevel} min={1} max={100} step={1} onChange={(event) => setCharacterLevel(event.currentTarget.value)}></input>
      <br/>
      <label htmlFor='characterDescriptionInput'>Character description</label>
      <input name='characterDescriptionInput' type='text' value={CharacterDescription} onChange={(event) => setCharacterDescription(event.currentTarget.value)} minLength={0} maxLength={200}></input>
      <br/>
      <label htmlFor='publicCharacterCheck'>Is a public character?</label>
      <input type='checkbox' name='publicCharacterCheck' checked={CharacterPublic} onChange={(event) => setCharacterPublic(event.currentTarget.value)}></input>
      <br/>
      <input type='submit'></input>
    </form>
  )
}
function App() {
  const [Characters, setCharacters] = useState<PropsCharacter[]>([]);
  function HandleNewCharacter(new_character: PropsCharacter){
    /**Validation */
    const errs: Partial<Record<keyof PropsCharacter, string>> = {};
    if(!(new_character.characterName.length >= 3 && new_character.characterName.length <= 20)){
      errs.characterName = "Name must be between 3 and 20 characters."
    }
    if(!Object.keys(Races).includes(new_character.characterRace)){
      errs.characterRace = "Must select a correct race";
    }
    if(!Object.keys(CharacterClasses).includes(new_character.characterClass)){
      errs.characterClass = "Must select a correct class";
    }
    if(!Number.isInteger(new_character.level) || !(new_character.level >= 1 && new_character.level <= 100)){
      errs.level = "Level must be between 1 and 100, and be an integer.";
    }
    if(!(new_character.characterDescription.length >= 0 && new_character.characterDescription.length <= 200)){
      errs.characterDescription = "Character length must be not longer than 200 characters."
    }

    if(Object.keys(errs).length == 0){
      let chars = [...Characters, new_character];
      setCharacters(chars);
      return true;
    }
    else{
      return errs;
    }
  }
  return (
    <CharacterForm />
  )
}

export default App
