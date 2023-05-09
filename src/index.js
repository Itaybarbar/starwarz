import React from 'react';
import ReactDOM from 'react-dom/client';
import CharToggler from './CharToggler';
import './index.css'

const App = () => {

  

    return (
        <div className='fader'>
            <CharToggler/>
        </div>
    );
    
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);