import styled from 'styled-components'
import theme from './theme'
import media from './media'

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;
  border: 1px solid ${theme.colors.layoutStroke};
  font-size: ${`${theme.fontSizes[0]}px`};
  ${media.md`
    font-size: ${`${theme.fontSizes[2]}px`};
  `}

  tr {
    border-bottom: 1px solid ${theme.colors.layoutStrokeLight};
    background: ${theme.colors.white};
  }

  td {
    padding: 15px;
    color: ${theme.colors.text};
  }

  display: table;
`

export const TableHeader = styled.th`
  text-transform: uppercase;
  color: ${theme.colors.darkBlue};
  font-size: ${theme.fontSizes[0]}px};
  font-weight: ${theme.fontWeights.semiBold};
  background-color: ${theme.colors.white};
  padding: ${theme.spaces[3]}px;
  border-bottom: 1px solid ${theme.colors.layoutStrokeLight};
  ${media.md`
    font-size: ${theme.fontSizes[1]}px;
  `}
`

export const TitleRow = styled.tr`
  text-transform: uppercase;
  td {
    background: whitesmoke;
    color: dimgray;
  }
`

export const TotalRow = styled.tr`
  td {
    font-weight: bold;
  }
`

export const GrandTotalRow = styled(TotalRow)`
  border-top: 2px solid dimgray;
`

export const TableHeaderWithOrdering = styled(TableHeader)`
  white-space: nowrap;
  cursor: pointer;

  span {
    position: relative;

    &:before {
      content: "";
      height: 0;
      width: 0;
      border-style: solid;
      border-color: transparent transparent ${theme.colors.darkBlue};
      border-width: 6px;
      position: absolute;
      top: -6px;
      right: -17px;
      opacity: ${({ active, ascending }) => active && ascending ? '1' : '0.3'};
    }

    &:after {
      content: "";
      height: 0;
      width: 0;
      border-style: solid;
      border-color: ${theme.colors.darkBlue} transparent transparent;
      border-width: 6px;
      position: absolute;
      top: 9px;
      right: -17px;
      opacity: ${({ active, ascending }) => active && ascending ? '1' : '0.3'};
    }
  }
`

export const DesktopOnlyTableHeader = styled(TableHeader)`
  display: none;
  ${media.md`
    display: block;
  `}
`

export const DesktopOnlyTableHeaderWithOrdering = styled(TableHeaderWithOrdering)`
  display: none;
  ${media.md`
    display: block;
  `}
`

export const DesktopOnlyTableData = styled.td`
  display: none;
  ${media.md`
    display: block;
  `}
`

const tableComponents = {
  Table,
  TableHeader,
  TableHeaderWithOrdering,
  DesktopOnlyTableHeader,
  DesktopOnlyTableHeaderWithOrdering,
  DesktopOnlyTableData,
  TitleRow,
  TotalRow,
  GrandTotalRow
}

export default tableComponents
