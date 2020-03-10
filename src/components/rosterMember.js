import React from "react"
import WinLossRecords from "../components/winLossRecords"
import Img from "gatsby-image"

const RosterMember = ({
  companyTitle,
  championshipHeld,
  firstName,
  lastName,
  nickName,
  thumbnailImage,
  records,
}) => (
  <div className="card">
    <section className="card-titleplate">
      {companyTitle && <p className="card-titleplate-title">{companyTitle}</p>}
      {championshipHeld && (
        <p className="card-titleplate-championship">{championshipHeld}</p>
      )}
      <p className="card-titleplate-name">
        {firstName} {lastName}
      </p>
      {nickName && <p className="card-titleplate-nickname">{nickName}</p>}
    </section>

    <Img
      className="card-profileImage"
      fluid={thumbnailImage.src.childImageSharp.fluid}
      alt={`${firstName} ${lastName}`}
    />
    <WinLossRecords {...records} />
  </div>
)

export default RosterMember
