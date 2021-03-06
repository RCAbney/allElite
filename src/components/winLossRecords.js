import React from "react"

const WinLossRecords = ({
  singles,
  tagTeam,
  trios,
  currentYear,
  careerRecord,
}) => {
  return (
    <>
      <section className="card-records">
        <div className="card-records-single">
          <p className="division">Singles</p>
          <p className="record">Record</p>
          <p className="winsLosses">
            {singles.singlesWins} - {singles.singlesLosses}{" "}
            {singles.singlesDraws !== "0" ? `- ${singles.singlesDraws}` : ``}
          </p>
        </div>
        <div className="card-records-tag">
          <p className="division">Tag-Team</p>
          <p className="record">Record</p>
          <p className="winsLosses">
            {tagTeam.tagTeamWins} - {tagTeam.tagTeamLosses}{" "}
            {tagTeam.tagTeamDraws !== "0" ? `- ${tagTeam.tagTeamDraws}` : ``}
          </p>
        </div>
        <div className="card-records-trios">
          <p className="division">Trios</p>
          <p className="record">Record</p>
          <p className="winsLosses">
            {trios.triosWins} - {trios.triosLosses}{" "}
            {trios.triosDraws !== "0" ? `- ${trios.triosDraws}` : ``}
          </p>
        </div>
      </section>
      <section className="card-overall">
        <div className="card-records-current">
          <p>
            <span className="bold">2020</span> Overall
          </p>
          <p>
            {currentYear.currentYearWins} - {currentYear.currentYearLosses}{" "}
            {currentYear.currentYearDraws !== "0"
              ? `- ${currentYear.currentYearDraws}`
              : ``}
          </p>
        </div>
        <div className="card-records-career">
          <p className="bold">Career</p>
          <p>
            {careerRecord.careerWins} - {careerRecord.careerLosses}{" "}
            {careerRecord.careerDraws !== "0"
              ? `- ${careerRecord.careerDraws}`
              : ``}
          </p>
        </div>
      </section>
    </>
  )
}

export default WinLossRecords
