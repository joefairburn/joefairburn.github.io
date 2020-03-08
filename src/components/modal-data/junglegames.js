import React from "react"
import junglegamesgameplay from "../../images/junglegames-gameplay.png";
import junglegamesinstructions from "../../images/junglegames-instructions.png";
import junglegamesiphone from "../../images/junglegames-iphone.jpg";

import Carousel from "../carousel"
function JungleGames(props) {

  return (
    <div>
      <Carousel
        images={[
          { image: junglegamesgameplay, alt: "Website homepage screenshot" },
          { image: junglegamesinstructions, alt: "Website tour page screenshot" },
          { image: junglegamesiphone, alt: "Website tour page screenshot" }
        ]}
      />
The Jungle Games is an online multiplayer game, created with three of my peers during my second year at university. The gameplay resembled Jackbox, whereby the primary gameplay is hosted on a client from a computer. Players are then able to interact with the game from their mobile devices, through a web browser. The answers and instructions appeared on the main computer display, where users could then vote for the most accurate or funniest answer. Users gain points throughout the rounds until the final round where a leaderboard is shown, and the winners were displayed.
The game consisted of several minigames, all which required each user to interact with their own devices. One of these is an act-it-out game. One player receives a prompt on their phone which they must act out to everyone else. The other players must guess what they think the prompt could be on their phones. Everyone votes on the answers, and points are awarded based on how many votes each player receives.
It was my job to choose what technologies to use, and then to code all the software. The main game client which was ran on a computer was created in Unity with C#. The mobile client which was ran through a web browser was created with React. The backend was created with Node.js, using MongoDB to store data. 

      {/* <img className="junglegames-image" src={junglegamesgameplay} />
      <img className="junglegames-image" src={junglegamesinstructions} /> */}
    </div>
  )
}

export default JungleGames
