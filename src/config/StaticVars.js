const { Dimensions } = require("react-native");
const image = require("./ImageAssets");
const icon = require("./IconAssets");

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

const flightData = {
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "Economy",
    isShow: false,
    openClass: false,
    openTravel: false,
};

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
];

const _Base_URL = "http://13.127.45.236:3000/api";
const _Width = Dimensions.get("window").width;
const _Height = Dimensions.get("window").height;
const _EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const _PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const _NameRegex = /^[a-zA-Z ]+$/;
const _NumericRegex = /^[0-9]+$/;

const airlineIATA = [
    {
        carrierCode: "UK",
        name: "VISTARA",
        logo: icon.vistara
    },
    {
        carrierCode: "6E",
        name: "IndiGo",
        logo: icon.indigo
    },
    {
        carrierCode: "AI",
        name: "Air India",
        logo: icon.airindia
    },
    {
        carrierCode: "SG",
        name: "SpiceJet",
        logo: icon.spicejet
    },
    {
        carrierCode: "H1",
        name: "Hahn Air Systems",
        logo: icon.hahn
    },
    {
        carrierCode: "AC",
        name: "Air Canada",
        logo: icon.aircanada
    },
    {
        carrierCode: "LH",
        name: "Lufthansa AG",
        logo: icon.lufthansa
    },
    {
        carrierCode: "UA",
        name: "United Airlines",
        logo: icon.united
    },
    {
        carrierCode: "EY",
        name: "Etihad Airways",
        logo: icon.etihad
    },
    {
        carrierCode: "EK",
        name: "Emirates",
        logo: icon.emiarates
    },
];

module.exports = {
    hpData,
    flightData,
    airports,
    _Base_URL,
    _Width,
    _Height,
    airlineIATA,
    _EmailRegex,
    _PassRegex,
    _NameRegex,
    _NumericRegex,
};