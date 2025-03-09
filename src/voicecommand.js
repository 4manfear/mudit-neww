import React from 'react';
import './voicecommanddesigne.css';

function VoiceCommanding() {
    return (
        <section className="project_info">
            <h1 className="project-title">Voicecommand</h1>

            <div className="project_starter_info">
                <h3>Role: Developer</h3>
                <h3>Solo Project</h3>
            </div>

            <div className="small_information">
                <h4>Overview</h4>
                <p>
                    The voice command mechanic allows players to
                    interact with the game environment and NPCs through
                    spoken commands. This mechanic enhances gameplay
                    immersion and provides a unique interaction layer,
                    enabling players to control their character and perform
                    specific actions using their voice.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                    <li>• Voice Recognition ⇾ Utilizes the KeywordRecognizer class to identify specific spoken phrases.<li>Supports multiple voice commands that trigger various in-game actions, such as greetings, animations, and item usage.</li> </li>
                    <li>• Dynamic Interaction ⇾ Players can issue commands like "dance," "take out knife," and "go to the enemy," allowing for a fluid and interactive gameplay experience.<li>The character responds in real-time, performing actions based on the recognized voice commands.</li></li>
                    <li>• Layer-Based Placement ⇾  Objects can only be placed on valid surfaces, filtered by a layer mask, ensuring logical positioning.</li>
                    <li>• Animation Integration ⇾  The mechanic is closely tied to the character’s animation system, enabling the character to perform contextual animations in response to voice commands.<li>For instance, saying "dance" triggers a dance animation, while "kill" initiates a knife attack sequence.</li></li>
                    <li>• Targeting System ⇾  The mechanic includes a targeting system that enables the character to move towards the nearest enemy when commanded.<li>A NavMeshAgent is employed to navigate the character seamlessly towards the target, ensuring a smooth approach to combat.</li></li>
                    <li>• Kill Point Identification ⇾ The mechanic can identify the closest designated kill point, allowing for contextual actions such as executing an enemy.<li>The TwoBoneIKConstraint adjusts the character’s arm positioning towards the kill point, enhancing realism during kill animations.</li></li>
                    <li>• User Feedback ⇾ Debug logs are integrated to provide feedback during development, ensuring clarity in recognized commands and their corresponding actions.</li>
                    <li>• Technical Implementation ⇾ The mechanic is developed using Unity with C# scripting. <li>It leverages Unity's built-in NavMeshAgent for navigation and Animator for character animations.<li>Keywords are stored in a dictionary for easy management and extensibility of voice commands.</li></li></li>
                </ul>
            </div>
            {/* Video Section */}
            <h4>Gameplay Demonstration</h4>
            <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
             
                <iframe
                    className="video_frame"
                    src="https://player.vimeo.com/video/1063041799?h=57e950ca5b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Voice Command"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                ></iframe>
            </div>


        </section>
    );
}
export default VoiceCommanding;