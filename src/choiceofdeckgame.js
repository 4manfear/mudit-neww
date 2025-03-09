import React from 'react';
import './voicecommanddesigne.css';

function Choiceofdeckgame() {
  return (
    <section className="project_info">
      <h1 className="project-title">Choice Of Deck</h1>

      <div className="project_starter_info">
        <h3>Role: Developer / Team lead</h3>
        <h3>Team Project</h3>
      </div>

      <div className="small_information">
        <h4>Overview</h4>
        <p>
          Choice of Deck is a suspenseful horror game developed in just two days during a college game jam at Icat Design and Media College. In this immersive experience, you assume the role of a priest on a desperate mission to exorcise a haunted mansion. The gameplay is centered around exploration and strategy:

          Objective:
          Venture into two eerie rooms within the mansion to locate and collect four sacred items—a cross, a cursed doll, holy water, and candles. These items must then be placed in the basement to weaken the ghost and ultimately break the curse.

          Unique Mechanics:
          The game introduces an innovative Boon and Bane system. Every time you open a door, you draw a card:

          Boon Card: The ghost emits unsettling sounds without revealing itself, adding to the suspense.
          Bane Card: The ghost appears suddenly, heightening the terror and forcing you to react quickly.
          High Stakes:
          In this haunted environment, even your reactions matter. If you scream, it results in instant failure, reinforcing the need for careful decision-making and composure. The final twist is that the game concludes only when you speak a specific phrase, sealing the fate of the haunted mansion.

          Overall, Choice of Deck stands out for its creative blend of exploration, suspense, and unique gameplay mechanics, making it a memorable entry in the horror genre despite its rapid development timeline.
        </p>
      </div>

      <div className="detail_information">
        <h4>Key Features</h4>
        <ul>
          <li>
            <strong>• Immersive Horror Atmosphere:</strong> Experience a chilling haunted mansion setting that draws you into its dark history.
          </li>
          <li>
            <strong>• Exploration & Puzzle Solving:</strong> Navigate two eerie rooms to collect four sacred items: a cross, a cursed doll, holy water, and candles.
          </li>
          <li>
            <strong>• Innovative Boon and Bane Mechanic:</strong> Each door triggers a card draw that results in either eerie ambient sounds (boon) or a sudden ghost appearance (bane).
          </li>
          <li>
            <strong>• High-Stakes Gameplay:</strong> Manage your reactions carefully—screaming leads to instant failure.
          </li>
          <li>
            <strong>• Climactic Conclusion:</strong> The game ends only when you recite a specific phrase to break the curse.
          </li>
          <li>
            <strong>• Rapid Prototyping Excellence:</strong> Developed in just two days, showcasing creative innovation and effective teamwork.
          </li>
        </ul>
      </div>
      <h4>Gameplay Demonstration</h4>
      {/* Video Section */}
      <div className="video_container" style={{ position: "relative", paddingTop: "56.25%" }}>
        
        <iframe
          className="video_frame"
          src="https://player.vimeo.com/video/1063041539?h=5678ba5cfa&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          title="Choice of Deck"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>


    </section>
  );
}
export default Choiceofdeckgame;