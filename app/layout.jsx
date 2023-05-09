import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="kodego KodeGo part-time wd41p YT youtube"
        />
        <title>WD41P | Video Recordings</title>
      </head>
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
};

export default RootLayout;
