import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'pcln-design-system'
import media from './media'
import theme from './theme'
import Dropdown from './Dropdown'
import Button from './Button'
import MenuToggleIcon, { width as menuIconWidth } from './icons/MenuToggleIcon'
import KnotelLogo from './Logo'

export const [mobileNavHeight, navHeight] = [64, 80]
const Wrapper = styled(Flex)`
  height: ${mobileNavHeight}px;
  width: 100%;
  position: relative;
  align-items: center;
  z-index: 52;
  ${media.md`
    height: ${navHeight}px;
  `}
`

const Container = styled(Flex)`
  box-sizing: border-box;
  /* color: ${({ isInverse }) => isInverse ? theme.colors.white : theme.colors.text}; */
  background: ${({ bgColor, isInverse, isTranslucent }) => isInverse
    ? bgColor
    : (isTranslucent ? 'rgba(255,255,255,0.98)' : theme.colors.white)};
  align-items: center;
  width: 100%;
  height: ${mobileNavHeight}px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.disabledIcon};
  padding: 0 ${theme.space[3]}px 0 ${theme.space[2]}px;
  z-index: ${props => props.zIndex};

  ${({ isSticky }) => isSticky
    ? `
      position: fixed;
      left: 0;
      top: 0;
    `
    : ''}

  ${media.md`
    height: ${navHeight}px;
    padding: 0 ${theme.space[3]}px;
    z-index: 100;
    box-shadow: ${theme.boxShadows[1]};
  `}
`

const LogoContainer = styled(Flex)`
  height: 100%;
  max-width: calc(100% - ${menuIconWidth}px);
  align-items: center;
  cursor: pointer;

  ${media.md`
    height: 70%;
  `}
`
const LogoLink = styled.a`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: flex-end;

  ${media.md`
    height: 100%;
  `}
`

const poweredByWidth = 70
const logoStyle = css`
  height: 100%;
  width: auto;
`

const StyledKnotelLogo = styled(KnotelLogo)`
  ${logoStyle};
  color: ${({ isInverse }) => isInverse ? theme.colors.white : theme.colors.text};
`
const BrokerLogo = styled.img`
  ${logoStyle};
  height: auto;
  max-height: 100%;
  ${({ poweredBy }) => poweredBy ? `max-width: calc(100% - ${poweredByWidth}px);` : ''}

  ${media.md`
    max-width: none;
  `}
`

const LinksContainer = styled(Flex)`
  display: none;
  align-items: center;
  ${theme.mediaQueries.md} {
    display: flex;
  }
`

const PoweredByContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 10px;
  width: ${poweredByWidth}px;
`
const PoweredBy = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  color: ${theme.colors.placeholder};
`
const SmallKnotelLogo = styled(StyledKnotelLogo)`
  width: 50px;
  height: 10px;
  color: ${theme.colors.placeholder};
`

const LinksWrapper = styled(Flex)`
  display: none;

  ${theme.mediaQueries.md} {
    margin: ${theme.space[2]}px 0;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`

const MobileOnly = styled(Flex)`
  display: flex;
  ${theme.mediaQueries.md} {
    display: none;
  }
`

const LinkWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;

  color: ${theme.colors.navItemGrey};
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights.semiBold};
  font-style: normal;
  font-size: ${theme.fontSizes[2]}px;
  line-height: 20px;
`

const StyledNavLink = styled.a`
  color: ${theme.colors.navItemGrey};
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights.semiBold};
  font-style: normal;
  font-size: ${theme.fontSizes[2]}px;
  line-height: 20px;
  text-decoration: none;
`

const MobileMenu = styled(Flex)`
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  background: ${theme.colors.white};
  top: 62px;
  right: 0;
  z-index: 51;
  padding-top: 7px;
  display: ${props => !props.showMenu ? 'none' : 'flex'};
`

const MobileNavLink = styled(StyledNavLink)`
  display: flex;
  align-items: center;
  color: ${theme.colors.navItemGrey};
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights.semiBold};
  font-style: normal;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 20px;
  margin-right: 0;
`

const StyledMenuToggleIcon = styled(MenuToggleIcon)`
  position: relative;
`

const StyledButton = styled(Button)`
  font-size: ${theme.fontSizes[1]}px;
  background-color: ${theme.colors.spaceBlue};
  padding: 5px 10px;
  height: 40px;
  margin-left: ${theme.space[3]}px;

  &:hover {
    background-color: ${theme.colors.spaceBlue};
    opacity: 0.8;
  }
`

const StyledLink = styled.div`
  svg {
    width: 145px;
    ${media.md`
      width: 268px;
    `}
  }
`

const DefaultLink = ({ href, children }) => {
  return <StyledLink onClick={() => window.open(href)}>
    { children }
  </StyledLink>
}

export const AppBar = ({ color, isInverse, isSticky, isTranslucent, logoSrc, links, asPath, buttons, Link, poweredBy }) => {
  const [showMenu, toggleMenu] = useState(false)
  const handleToggleMenu = useCallback((toggle) => () => toggleMenu(toggle), [toggleMenu])

  return (
    <Wrapper>
      <Container
        bgColor={color}
        isSticky={isSticky}
        isInverse={isInverse}
        isTranslucent={isTranslucent}
        zIndex={51}
      >
        <LogoContainer>
          <Link href={`/`} as={`/`} passHref>
            <LogoLink>
              {logoSrc ? (
                <>
                  <BrokerLogo src={logoSrc} showPoweredBy={poweredBy} />
                  <PoweredByContainer>
                    <PoweredBy>Powered by</PoweredBy>
                    <SmallKnotelLogo isInverse={isInverse} />
                  </PoweredByContainer>
                </>
              ) : (
                <StyledKnotelLogo isInverse={isInverse} />
              )}
            </LogoLink>
          </Link>
        </LogoContainer>
        <LinksContainer>
          {buttons.map(({ label, onClick }, index) => <StyledButton onClick={onClick} key={index}>{ label }</StyledButton>)}
          <Dropdown
            options={(
              <LinksWrapper>
                {links.map(({ href, as, prefetch, label, target, rel }) => (
                  <LinkWrapper key={as} active={as === asPath}>
                    <Link href={href} as={as} prefetch={prefetch} passHref>
                      <StyledNavLink
                        onClick={handleToggleMenu(false)}
                        active={as === asPath}
                        target={target}
                        rel={rel}
                      >
                        {label}
                      </StyledNavLink>
                    </Link>
                  </LinkWrapper>
                ))}
              </LinksWrapper>
            )}
          >
            <StyledMenuToggleIcon />
          </Dropdown>
        </LinksContainer>
        <MobileOnly>
          <MobileMenu showMenu={showMenu}>
            <Flex flexDirection="column">
              {links.map(({ href, as, prefetch, label, target, rel }, index) => (
                <Link
                  key={as}
                  href={href}
                  as={as}
                  prefetch={prefetch}
                  passHref
                >
                  <MobileNavLink
                    onClick={handleToggleMenu(false)}
                    target={target}
                    rel={rel}
                  >
                    {label}
                  </MobileNavLink>
                </Link>
              )
              )}
              {buttons.map(({ label, onClick }, index) => {
                const handleClick = e => {
                  onClick(e)
                  handleToggleMenu(false)
                }
                return <MobileNavLink key={index} onClick={handleClick}>{ label }</MobileNavLink>
              })}
            </Flex>
          </MobileMenu>
          <MenuToggleIcon
            onClick={handleToggleMenu(!showMenu)}
            menuOpen={showMenu}
          />
        </MobileOnly>
      </Container>
    </Wrapper>
  )
}

AppBar.displayName = 'AppBar'

AppBar.defaultProps = {
  color: theme.colors.white,
  isInverse: false,
  isSticky: false,
  isTranslucent: false,
  links: [],
  buttons: [],
  asPath: '/',
  Link: DefaultLink,
  poweredBy: true
}

AppBar.propTypes = {
  Link: PropTypes.object,
  color: PropTypes.string,
  isInverse: PropTypes.bool,
  isSticky: PropTypes.bool,
  poweredBy: PropTypes.bool,
  isTranslucent: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
  buttons: PropTypes.arrayOf(PropTypes.object),
  asPath: PropTypes.string
}

export default AppBar
