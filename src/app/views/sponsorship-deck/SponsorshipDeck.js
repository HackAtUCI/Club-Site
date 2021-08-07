import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

function SponsorshipDeck(props) {
    return (
        <div className="SponsorshipDeck" style={props.style}>
            <Document file="Hack at UCI Sponsorship Deck 2021-2022.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default SponsorshipDeck;
