import React from 'react';
import './modulerbuildpaged.css';

function ReGein_game()
{
    return(
         <section className="project_info">
            <h1 className="project-title">ReGen</h1>

            <div className="project_starter_info">
                <h3>Role: Developer</h3>
                <h3>Team Project (BYOG Game Jam – 3 Developers)</h3>
            </div>

            <div className="small_information">
                <h4>Overview</h4>
                <p>
                    ReGein is a BYOG (Bring Your Own Game) Game Jam project developed by a team of three developers. 
                    The game is a wave-based survival experience where the player takes on the role of a scientist 
                    attempting to create a superhuman.
                    <br /><br />
                    Players begin by selecting any three items, and this choice directly affects the player’s 
                    evolution, abilities, and overall stats. After the evolution phase, the player must survive 
                    continuous waves of soldiers. How long the player survives depends entirely on their item 
                    selection, strategy, and skill.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                    <li>• BYOG Game Jam Project ⇾ Developed under time constraints by a team of three developers.</li>
                    <li>• Scientist-Themed Gameplay ⇾ Player acts as a scientist creating a superhuman.</li>
                    <li>• Item-Based Evolution System ⇾ Choosing any three items determines evolution and abilities.</li>
                    <li>• Dynamic Player Stats ⇾ Stats such as health, damage, and speed change based on evolution.</li>
                    <li>• Wave-Based Survival ⇾ Increasing waves of soldiers challenge the player’s build.</li>
                    <li>• Skill-Driven Progression ⇾ Survival time depends entirely on player decisions.</li>
                    <li>• Cinematic Sequences ⇾ Story-driven cinematics to enhance immersion.</li>
                    <li>• Item Collection System ⇾ Collectible items directly influence gameplay progression.</li>
                    <li>• Level Design ⇾ Designed combat arenas supporting survival gameplay.</li>
                </ul>
            </div>

            <div className="detail_information">
                <h4>My Responsibilities</h4>
                <ul>
                    <li>• Scene Data Management ⇾ Implemented data transfer between scenes for player stats and evolution.</li>
                    <li>• Cinematics ⇾ Designed and implemented in-game cinematic sequences.</li>
                    <li>• Item Collection ⇾ Worked on item pickup and integration with the evolution system.</li>
                    <li>• Level Design ⇾ Designed gameplay levels to support wave-based combat.</li>
                </ul>
            </div>

            {/* Video Section */}
            <h4>Gameplay Demonstration</h4>
            <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
                
                <iframe
                    className="video_frame"
                    src="https://www.youtube.com/embed/FrWlbsMmxNY"
                    title="ReGein"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    
                ></iframe>
            </div>


        </section>
    );
}

export default ReGein_game;