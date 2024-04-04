<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/grasshopper_logo_icon_169067.png" width="100px" height="100px"/>

## GRASSHOPPER

This project calculates the percentage of coordinates inside a specific object.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Notes](#Notes)
- [Demos](#Demos)

## Installation

To install and set up the project, follow these instructions:

1. Clone the repository.
2. Open the project in your preferred code editor.

## Usage

To use the project, follow these steps:

0. Open the code in your favourite code editor
    - Replace the imageURL variable value to the path of the image that you want to analise.
1. Open the project in a web browser.
2. Zoom out the browser to the minimum level.
3. Press 'F2' to activate or deactivate ruller
4. Press 'Delete' to clear the drawings
5. Press 'Enter' when the ruler is placed in a good position
6. Click the starting x,y position and the ending x,y position in order to have a line drawn at this positions and at the bottom of the canvas there will be the results.
7. Click 'Backspace' to save the json result as a file in your computer
8. Click 'Shift' to switch the ruller direction (horizontal, vertical)
10. Note: Never forget to give labels to your mappings, for example you are mapping the positions of the name attribute in a document, first, place the ruller, second, write the labelName "(Only Aa-Zz) chars, no capsLocks, alt, or whatever other key", then you can proceed with the mapping.

## Notes
1. The first measurement that you take will be considered as the main and will be used as the reference for the upcoming measurement.
2. If you want to reset the main reference, just press 'Delete'

## Demos

Here are some demos of the project in action:

![Demo 1](demos/res.png)
![Demo 2](demos/demo2.png)

```json

//The json result after downloaded:
{
  "mainx": {
    "x1": "0.00",
    "y1": "Infinity",
    "x2": "100.00",
    "y2": "Infinity"
  },
  "mainy": {
    "x1": "100.60",
    "y1": "0.00",
    "x2": "100.41",
    "y2": "100.00"
  },
  "namestart": {
    "x1": "-0.41",
    "y1": "28.24",
    "x2": "29.25",
    "y2": "28.90"
  },
  "namemiddle": {
    "x1": "29.06",
    "y1": "28.06",
    "x2": "91.86",
    "y2": "31.43"
  },
  "nameend": {
    "x1": "91.97",
    "y1": "29.20",
    "x2": "100.30",
    "y2": "29.38"
  },
  "docnumberstart": {
    "x1": "-0.41",
    "y1": "18.60",
    "x2": "29.06",
    "y2": "19.75"
  },
  "docnumberend": {
    "x1": "54.99",
    "y1": "19.39",
    "x2": "100.30",
    "y2": "19.75"
  },
  "docnumbermiddle": {
    "x1": "29.25",
    "y1": "19.39",
    "x2": "54.09",
    "y2": "21.97"
  },
  "birthdatestart": {
    "x1": "-0.60",
    "y1": "44.31",
    "x2": "29.06",
    "y2": "44.31"
  },
  "birthdatemiddle": {
    "x1": "29.25",
    "y1": "43.17",
    "x2": "43.31",
    "y2": "46.06"
  },
  "birthdateend": {
    "x1": "43.61",
    "y1": "46.06",
    "x2": "100.11",
    "y2": "45.88"
  },
  "birthplacestart": {
    "x1": "-1.39",
    "y1": "44.13",
    "x2": "58.09",
    "y2": "43.95"
  },
  "birthplacemiddle": {
    "x1": "58.31",
    "y1": "43.17",
    "x2": "74.67",
    "y2": "46.54"
  },
  "birthplaceend": {
    "x1": "77.50",
    "y1": "46.36",
    "x2": "99.92",
    "y2": "46.06"
  },
  "fathernamestart": {
    "x1": "0.11",
    "y1": "52.32",
    "x2": "29.36",
    "y2": "52.62"
  },
  "fathernamemiddle": {
    "x1": "29.74",
    "y1": "52.32",
    "x2": "71.05",
    "y2": "54.43"
  },
  "fathernameend": {
    "x1": "71.28",
    "y1": "53.10",
    "x2": "100.60",
    "y2": "52.62"
  },
  "mothernamestart": {
    "x1": "-0.60",
    "y1": "60.02",
    "x2": "29.36",
    "y2": "60.33"
  },
  "mothernamemiddle": {
    "x1": "29.36",
    "y1": "60.33",
    "x2": "56.99",
    "y2": "62.61"
  },
  "mothernameend": {
    "x1": "56.88",
    "y1": "62.43",
    "x2": "100.53",
    "y2": "62.25"
  },
  "genderstart": {
    "x1": "-1.02",
    "y1": "69.80",
    "x2": "85.83",
    "y2": "69.80"
  },
  "gendermiddle": {
    "x1": "56.50",
    "y1": "64.54",
    "x2": "68.56",
    "y2": "67.07"
  },
  "heightstart": {
    "x1": "-1.09",
    "y1": "65.80",
    "x2": "89.26",
    "y2": "66.10"
  },
  "heightmiddle": {
    "x1": "90.16",
    "y1": "63.88",
    "x2": "97.40",
    "y2": "67.07"
  },
  "heightend": {
    "x1": "96.91",
    "y1": "66.59",
    "x2": "100.30",
    "y2": "66.29"
  },
  "": {
    "x1": "85.83",
    "y1": "69.80",
    "x2": "88.96",
    "y2": "71.90"
  },
  "genderend": {
    "x1": "89.45",
    "y1": "72.09",
    "x2": "100.41",
    "y2": "71.60"
  },
  "addressstart": {
    "x1": "-1.09",
    "y1": "74.13",
    "x2": "28.84",
    "y2": "74.49"
  },
  "addressmiddle": {
    "x1": "29.44",
    "y1": "74.01",
    "x2": "60.20",
    "y2": "85.57"
  },
  "addressend": {
    "x1": "60.80",
    "y1": "84.91",
    "x2": "100.23",
    "y2": "83.76"
  },
  "doctypestart": {
    "x1": "-0.41",
    "y1": "13.61",
    "x2": "26.95",
    "y2": "13.97"
  },
  "docstartmiddle": {
    "x1": "27.03",
    "y1": "12.04",
    "x2": "72.97",
    "y2": "15.23"
  },
  "docstartend": {
    "x1": "73.58",
    "y1": "14.93",
    "x2": "100.72",
    "y2": "14.93"
  },
  "signaturestart": {
    "x1": "-0.79",
    "y1": "82.18",
    "x2": "78.40",
    "y2": "82.36"
  },
  "signaturemiddle": {
    "x1": "78.82",
    "y1": "82.00",
    "x2": "93.06",
    "y2": "93.26"
  },
  "signatureend": {
    "x1": "93.06",
    "y1": "93.26",
    "x2": "100.53",
    "y2": "92.29"
  },
  "fotostart": {
    "x1": "-0.72",
    "y1": "31.91",
    "x2": "3.02",
    "y2": "31.79"
  },
  "fotomiddle": {
    "x1": "2.83",
    "y1": "31.43",
    "x2": "27.25",
    "y2": "79.95"
  },
  "fotoend": {
    "x1": "27.25",
    "y1": "79.59",
    "x2": "100.00",
    "y2": "79.11"
  }
}
