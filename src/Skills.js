// import React from 'react'
// import "./App.css"

// function Skills() {
//   return (
//     <div>
//        <section className="hero container">
//                             <div className="hero-bluetext">
//                                 <h1><small>Hi I'am</small>
//                                     Mudit Mamodia
//                                 </h1>
//                                 <p>
//                                     I am a passionate game developer from Rajasthan, India,
//                                     with expertise in Unity (C#) and experience with Unreal
//                                     Engine (C++). Specializing in creating immersive gaming
//                                     experiences, Mudit focuses on game mechanics, player
//                                     interaction, and system design. With a strong
//                                     foundation in both game development and programming,
//                                     I am dedicated to creating engaging and innovative
//                                     experiences for players.
//                                 </p>
//                                 <div className="call-to-action">

//                                 </div>
//                                 <div className="social-link">
//                                     <a href="#">
//                                         <img src="./imgs/Github.png" alt="Github" width="48px" />
//                                     </a>
//                                     <a href="https://www.linkedin.com/in/mudit-mamodia-996565249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                                         <img src="./imgs/linkedin.png" alt="Linkedin" width="48px" />
//                                     </a>

//                                 </div>
//                             </div>
//                             <div className="hero-yellow">
//                                 <img src="./imgs/icon_of_web.jpg" alt="Mudit Mamodia" width="100%" />
//                             </div>
//                         </section>
//     </div>
//   )
// }

// export default Skills
// import React from 'react'
// import "./App.css"

// function Skills() {
//   return (
//     <div className='skills-container'>
//       <section id="Skills" className="skills containers">
//                             <h2>
//                                 <small>About Me</small>
//                                 & My Skills
//                             </h2>
//                             <div className="holder-blue">
//                                 <div className="left-column">
//                                     <h3>codeing languages</h3>
//                                     <ul>
//                                         <li>c#</li>
//                                         <li>c++</li>
//                                     </ul>
//                                     <h3>Engine</h3>
//                                     <ul>
//                                         <li>Unity</li>
//                                         <li>Unreal</li>
//                                     </ul>
//                                     <h3>Software</h3>
//                                     <ul>
//                                         <li>Maya</li>
//                                         <li>ZBrush</li>
//                                         <li>Substance Painter</li>
//                                     </ul>
//                                 </div>
//                                 <div className="right-column">
//                                     <h3>A bit about me</h3>
//                                     <p>
//                                         I am a passionate game developer specializing in Unity (C#) with a strong
//                                         foundation in creating engaging gameplay mechanics and immersive experiences.
//                                         While Unity is my forte, I also have experience working with Unreal Engine (C++)
//                                         and a deep understanding of 3D asset creation tools like Maya, Substance Painter,
//                                         and ZBrush. My skills include texturing, sculpting, and basic human rigging in
//                                         Maya, making me well-rounded in both programming and 3D art. I am dedicated to
//                                         crafting innovative and polished games that captivate players.
//                                     </p>
//                                 </div>
//                             </div>
//                         </section>
//     </div>
//   )
// }

// export default Skills




import React from 'react';
import "./skilss.css";

function Skills() {
  return (
    <div className="skills">
      <h2>About Me & My Skills</h2>
      <div className="skills-content">
        <div className="skills-info">
          <div className="skill-group">
            <h3>Coding Languages</h3>
            <ul>
              <li>C#</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Engines</h3>
            <ul>
              <li>Unity</li>
              <li>Unreal</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Software</h3>
            <ul>
              <li>Maya</li>
              <li>ZBrush</li>
              <li>Substance Painter</li>
            </ul>
          </div>
        </div>
        <div className="about-me">
          <h3>A Bit About Me</h3>
          <p>
          I am a passionate game developer specializing in Unity (C#) 
          with a strong foundation in creating engaging gameplay mechanics 
          and immersive experiences. I also have experience with Unreal Engine 
          (C++) and a deep understanding of 3D asset creation tools like Maya, 
          Substance Painter, and ZBrush. My skills include texturing, sculpting, 
          and basic human rigging in Maya, making me well-rounded in both programming and 
          3D art. Additionally, I specialize in developing dynamic AI for NPCs and enemies, 
          allowing for intelligent, adaptive behaviors that enhance gameplay experiences. 
          I am dedicated to crafting innovative and polished games that captivate players.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
