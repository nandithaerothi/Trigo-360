/* =====================================================
   TRIGONEST
   ANY ANGLE FROM 1° TO INFINITY
   ===================================================== */


/* Format the answer neatly */

function formatNumber(value) {

    const tolerance = 0.0000000001;

    if (Math.abs(value) < tolerance) {
        return "0";
    }

    if (Math.abs(value - 1) < tolerance) {
        return "1";
    }

    if (Math.abs(value + 1) < tolerance) {
        return "-1";
    }

    return value.toFixed(6);
}


/* Calculate all six functions */

function calculateTrig() {

    const input = document.getElementById("angleInput");
    const error = document.getElementById("errorMessage");

    const angle = Number(input.value);


    /* Check that an angle was entered */

    if (
        input.value.trim() === "" ||
        !Number.isFinite(angle) ||
        angle < 1
    ) {

        error.textContent =
            "Please enter an angle of 1° or greater.";

        resetResults();

        return;
    }


    error.textContent = "";


    /* JavaScript trigonometry uses radians */

    const radians = angle * Math.PI / 180;


    /* Calculate sine and cosine */

    const sinValue = Math.sin(radians);
    const cosValue = Math.cos(radians);


    /* Calculate tangent */

    let tanValue;

    if (Math.abs(cosValue) < 0.0000000001) {
        tanValue = null;
    } else {
        tanValue = sinValue / cosValue;
    }


    /* Calculate cosecant */

    let cosecValue;

    if (Math.abs(sinValue) < 0.0000000001) {
        cosecValue = null;
    } else {
        cosecValue = 1 / sinValue;
    }


    /* Calculate secant */

    let secValue;

    if (Math.abs(cosValue) < 0.0000000001) {
        secValue = null;
    } else {
        secValue = 1 / cosValue;
    }


    /* Calculate cotangent */

    let cotValue;

    if (Math.abs(sinValue) < 0.0000000001) {
        cotValue = null;
    } else {
        cotValue = cosValue / sinValue;
    }


    /* Display answers */

    document.getElementById("sinResult").textContent =
        formatNumber(sinValue);

    document.getElementById("cosResult").textContent =
        formatNumber(cosValue);

    document.getElementById("tanResult").textContent =
        tanValue === null
            ? "Undefined"
            : formatNumber(tanValue);

    document.getElementById("cosecResult").textContent =
        cosecValue === null
            ? "Undefined"
            : formatNumber(cosecValue);

    document.getElementById("secResult").textContent =
        secValue === null
            ? "Undefined"
            : formatNumber(secValue);

    document.getElementById("cotResult").textContent =
        cotValue === null
            ? "Undefined"
            : formatNumber(cotValue);
}


/* Reset the results */

function resetResults() {

    document.getElementById("sinResult").textContent = "—";
    document.getElementById("cosResult").textContent = "—";
    document.getElementById("tanResult").textContent = "—";
    document.getElementById("cosecResult").textContent = "—";
    document.getElementById("secResult").textContent = "—";
    document.getElementById("cotResult").textContent = "—";
}


/* =====================================================
   START AFTER PAGE LOADS
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const button =
        document.getElementById("calculateButton");

    const input =
        document.getElementById("angleInput");


    /* Calculate when button is clicked */

    button.addEventListener("click", calculateTrig);


    /* Calculate when Enter is pressed */

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            calculateTrig();
        }

    });

});
