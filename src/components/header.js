import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from 'styled-components'
import { theme } from '../utilis/theme'

const HeaderContainer = styled.header`
  width: 100%;
  background: ${theme.colors.gray};
  padding: 70px 0;
  h1 a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.grayDark};
    
  }
`

const ImgContainer = styled(Img)`
  width: 60px;
  height: auto;
  margin-right: 20px;
  border-radius: 50%;

`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">
          <ImgContainer fluid={data.placeholderImage.childImageSharp.fluid} />
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
