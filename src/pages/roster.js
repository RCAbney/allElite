import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RosterMember from "../components/rosterMember"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Yo this is the roster page</h1>
      {data.allRosterJson.edges.map(({ node }) => (
        <RosterMember key={node.id} {...node} />
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allRosterJson {
      edges {
        node {
          id
          firstName
          lastName
          championshipHeld
          companyTitle
          nickName
          thumbnailImage {
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          records {
            singles {
              singlesWins
              singlesLosses
              singlesDraws
            }
            tagTeam {
              tagTeamWins
              tagTeamLosses
              tagTeamDraws
            }
            trios {
              triosWins
              triosLosses
              triosDraws
            }
            currentYear {
              currentYearWins
              currentYearLosses
              currentYearDraws
            }
            careerRecord {
              careerWins
              careerLosses
              careerDraws
            }
          }
        }
      }
    }
  }
`
