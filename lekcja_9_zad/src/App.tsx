import { useState, type ChangeEvent } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
/**
 * runs validation on the provided character. returns ture if passed, returns object with errors if not.
 */
function validateCharacter(new_character: PropsCharacter){
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
    if(isNaN(Number(new_character.level))|| !(new_character.level >= 1 && new_character.level <= 100)){
      errs.level = "Level must be between 1 and 100, and be an integer.";
    }
    if(!(new_character.characterDescription.length >= 0 && new_character.characterDescription.length <= 200)){
      errs.characterDescription = "Character length must be not longer than 200 characters."
    }
  if(Object.keys(errs).length == 0){
    return true;
  }
  return errs;
}
interface PropsCharacterForm{
  AddNewCharacter: (character: PropsCharacter) => object|boolean; //Validates data and adds if succesful. returns error object or a bool
}
function CharacterForm(props: PropsCharacterForm){
  const [CharacterFormData, setCharacterFormData] = useState<PropsCharacter>();

  const [CharacterName, setCharacterName] = useState<string>("");
  const [CharacterRace, setCharacterRace] = useState<Races|false>(false);
  const [CharacterClass, setCharacterClass] = useState<CharacterClasses|false>(false);
  const [CharacterLevel, setCharacterLevel] = useState<number>(0);
  const [CharacterDescription, setCharacterDescription] = useState<string>("");
  const [CharacterPublic, setCharacterPublic] = useState<boolean>(false);

  const [Errors, setErrors] = useState<Object>({});
  function SweepForm(){
    setCharacterName("");
    setCharacterRace(false);
    setCharacterClass(false);
    setCharacterLevel(0);
    setCharacterDescription("");
    setCharacterPublic(false);
  }
  function HandleNewCharacterSubmission(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    setErrors({});
    if(CharacterClass !== false && CharacterRace !== false){
      let res: Boolean|Object = props.AddNewCharacter({
        characterName: CharacterName,
        characterRace: CharacterRace,
        characterClass: CharacterClass,
        level: CharacterLevel,
        characterDescription: CharacterDescription,
        isPublicCharacter: CharacterPublic
      })
      if(typeof res === 'object'){
        console.log("all is not right within the world");
        setErrors(res);
        console.log(res);
      }
    }
    else{
      let errs_temp = {};
      if(CharacterClass === undefined){
        errs_temp = { characterClass: "Set a class before you can submit."};
      }
      if(CharacterRace === undefined){
        errs_temp = {...errs_temp, characterRace: "Set a race before you can submit."};
      }
      setErrors(errs_temp);
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
      <option key={current_class} value={current_class}>{CharacterClasses[current_class]}</option> //ignore the error here it works okay
    );
  }
  return (
    <form onSubmit={HandleNewCharacterSubmission}>
      <label htmlFor=''>Character name</label>
      <input type='text' value={CharacterName} onChange={(event) => setCharacterName(event.currentTarget.value)}></input>
      {Errors.hasOwnProperty('characterName') && (<><br/><span style={{color: 'red'}}>{Errors['characterName']}</span></>)}
      <br/>
      <label htmlFor='characterRaceSelect'>Character race</label>
      <select name='characterRaceSelect' value={CharacterRace} onChange={(event) => setCharacterRace(event.currentTarget.value)}>
        <option value={"false"}>Select a race...</option>
        {
          options_race
        }
      </select>
      {Errors.hasOwnProperty('characterRace') && (<><br/><span style={{color: 'red'}}>{Errors['characterRace']}</span></>)}
      <br/>
      <label htmlFor='characterClassSelect'>Character class</label>
      <select name='characterClassSelect' value={CharacterClass} onChange={(event) => setCharacterClass(event.currentTarget.value)}>
        <option value={"false"}>Select a class...</option>
        {
          options_class
        }
      </select>
      {Errors.hasOwnProperty('characterClass') && (<><br/><span style={{color: 'red'}}>{Errors['characterClass']}</span></>)}
      <br/>
      <label htmlFor='characterLevelInput'>Character levle</label>
      <input name='characterLevelInput' type='number' value={CharacterLevel} min={1} max={100} step={1} onChange={(event) => setCharacterLevel(event.currentTarget.value)}></input>
      {Errors.hasOwnProperty('characterLevel') && (<><br/><span style={{color: 'red'}}>{Errors['characterLevel']}</span></>)}
      <br/>
      <label htmlFor='characterDescriptionInput'>Character description</label>
      <input name='characterDescriptionInput' type='text' value={CharacterDescription} onChange={(event) => setCharacterDescription(event.currentTarget.value)} minLength={0} maxLength={200}></input>
      {Errors.hasOwnProperty('characterDescription') && (<><br/><span style={{color: 'red'}}>{Errors['characterDescription']}</span></>)}
      <small>{CharacterDescription.length}/200</small>
      <br/>
      <label htmlFor='publicCharacterCheck'>Is a public character?</label>
      <input type='checkbox' name='publicCharacterCheck' checked={CharacterPublic} onChange={(event) => setCharacterPublic(event.currentTarget.value)}></input>
      <br/>
      <button type='button' onClick={SweepForm}>Reset</button>
      <input type='submit'></input>
    </form>
  )
}
interface PropsCharacterDisplay{
  characterList: PropsCharacter[];
}
function CharactersDisplay(props: PropsCharacterDisplay){
  return (
    <section>
      {props.characterList.map(char => (
        <div>
          <h1>{char.characterName}</h1>
          <h3>Class: {char.characterClass}</h3>
          <h3>Race: {char.characterRace}</h3>
          <p>Level: {char.level}</p>
          {char.characterDescription && <small>{char.characterDescription}</small>}
          {char.isPublicCharacter && <p>Public character</p>}
          {!char.isPublicCharacter && <p>Private Character</p>}
        </div>
      ))}
    </section>
  );
}
function App() {
  const [Characters, setCharacters] = useState<PropsCharacter[]>([]);
  function HandleNewCharacter(new_character: PropsCharacter){
    console.log("Handling new");
    const res = validateCharacter(new_character);
    if(res === true){
      let chars = [...Characters, new_character];
      setCharacters(chars);
      return true;
    }
    else{
      return res;
    }
  }
  return (
    <>
      <CharacterForm AddNewCharacter={HandleNewCharacter}/> 
      <CharactersDisplay characterList={Characters} />
    </>
  )
}

export default App
