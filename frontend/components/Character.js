import React, { useState}  from 'react'

function Character( { character }) { 
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      {showHomeworld && (
        <p className="character-planet">Homeworld: {character.homeworld}</p>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
