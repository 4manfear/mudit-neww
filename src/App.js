import {  Routes, Route, Link } from 'react-router-dom';


import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ModulerBuildPage from './modulerbuildpage';import "./mycss.css"
import VoiceCommanding from './voicecommand';
import FlappyGhokuGame from './flappyghokugame';
import VrSurvivalmecha from './vrsurvial';
import Choiceofdeckgame from './choiceofdeckgame';
import './app2.css';

function App() {


  

  return (
   
      <div className="App">
   

   <div className='navbarr'>
    <div className='side-logo'>
          <h3 className='mudit-logo'>MM</h3>
          <h3 className='logo-t'>Mudit Mamodia portfolio</h3>
    </div>
<div className='linkss'>

          <Link className='link' to="/">Home</Link>
          <Link className='link'  to='/skills'>Skills</Link>
          <Link className='link'  to="/projects">Projects</Link>
          <Link className='link'  to="/contact">Contact</Link>
          
          </div>
   </div>
            
        
        
         
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/modulerbuildpage" element={<ModulerBuildPage />} />
            <Route path="/voicecommand" element={<VoiceCommanding />} />
            <Route path="/vrsurvial" element={<VrSurvivalmecha />} />
            <Route path="/flappyghokugame" element={<FlappyGhokuGame />} />
            <Route path="/choiceofdeckgame" element={<Choiceofdeckgame />} />
          </Routes>
    
      </div>
   
  );
}

export default App;