import React, { useEffect, useState } from "react"
import "../assets/css/pl.css"
import { getMyData, getMyTeam, getAllData } from "../assets/api/pl"
import arsenal from "../assets/images/pl/arsenal.png"
import astonvilla from "../assets/images/pl/villa.png"
import bournemouth from "../assets/images/pl/bournemouth.png"
import brentford from "../assets/images/pl/brentford.webp"
import brighton from "../assets/images/pl/brighton.png"
import chelsea from "../assets/images/pl/chelsea.png"
import crystalpalace from "../assets/images/pl/crystalpalace.svg"
import everton from "../assets/images/pl/everton.png"
import fulham from "../assets/images/pl/fulham.svg"
import leeds from "../assets/images/pl/leeds.png"
import leicester from "../assets/images/pl/leicester.png"
import liverpool from "../assets/images/pl/liverpool.webp"
import mancity from "../assets/images/pl/mancity.webp"
import manutd from "../assets/images/pl/manutd.png"
import newcastle from "../assets/images/pl/newcastle.svg"
import nottinghamforrest from "../assets/images/pl/nottinghamforrest.png"
import southampton from "../assets/images/pl/southampton.png"
import tottenham from "../assets/images/pl/tottenham.png"
import westham from "../assets/images/pl/whu.png"
import wolves from "../assets/images/pl/wolves.png"
const PremierLeague = () => {
  const [playerDisplay, setPlayerDisplay] = useState(null)
  const [currentTeam, setCurrentTeam] = useState(null)
  const [teamInfo, setTeamInfo] = useState(null)
  const imageGrid = [
    { url: arsenal, alt: "Arsenal" },
    { url: astonvilla, alt: "Aston Villa" },
    { url: bournemouth, alt: "Bournemouth" },
    { url: brentford, alt: "Bretford" },
    { url: brighton, alt: "Brighton" },
    { url: chelsea, alt: "Chelsea" },
    { url: crystalpalace, alt: "Crystal Palace" },
    { url: everton, alt: "Everton" },
    { url: fulham, alt: "Fulham" },
    { url: leicester, alt: "Leicester City" },
    { url: leeds, alt: "Leeds United" },
    { url: liverpool, alt: "Liverpool" },
    { url: mancity, alt: "Manchester City" },
    { url: manutd, alt: "Manchester United" },
    { url: newcastle, alt: "Newcastle United" },
    { url: nottinghamforrest, alt: "Nottingham Forrest" },
    { url: southampton, alt: "Southampton" },
    { url: tottenham, alt: "Tottenham Hotspur" },
    { url: westham, alt: "West Ham United" },
    { url: wolves, alt: "Wolverhampton Wanderers" },
  ]
  const loadMyTeam = async () => {
    let newPlayerDisplay = []
    const allData = await getAllData()
    const myData = await getMyData()
    const myTeam = await getMyTeam(myData.current_event)
    setTeamInfo(myData)
    setCurrentTeam(myTeam)
    myTeam.picks.map((pick, index) => {
      const player = allData.elements.find(player => player.id === pick.element)
      const points = player.event_points * pick.multiplier
      newPlayerDisplay[index] = {
        name: player.web_name,
        points: points,
        team: player.team,
      }
    })
    setPlayerDisplay(newPlayerDisplay)
  }

  useEffect(() => {
    loadMyTeam()
  }, [])

  return (
    <div className="pl-container">
      {playerDisplay && playerDisplay.length > 0 && (
        <div className="pl-section">
          {teamInfo && <div className="pl-team-name">{teamInfo.name}</div>}
          <div className="pl-block-container">
            <div className="pl-block">
              <div className="pl-block-title">POINTS</div>
              <div className="pl-block-value">
                {currentTeam.entry_history.points}
              </div>
            </div>
            <div className="pl-block">
              <div className="pl-block-title">GAME WEEK</div>
              <div className="pl-block-value">
                {currentTeam.entry_history.event}
              </div>
            </div>
            <div className="pl-block">
              <div className="pl-block-title">TOTAL POINTS</div>
              <div className="pl-block-value">
                {currentTeam.entry_history.total_points}
              </div>
            </div>
          </div>
          <div className="pl-section-title">STARTING</div>
          <div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[0].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[0].team - 1].alt}
                  src={imageGrid[playerDisplay[0].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[0].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[1].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[1].team - 1].alt}
                  src={imageGrid[playerDisplay[1].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[1].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[2].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[2].team - 1].alt}
                  src={imageGrid[playerDisplay[2].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[2].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[3].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[3].team - 1].alt}
                  src={imageGrid[playerDisplay[3].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[3].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[4].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[4].team - 1].alt}
                  src={imageGrid[playerDisplay[4].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[4].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[5].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[5].team - 1].alt}
                  src={imageGrid[playerDisplay[5].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[5].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[6].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[6].team - 1].alt}
                  src={imageGrid[playerDisplay[6].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[6].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[7].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[7].team - 1].alt}
                  src={imageGrid[playerDisplay[7].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[7].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[8].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[8].team - 1].alt}
                  src={imageGrid[playerDisplay[8].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[8].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[9].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[9].team - 1].alt}
                  src={imageGrid[playerDisplay[9].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[9].points}</div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[10].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[10].team - 1].alt}
                  src={imageGrid[playerDisplay[10].team - 1].url}
                />
              </div>
              <div className="pl-player-points">{playerDisplay[10].points}</div>
            </div>
          </div>
          <div className="pl-section-title">SUBS</div>
          <div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[11].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[11].team - 1].alt}
                  src={imageGrid[playerDisplay[11].team - 1].url}
                />
              </div>
              <div className="pl-player-points"></div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[12].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[12].team - 1].alt}
                  src={imageGrid[playerDisplay[12].team - 1].url}
                />
              </div>
              <div className="pl-player-points"></div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[13].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[13].team - 1].alt}
                  src={imageGrid[playerDisplay[13].team - 1].url}
                />
              </div>
              <div className="pl-player-points"></div>
            </div>
            <div className="pl-player">
              <div className="pl-player-name">{playerDisplay[14].name}</div>
              <div className="pl-player-team">
                <img
                  alt={imageGrid[playerDisplay[4].team - 1].alt}
                  src={imageGrid[playerDisplay[14].team - 1].url}
                />
              </div>
              <div className="pl-player-points"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PremierLeague
