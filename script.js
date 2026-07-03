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
    window.print();
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
