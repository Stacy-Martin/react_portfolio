import React from 'react';
import {Document, Page} from "react-pdf/dist/esm/entry.webpack";
import resume from "../assets/uploads/SbrownResume2021.pdf"
const Iframe = (props) => {
   let [iframe_ref, setIframe] = React.useState(null);
   const [numPages, setNumPages]=React.useState(null);
   const [pageNumber, setPageNumber] = React.useState(1)
   const writeHTML = (frame) => {
   if (!frame) {
     return;
   }

   let doc = frame.contentDocument;
   doc.open();
   doc.write(props.content);
   doc.close();
   frame.style.width = '100%';
   frame.style.height =     `${frame.contentWindow.document.body.scrollHeight}px`;

   setIframe(frame);

   return iframe_ref;
 };

 function onDocumentLoadSuccess({numPages}){

   setNumPages(numPages)
 }

 function nextPage(e){
   if(pageNumber === 3){
     setPageNumber(1)
   }else{
     setPageNumber(pageNumber + 1);
   }
 }
 return (
  // <iframe title="iframeThing" src={props.content} scrolling="no" frameBorder="0"
  // />
  <div>
  <p>Page {pageNumber} of 3</p>
  <Document className="stacyResume col-md-10 col-md-offset-2" file={resume} onLoadSuccess={onDocumentLoadSuccess}  onClick={(e) => {nextPage(e)}}>
   
    <Page pageNumber={pageNumber}/>
  </Document>
  </div>
 );
};

export default Iframe;