"use strict";

/* ==========================================
   DocForge v2
========================================== */

const htmlInput = document.getElementById("htmlInput");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clearBtn");
const printBtn = document.getElementById("printBtn");

/* --------------------------
   Render HTML
-------------------------- */

function renderPreview() {
    preview.innerHTML = htmlInput.value;
}

/* --------------------------
   Clear Editor
-------------------------- */

function clearEditor() {

    if (!confirm("Clear the editor?")) {
        return;
    }

    htmlInput.value = "";
    preview.innerHTML = "";
    htmlInput.focus();
}

/* --------------------------
   Print
-------------------------- */

function printDocument() {

    const printWindow = window.open("", "_blank");

    const docContent = previewFrame.contentDocument.documentElement.innerHTML;

    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Print Document</title>

            <style>
                @page {
                    size: A4;
                    margin: 20mm;
                }

                body {
                    font-family: sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    color: #000;
                }

                img { max-width: 100%; }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                td, th {
                    border: 1px solid #000;
                    padding: 6px;
                }
            </style>

        </head>

        <body onload="window.print(); setTimeout(() => window.close(), 500);">
            ${docContent}
        </body>
        </html>
    `);

    printWindow.document.close();
}

/* --------------------------
   Events
-------------------------- */

htmlInput.addEventListener("input", renderPreview);

clearBtn.addEventListener("click", clearEditor);

printBtn.addEventListener("click", printDocument);

/* --------------------------
   Initial State
-------------------------- */

preview.innerHTML = "";
