import React from "react"
import styled from 'styled-components'
import { theme } from '../utilis/theme'

const FooterContainer = styled.footer`
background: ${theme.colors.gray};
text-align: center;
color: ${theme.colors.grayDark};
padding: 50px 0;
`

const Footer = () => (
	<FooterContainer>
		&copy; Aniela Katana-Matłok
	</FooterContainer>
)

export default Footer