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
            {singles.singlesWins} - {singles.singlesLosses}
          </p>
        </div>
        <div className="card-records-tag">
          <p className="division">Tag-Team</p>
          <p className="record">Record</p>
          <p className="winsLosses">
            {tagTeam.tagTeamWins} - {tagTeam.tagTeamLosses}
          </p>
        </div>
        <div className="card-records-trios">
          <p className="division">Trios</p>
          <p className="record">Record</p>
          <p className="winsLosses">
            {trios.triosWins} - {trios.triosLosses}
          </p>
        </div>
      </section>
      <section className="card-overall">
        <div className="card-records-current">
          <p>
            <span className="bold">2020</span> Overall
          </p>
          <p>
            {currentYear.currentYearWins} - {currentYear.currentYearLosses}
          </p>
        </div>
        <div className="card-records-career">
          <p className="bold">Career</p>
          <p>
            {careerRecord.careerWins} - {careerRecord.careerLosses}
          </p>
        </div>
      </section>
    </>
  )
}

export default WinLossRecords
