import React from 'react';

import PDF from 'Components/templates/PDF/PDF';
import CV from 'Components/organisms/CV/CV';
import componentToPDF from "Utils/componentToPDF";

class CVPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const exportPDF = query.download === 'true';
    const isServer = !!req;

    if (isServer && exportPDF) {
      const buffer = await componentToPDF(
        <PDF><CV shouldRenderPDF /></PDF>
      );

      res.setHeader('Content-disposition', 'attachment; filename="CV | Fabián Veliz.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.end(buffer);
    }

    return {};
  }

  render() {
    return <CV />;
  }
}

export default CVPage;
