import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const getHeadMetaDataForImage = image => {
  const imageUrl = `https://listings.knotel.com/meta.jpg`

  let img = {
    url: imageUrl,
    secureUrl: imageUrl,
    type: 'image/jpg',
    width: '940',
    height: '630',
    alt: 'Knotel',
  }

  if (image && image.url) {
    const protocolDefined = image.url.startsWith('http')
    img.secureUrl = image.url
    img.url = image.url

    if (!protocolDefined) {
      img.secureUrl = `https:${image.url}`
      img.url = `http:${image.url}`
    }
    img.type = image.type
    img.width = `${image.width}`
    img.height = `${image.height}`
    img.alt = `${image.title || 'Meta Image'} | Knotel`
  }
  return img
}

export const PageHead = ({
  Head,
  title,
  description,
  image,
  children,
}) => {
  const img = getHeadMetaDataForImage(image)

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:image" content={img.url} key="og:image" />
      <meta property="og:image:secure_url" content={img.url} key="og:image:secure_url" />
      {img.type && <meta property="og:image:type" content={img.type} key="og:image:type" />}
      {img.width && <meta property="og:image:width" content={img.width} key="og:image:width" />}
      {img.height && <meta property="og:image:height" content={img.height} key="og:image:height" />}
      {img.alt && <meta property="og:image:alt" content={img.alt} key="og:image:alt" />}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      {children}
    </Head>
  )
}

PageHead.defaultProps = {
  Head: Helmet,
  title: 'Knotel',
  description: 'Flexible workspace to power your people, productivity, and business',
}

PageHead.propTypes = {
  Head: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
  }),
  children: PropTypes.any,
}

export default PageHead
