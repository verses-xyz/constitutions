import Head from 'next/head';

const TITLE = "Constitutions of Web3"
const DESC = "A collection of resources for creating digital constitutions"

export default function HeadComponent() {
  return <Head>
    <title>{TITLE}</title>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Roboto+Mono&display=swap" rel="stylesheet" />

    {/* Place any emoji as text wrapped in svg for favicon */}
    <link rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22> 
      ✍️ 
      </text></svg>"/>

    <meta property="og:title" content={TITLE} />
    <meta property="og:description"
      content={DESC} />

    <meta name="twitter:card" content="summary" />
  </Head>
}
