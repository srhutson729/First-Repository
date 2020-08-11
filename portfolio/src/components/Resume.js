import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import Resume from '../pdf/Resume.pdf';

export default function Test() {
  return (
    <Document file={Resume}>
          <div class="d-flex justify-content-center">
      <Page pageNumber={1} />
       </div>
       <div class="d-flex justify-content-center">
     <button type="button" class="btn btn-danger" >Download</button>
     </div>
     </Document>

     
     );
}

