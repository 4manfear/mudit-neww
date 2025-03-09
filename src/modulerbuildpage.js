import React from 'react';
import './modulerbuildpaged.css';

function ModulerBuildPage() {
    return (
        <section className="project_info">
            <h1 className="project-title">Modular Build</h1>

            <div className="project_starter_info">
                <h3>Role: Developer</h3>
                <h3>Solo Project</h3>
            </div>

            <div className="small_information">
                <h4>Overview</h4>
                <p>
                    This mechanic allows players to dynamically place various objects (e.g., cubes) in the game world using real-time previews.
                    The system lets players select prefabs, preview positions, and place them on valid surfaces.
                    A key feature is that placed objects align and rotate based on the player's forward direction, ensuring intuitive placement.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                    <li>• Object Selection ⇾ Choose from multiple buildable objects using hotkeys, with real-time preview feedback. </li>
                    <li>• Dynamic Preview System ⇾ A preview of the selected object is displayed at the intended location, allowing precise placement.</li>
                    <li>• Layer-Based Placement ⇾  Objects can only be placed on valid surfaces, filtered by a layer mask, ensuring logical positioning.</li>
                    <li>• Player-Oriented Rotation ⇾  Objects automatically align and rotate to match the player's direction for seamless placement.</li>
                    <li>• Customizable Placement Offset ⇾  Adjustable vertical offset ensures natural placement on different terrain heights.</li>
                </ul>
            </div>
            {/* Video Section */}
            <h4>Gameplay Demonstration</h4>
            <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
                
                <iframe
                    className="video_frame"
                    src="https://player.vimeo.com/video/1063041753?h=3bef2ff4ec&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
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

export default ModulerBuildPage;
