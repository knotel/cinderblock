import PropTypes from 'prop-types'
import React from 'react'

const WIDTH = 48
const HEIGHT = 48

export const TrashIcon = ({ stroke, width, height }) => {
  const scaleWidth = width / WIDTH
  const scaleHeight = height / HEIGHT

  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`scale(${scaleWidth} ${scaleHeight})`}
    >
      <mask
        id="mask0" mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="14" y="14"
        width="20" height="20"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M31.0833 21.9167L30.3608 32.035C30.3309 32.4555 30.1427 32.849 29.8343 33.1363C29.5258 33.4236 29.1199 33.5833 28.6983 33.5833H20.135C19.7134 33.5833 19.3076 33.4236 18.9991 33.1363C18.6906 32.849 18.5024 32.4555 18.4725 32.035L17.75 21.9167"
            stroke={stroke}
            strokeWidth="1"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M15.25 18.5833H33.5833"
            stroke={stroke}
            strokeWidth="1"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21.083 18.5833V16.0833C21.083 15.8623 21.1708 15.6504 21.3271 15.4941C21.4834 15.3378 21.6953 15.25 21.9163 15.25H26.9163C27.1374 15.25 27.3493 15.3378 27.5056 15.4941C27.6619 15.6504 27.7497 15.8623 27.7497 16.0833V18.5833"
            stroke={stroke}
            strokeWidth="1"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </g>
      </mask>
      <g mask="url(#mask0)">
        <rect
          width="48"
          height="48"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="20" height="20"
            fill="white" transform="translate(14 14)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

TrashIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

TrashIcon.defaultProps = {
  stroke: '#919EAB',
  width: 48,
  height: 48,
}

export default TrashIcon
