import React from 'react';
import './voicecommanddesigne.css';

function FlappyGhokuGame() {
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
                An exciting twist on the classic Flappy Bird formula, 
                Flappy Ghoku challenges players with fast-paced gameplay
                 and intense power ball obstacles. Simple to pick up, 
                 but hard to master, this game keeps players hooked as 
                 they strive to beat their high scores. A fun and 
                 engaging solo project that blends classical mechanics
                  with new challenges.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                    <li>Flappy Ghoku is a Flappy Bird-inspired game where the player evades power balls to achieve a new high score. As the solo developer, I was responsible for the entire game development process. </li>
                    {/* <li>• Dynamic Interaction ⇾ Players can issue commands like "dance," "take out knife," and "go to the enemy," allowing for a fluid and interactive gameplay experience.<li>The character responds in real-time, performing actions based on the recognized voice commands.</li></li>
                    <li>• Layer-Based Placement ⇾  Objects can only be placed on valid surfaces, filtered by a layer mask, ensuring logical positioning.</li>
                    <li>• Animation Integration ⇾  The mechanic is closely tied to the character’s animation system, enabling the character to perform contextual animations in response to voice commands.<li>For instance, saying "dance" triggers a dance animation, while "kill" initiates a knife attack sequence.</li></li>
                    <li>• Targeting System ⇾  The mechanic includes a targeting system that enables the character to move towards the nearest enemy when commanded.<li>A NavMeshAgent is employed to navigate the character seamlessly towards the target, ensuring a smooth approach to combat.</li></li>
                    <li>• Kill Point Identification ⇾ The mechanic can identify the closest designated kill point, allowing for contextual actions such as executing an enemy.<li>The TwoBoneIKConstraint adjusts the character’s arm positioning towards the kill point, enhancing realism during kill animations.</li></li>
                    <li>• User Feedback ⇾ Debug logs are integrated to provide feedback during development, ensuring clarity in recognized commands and their corresponding actions.</li>
                    <li>• Technical Implementation ⇾ The mechanic is developed using Unity with C# scripting. <li>It leverages Unity's built-in NavMeshAgent for navigation and Animator for character animations.<li>Keywords are stored in a dictionary for easy management and extensibility of voice commands.</li></li></li> */}
                </ul>
            </div>
            {/* Video Section */}
            <div className="video_container">
                <h4>Gameplay Demonstration</h4>
                <iframe
                    className="video_frame"
                    src="https://res.cloudinary.com/dcf8ydyvs/video/upload/v1741236003/x9uap0ztsm3s3spjbeep.mp4"
                    title="Moduler Build"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>


        </section>
    );
}
export default FlappyGhokuGame;