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
  "horizontal": {
    "x1": "0.00",
    "y1": "0.0",
    "x2": "100.00",
    "y2": "0.0"
  },
  "vertical": {
    "x1": "100.19",
    "y1": "0.00",
    "x2": "100.07",
    "y2": "100.00"
  },
  "doctypestart": {
    "x1": "0.11",
    "y1": "12.86",
    "x2": "26.92",
    "y2": "13.35"
  },
  "doctypemiddle": {
    "x1": "27.10",
    "y1": "11.90",
    "x2": "72.97",
    "y2": "15.64"
  },
  "doctypeend": {
    "x1": "72.97",
    "y1": "15.64",
    "x2": "99.89",
    "y2": "15.46"
  },
  "docnumberstart": {
    "x1": "-0.11",
    "y1": "20.63",
    "x2": "29.20",
    "y2": "20.63"
  },
  "docnumbermiddle": {
    "x1": "28.90",
    "y1": "18.34",
    "x2": "53.64",
    "y2": "21.42"
  },
  "docnumberend": {
    "x1": "53.64",
    "y1": "21.42",
    "x2": "99.78",
    "y2": "21.24"
  },
  "namestart": {
    "x1": "-0.49",
    "y1": "29.45",
    "x2": "29.01",
    "y2": "29.81"
  },
  "namemiddle": {
    "x1": "29.31",
    "y1": "27.88",
    "x2": "91.51",
    "y2": "31.74"
  },
  "nameend": {
    "x1": "91.51",
    "y1": "31.74",
    "x2": "99.89",
    "y2": "31.74"
  },
  "birthdatestart": {
    "x1": "-0.49",
    "y1": "44.91",
    "x2": "29.01",
    "y2": "44.91"
  },
  "birthdatemiddle": {
    "x1": "29.50",
    "y1": "42.85",
    "x2": "43.48",
    "y2": "45.39"
  },
  "birthdateend": {
    "x1": "43.48",
    "y1": "45.39",
    "x2": "100.37",
    "y2": "45.27"
  },
  "birthplacestart": {
    "x1": "-0.90",
    "y1": "42.49",
    "x2": "57.72",
    "y2": "43.64"
  },
  "birthplacemiddle": {
    "x1": "57.72",
    "y1": "43.64",
    "x2": "74.17",
    "y2": "46.05"
  },
  "birthplaceend": {
    "x1": "74.17",
    "y1": "46.05",
    "x2": "99.78",
    "y2": "46.05"
  },
  "fathernamestart": {
    "x1": "-0.11",
    "y1": "52.52",
    "x2": "29.31",
    "y2": "53.30"
  },
  "fathernamemiddle": {
    "x1": "29.79",
    "y1": "51.19",
    "x2": "70.28",
    "y2": "54.27"
  },
  "fathernameend": {
    "x1": "70.28",
    "y1": "54.27",
    "x2": "100.30",
    "y2": "53.97"
  },
  "mothernamestart": {
    "x1": "-0.60",
    "y1": "60.85",
    "x2": "29.61",
    "y2": "61.21"
  },
  "mothernamemiddle": {
    "x1": "29.61",
    "y1": "58.92",
    "x2": "56.82",
    "y2": "62.66"
  },
  "mothernameend": {
    "x1": "56.82",
    "y1": "62.66",
    "x2": "100.30",
    "y2": "62.78"
  },
  "maritalstatestart": {
    "x1": "-0.79",
    "y1": "65.84",
    "x2": "56.04",
    "y2": "66.32"
  },
  "maritalstatemiddle": {
    "x1": "56.71",
    "y1": "63.79",
    "x2": "68.67",
    "y2": "66.99"
  },
  "maritalstateend": {
    "x1": "68.97",
    "y1": "66.81",
    "x2": "99.89",
    "y2": "66.69"
  },
  "heightstart": {
    "x1": "-0.79",
    "y1": "65.36",
    "x2": "88.93",
    "y2": "66.51"
  },
  "heightmiddle": {
    "x1": "89.72",
    "y1": "63.91",
    "x2": "96.79",
    "y2": "67.65"
  },
  "heightend": {
    "x1": "96.79",
    "y1": "67.65",
    "x2": "100.30",
    "y2": "67.77"
  },
  "addressstart": {
    "x1": "-2.39",
    "y1": "70.19",
    "x2": "29.72",
    "y2": "70.19"
  },
  "addressmiddle": {
    "x1": "29.72",
    "y1": "70.19",
    "x2": "58.80",
    "y2": "86.98"
  },
  "addressend": {
    "x1": "58.80",
    "y1": "86.98",
    "x2": "100.00",
    "y2": "86.31"
  },
  "genderstart": {
    "x1": "-1.50",
    "y1": "70.85",
    "x2": "85.83",
    "y2": "70.67"
  },
  "gendermiddle": {
    "x1": "86.02",
    "y1": "68.28",
    "x2": "88.64",
    "y2": "71.48"
  },
  "genderend": {
    "x1": "88.52",
    "y1": "71.48",
    "x2": "100.07",
    "y2": "70.99"
  },
  "signaturestart": {
    "x1": "-0.41",
    "y1": "82.45",
    "x2": "78.17",
    "y2": "82.27"
  },
  "signaturemiddle": {
    "x1": "78.17",
    "y1": "82.27",
    "x2": "91.40",
    "y2": "93.38"
  },
  "signatureend": {
    "x1": "91.40",
    "y1": "93.38",
    "x2": "100.67",
    "y2": "92.29"
  },
  "photostart": {
    "x1": "-0.19",
    "y1": "33.17",
    "x2": "5.50",
    "y2": "32.99"
  },
  "photomiddle": {
    "x1": "5.57",
    "y1": "32.51",
    "x2": "27.81",
    "y2": "79.85"
  },
  "photoend": {
    "x1": "27.63",
    "y1": "78.76",
    "x2": "100.19",
    "y2": "79.55"
  }
}
