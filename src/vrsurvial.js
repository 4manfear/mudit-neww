import React from 'react';
import './voicecommanddesigne.css';

function VrSurvivalmecha() {
    return (
        <section className="project_info">
            <h1 className="project-title">Vr survival game mechanic</h1>

            <div className="project_starter_info">
                <h3>Role: Developer</h3>
                <h3>Solo Project</h3>
            </div>

            <div className="small_information">
                <h4>Overview</h4>
                <p>
                This project showcases a fully custom-built VR interaction system, 
                developed entirely from scratch instead of relying on Unity’s 
                built-in grab functions. By designing a modular and highly adaptable 
                system, I ensured seamless and immersive object interactions, setting 
                a new standard for VR gameplay. Expanding on this foundation, I am 
                integrating a mini Minecraft-style mechanic, allowing players to break 
                rocks and gather resources like coal—perfect for any VR survival game.
                </p>
            </div>

            <div className="detail_information">
                <h4>Key Features</h4>
                <ul>
                    <li>• Custom VR Grabbing System ⇾ Utilizes the KeywordRecognizer class to identify specific spoken phrases. </li>
                    <li>• Modular Design ⇾ Easily adaptable to different VR projects, offering flexibility for various gameplay mechanics. </li>
                    <li>• Minecraft-Style Resource Gathering ⇾ A destructible environment where players break rocks to collect resources like coal. </li>
                    <li>• Enhanced Immersion & Realism ⇾ Intuitive interactions, physics-based object handling, and optimized performance for a seamless VR experience. </li>
                    <li>• Meta Quest 2 Integration ⇾ Utilizing the New Input System for precise motion tracking and natural gameplay interactions. </li>
                </ul>
            </div>
            {/* Video Section */}
            <h4>Gameplay Demonstration</h4>
            <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
               
                <iframe
                    className="video_frame"
                    src="https://player.vimeo.com/video/1063041825?h=cfb0a3a0df&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="VR Prototype"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                ></iframe>
            </div>


        </section>
    );
}
export default VrSurvivalmecha;