import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';

const componentToPDF = (component) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const options = {
      format: 'A4',
      orientation: 'portrait',
      type: 'pdf',
      phantomArgs: ['--local-url-access=false']
    };

    const buffer = pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
      }

      return resolve(buffer);
    });
  });
};

export default componentToPDF;