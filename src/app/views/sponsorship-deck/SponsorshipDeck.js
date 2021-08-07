import React from "react";
import { Document, Page } from 'react-pdf';

function SponsorshipDeck(props) {
    return (
        <div className="SponsorshipDeck" style={props.style}>
            <Document file="Hack at UCI Sponsorship Deck 2021-2022.pdf"
                      options={{ workerSrc: "/pdf.worker.js" }}
            >
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default SponsorshipDeck;
