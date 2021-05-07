import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Criação de sites, lojas virtuais, aplicativos, web apps e mais .... Marcel Sussai Desenvolvedor Fullstack freelancer';
const defaultKeywords = 'criação de sites lojas virtuais webdesign sorocaba ';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" href="/logoMS.png"/>
    <link rel="shortcut icon" href="/logoMS.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logoMS.png" />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="manifest" href="/manifest.json" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
