import './App.css';
import { useState } from "react";
import React from 'react';

const responses = [
  "But I'm your only girlfriend! 💔",
  "Nope, try again",
  "Wow, you thought you could say no?! 💔",
  "I think you meant yes",
  "I only put no on the form so you would feel like you had a choice, but you choose wrong",
  "Is no spanish for yes? 💔",
  "I think you got confused",
  "You need to get your eyes checked out, this says 'NO', go more to the left.",
  "Nah",
  "Can't get rid of me that easily",
  "I knew you would be curious and check it out!",
  "WOW now we just pressing any button huh",
  "Just cause it's an option doesn't mean it's right",
  "Nope",
  "Guess I'll return your gifts then 💔",
  "And to think I was gonna give you so much explicit time on Valentine's day, WOW",
  "I'll be extra nice tho!",
  "Pretty please say yes 💔",
  "You thought you could say no 😂",
  "No more butt grabs for you",
  "I think your finger slipped",
  "Did you think something was gonna happen? 😂 Come on, pick the right choice",
  "Now why would you press no? ....suspicious"
];

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const openAlert = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setAlertMessage(responses[randomIndex]);
    setShowAlert(true);
  };

  const closeModal = () => {
    setShowAlert(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img className='love'src='love.jpg' />
        {showAlert && (
        <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeModal}>×</button>
        <div className='alert'>
          {alertMessage}
        </div>
        </div>
        </div>
      )}

        {showCode && <p>Yay! I love you! 🎉 Here is your special code: ILoveGaby <p>
          </p>Remember it because ou will use it on Valentine's Day!</p>}
        <h1>
          Will you be my Valentine?
        </h1>
        <div className='buttons'>
          <button className='yes'onClick={() => setShowCode(true)}><img src="heart.png" alt='yes heart'/> <span className="button-text">Yes</span></button>
          <button className='no' onClick={openAlert}><img src="pink.png" alt='yes heart'/> <span className="button-text">No</span></button>
        </div>
      </header>
    </div>
  );
}

export default App;
