const image = require("./ImageAssets");

const hpData = [
    {
        img: image.hpo6,
        details: {
            name: "Turkey",
            price: "Starting at $500"
        }
    },
    {
        img: image.hpo5,
        details: {
            name: "Greece",
            price: "Starting at $1500"
        }
    },
    {
        img: image.hpo4,
        details: {
            name: "Japan",
            price: "Starting at $1000"
        }
    },
    {
        img: image.hpo3,
        details: {
            name: "India",
            price: "Starting at $500"
        }
    },
    {
        img: image.hpo2,
        details: {
            name: "Thailand",
            price: "Starting at $1000"
        }
    },
    {
        img: image.hpo1,
        details: {
            name: "Dubai",
            price: "Starting at $1500"
        }
    },
];

const flightData = { originLocation: "", destinationLocation: "", departDate: "", adults: 1, children: 0, infants: 0, class: "Economy" };

const airports = [
    {
        "id": "ADEL",
        "name": "INDIRA GANDHI INTL",
        "iataCode": "DEL",
        "country": "INDIA"
    },
    {
        "id": "ASJD",
        "name": "LOS CABOS INTL",
        "iataCode": "SJD",
        "country": "MEXICO"
    },
    {
        "id": "ABJX",
        "name": "DEL BAJIO INTL",
        "iataCode": "BJX",
        "country": "MEXICO"
    },
    {
        "id": "ADJN",
        "name": "DELTA JUNCTION AIRPORT",
        "iataCode": "DJN",
        "country": "UNITED STATES OF AMERICA"
    },
    {
        "id": "ALMM",
        "name": "FED. VALLE DEL FUERTE",
        "iataCode": "LMM",
        "country": "MEXICO"
    },
    {
        "id": "ACME",
        "name": "INTERNATIONAL",
        "iataCode": "CME",
        "country": "MEXICO"
    },
    {
        "id": "AHXD",
        "name": "DELINGHA",
        "iataCode": "HXD",
        "country": "CHINA"
    },
    {
        "id": "AESC",
        "name": "DELTA COUNTY",
        "iataCode": "ESC",
        "country": "UNITED STATES OF AMERICA"
    },
    {
        "id": "ACEC",
        "name": "DEL NORTE COUNTY RGNL",
        "iataCode": "CEC",
        "country": "UNITED STATES OF AMERICA"
    },
    {
        "id": "AGLH",
        "name": "MID-DELTA",
        "iataCode": "GLH",
        "country": "UNITED STATES OF AMERICA"
    }
]

module.exports = { hpData, flightData, airports };