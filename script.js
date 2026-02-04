const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function rgbToHex(r, g, b) {
    return "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

function setColorFromRGB(r, g, b) {
    redRange.value = redInput.value = r;
    greenRange.value = greenInput.value = g;
    blueRange.value = blueInput.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b).toUpperCase();

    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;
    hexText.textContent = hex;
    colorPicker.value = hex;
}

function updateFromControls() {
    const r = Math.min(255, Math.max(0, parseInt(redRange.value) || 0));
    const g = Math.min(255, Math.max(0, parseInt(greenRange.value) || 0));
    const b = Math.min(255, Math.max(0, parseInt(blueRange.value) || 0));
    setColorFromRGB(r, g, b);
}

function updateFromPicker() {
    const { r, g, b } = hexToRgb(colorPicker.value);
    setColorFromRGB(r, g, b);
}

redRange.addEventListener("input", updateFromControls);
greenRange.addEventListener("input", updateFromControls);
blueRange.addEventListener("input", updateFromControls);

redInput.addEventListener("input", updateFromControls);
greenInput.addEventListener("input", updateFromControls);
blueInput.addEventListener("input", updateFromControls);

colorPicker.addEventListener("input", updateFromPicker);

setColorFromRGB(0, 0, 0);
