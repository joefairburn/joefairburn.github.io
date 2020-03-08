import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import icon from "../images/gatsby-icon.png"

const SiteMetadata = ({ pathname, locale }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title},
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang={locale} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}${icon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content=""
      />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}

export default SiteMetadata
