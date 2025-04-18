import React from 'react';
import './modulerbuildpaged.css';

function PopduleGame() {
    return (
        <section className="project_info">
            <h1 className="project-title">Pop Duel</h1>

            <div className="project_starter_info">
                <h3>Role: Developer</h3>
                <h3>Team Project (Game Jam)</h3>
            </div>

            <div className="small_information">
                <h4>Overview</h4>
                <p>
                Pop Duel is a fast-paced local multiplayer game developed during a game jam on the theme “Bubble.” 
                    Designed for 2 to 4 players, the game offers exciting arena battles using four unique bullet types—each with strategic impact. 
                    Players compete across two dynamic levels, making for chaotic and engaging matches.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                <li>• Local Multiplayer ⇾ Supports 2 to 4 players in the same session for competitive fun.</li>
                    <li>• Four Bullet Types ⇾ Includes Normal, Stun, Ice, and Rocket bullets with unique effects and gameplay strategies.</li>
                    <li>• Stun Mechanic ⇾ Getting hit by a stun bullet causes self-damage if the player tries to shoot.</li>
                    <li>• Freeze Mechanic ⇾ Ice bullets restrict movement and shooting temporarily.</li>
                    <li>• Area Damage ⇾ Rocket bullets deal splash damage to multiple players within a blast radius.</li>
                    <li>• Two Unique Arenas ⇾ Each level offers different layouts that influence player strategy.</li>
                </ul>
            </div>
            {/* Video Section */}
            <h4>Gameplay Demonstration</h4>
            <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
                
                <iframe
                    className="video_frame"
                    src="https://www.youtube.com/embed/lJLVjgqbQDA"
                    title="Moduler Build"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    
                ></iframe>
            </div>


        </section>
    );
}

export default PopduleGame;
