import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { GatsbySeo, LogoJsonLd } from 'gatsby-plugin-next-seo';
import { name } from 'data/config';
import { Global } from './styles';
import { Header } from 'components/theme';

import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
    
      <GatsbySeo
        title={`${name} | Portfolio`}
        description="A personal portfolio website created from Crio.Do's full stack introduction Micro Experience - QProfile"
        canonical={url}
        openGraph={{
          type: 'website',
          title: `${name} | Portfolio`,
          site_name: `${name} | Portfolio`,
          locale: 'en_IN',
          url,
          description:
            "A personal portfolio website created by Sambhav with encouragement from Crio.do",
          images: [
            {
              url: 'https://crio-assets.s3.ap-south-1.amazonaws.com/Thumbnail.png',
              width: 829,
              height: 829,
              alt: 'Sambhav Jain',
            },
          ],
        }}
      />

      <Header />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
