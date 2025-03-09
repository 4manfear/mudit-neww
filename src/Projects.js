import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import "./Project.css";
import ModulerBuildPage from './modulerbuildpage';
import VoiceCommanding from './voicecommand';
import FlappyGhokuGame from './flappyghokugame';
import VrSurvivalmecha from './vrsurvial';
import Choiceofdeckgame from './choiceofdeckgame';

function Projects() {
  return (
    <div className="projects">
      <h2>
        <span>My</span> Projects
      </h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1063041753?h=3bef2ff4ec&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Moduler Build"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <a
            className="project-link"
            href="https://github.com/4manfear/Moduler_build.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
          <h4>Role - Developer</h4>
          <p>
            A dynamic object placement system featuring hotkey-based selection,
            real-time visual previews, and layer-based validation for logical
            placement. Objects align with the player's orientation for immersive
            positioning, with adjustable vertical offsets to accommodate terrain
            variations.
          </p>
          <Link to="/modulerbuildpage" className="project-link">
            More Info
          </Link>
        </div>


        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1063041799?h=57e950ca5b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Voice Command"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>

          </div>
          <a
            className="project-link"
            href="https://github.com/4manfear/Voice_command.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
          <h4>Role - Developer</h4>
          <p>
            The voice command mechanic allows players to interact with the game
            using spoken commands, triggering actions like animations,
            movement, or combat. It integrates Unity's KeywordRecognizer,
            NavMeshAgent, and Animator to recognize phrases, navigate targets,
            and perform contextual animations for enhanced interactivity.
          </p>
          <Link to="/voicecommand" className="project-link">
            More Info
          </Link>
        </div>

        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://res.cloudinary.com/dcf8ydyvs/video/upload/v1741236003/x9uap0ztsm3s3spjbeep.mp4"
              title="Flappy Goku"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <a
            className="project-link"
            href="https://github.com/4manfear/flappy_Ghoku.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
          <h4>Role - Developer</h4>
          <p>
            Flappy Ghoku is a Flappy Bird-inspired game where the player evades
            power balls to achieve a new high score. As the solo developer, I
            was responsible for the entire game development process.
          </p>
          <Link to="/flappyghokugame" className="project-link">
            More Info
          </Link>
        </div>

        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/sEdkZ9HWrkM?autoplay=1"
              title="The Last Night"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          {/* <a
            className="project-link"
            href="https://github.com/4manfear/Voice_command.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a> */}
          <h4>Role - Developer</h4>
          <p>
            The Last Night is a horror survival game where the player, a
            photographer, must capture a glowing bird while avoiding monsters
            and zombies. The game features limited resources, night vision, and
            tense exploration with jumpscares.
          </p>
        </div>

        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1063041825?h=cfb0a3a0df&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="VR Prototype"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <a
            className="project-link"
            href="https://github.com/4manfear/vrmodulerbuild.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
          <h4>Role - Developer</h4>
          <p>
            This project features a custom VR interaction system where I developed
            unique object grabbing and manipulation mechanics from scratch,
            enhancing player immersion and control. It focuses on creating
            smooth, realistic gameplay without relying on Unity's built-in grab
            functions.
          </p>
          <Link to="/vrsurvial" className="project-link">
            More Info
          </Link>
        </div>

        <div className="project-card">
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1063041539?h=5678ba5cfa&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Choice of Deck"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <a
            className="project-link"
            href="https://github.com/4manfear/Choice-of-deck.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
          <h4>Role - Developer / Team lead</h4>
          <p>
            Choice of Deck is a horror game developed in a
            two-day college game jam. You play as a priest
            exorcising a haunted mansion by collecting four
            sacred items across two rooms. A unique card-draw
            mechanic adds suspense by randomly triggering eerie
            or terrifying ghost encounters.
          </p>
          <Link to="/Choiceofdeckgame " className="project-link">
            More Info
          </Link>
        </div>




      </div>
    </div>
  );
}

export default Projects;
