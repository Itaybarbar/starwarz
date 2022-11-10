import React, {useEffect, useState} from 'react';
import CommentDetail from './CommentDetail';
import './CharToggler.css'

const CharToggler = () => {
  
  

  const [people, setPeople] = useState([{}])
  const [selected, setSelected] = useState(0)

  useEffect(() =>{
    fetch("https://swapi.py4e.com/api/people/")
    .then(response => response.json())
    .then(data => {
      let info = data.results
      setPeople(info)
    })

    
  },[])

  const setIndex = () => {
    const currentIndex = document.getElementById("charSelector")
    setSelected(currentIndex.value)
  }
  

    return ( 
        
        
        <div>
          {people.length > 1?
          <div>
            <div className='selection'>
              <label>CHOOSE CHARACTER</label>
              <select id='charSelector' onChange={setIndex}>
                  {people.map((x, index) => <option key={index} value={index}>{x.name}</option>)}
              </select>
            </div>
            <CommentDetail
                name={people[selected].name}
                height={people[selected].height}
                weight={people[selected].mass}
                hair={people[selected].hair_color}
                skin={people[selected].skin_color}
                eyes={people[selected].eye_color}
                year={people[selected].birth_year}
                gender={people[selected].gender}
            /></div>: null}

        </div>
     );
}
 
export default CharToggler;