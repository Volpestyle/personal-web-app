import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "./pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

type PDFViewerProps = {
  onLoad?: () => void;
  pdfSrc: string;
};

export const PDFViewer = ({ onLoad, pdfSrc }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
    if (onLoad) onLoad();
  }
  return (
    <Document
      file={pdfSrc}
      options={{ workerSrc }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
  );
};
