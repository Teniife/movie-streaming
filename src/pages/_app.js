import React from "react";
import '../styles/globals.css';
import '../styles/tailwind.css';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <>
      {/* Add any global styles, layouts, or components */}
      <Component {...pageProps} />
    </>
  );
};

export default AppComponent