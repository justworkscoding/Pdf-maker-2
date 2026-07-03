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

function printDocument() {

    const printWindow = window.open("", "_blank");

    const docContent = preview.innerHTML;

    printWindow.document.open();

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <title>Print Document</title>

            <style>

                @page{
                    size:A4;
                    margin:20mm;
                }

                *{
                    box-sizing:border-box;
                }

                body{
                    margin:0;
                    padding:0;
                    font-family:sans-serif;
                    color:#111;
                    font-size:16px;
                    line-height:1.6;
                    background:#fff;
                }

                img{
                    max-width:100%;
                }

                table{
                    width:100%;
                    border-collapse:collapse;
                }

                table,
                th,
                td{
                    border:1px solid #000;
                }

                th,
                td{
                    padding:6px;
                }

            </style>

        </head>

        <body>

            ${docContent}

            <script>

                window.onload = () => {

                    window.print();

                    setTimeout(() => {
                        window.close();
                    }, 500);

                };

            <\/script>

        </body>

        </html>
    `);

    printWindow.document.close();
}
