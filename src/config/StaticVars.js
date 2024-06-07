const image = require("./ImageAssets");

const hpData = [
    {
        img: image.hpo6,
        details: {
            name: "Turkey",
            price:"Starting at $500"
        }
    },
    {
        img: image.hpo5,
        details: {
            name: "Greece",
            price:"Starting at $1500"
        }
    },
    {
        img: image.hpo4,
        details: {
            name: "Japan",
            price:"Starting at $1000"
        }
    },
    {
        img: image.hpo3,
        details: {
            name: "India",
            price:"Starting at $500"
        }
    },
    {
        img: image.hpo2,
        details: {
            name: "Thailand",
            price:"Starting at $1000"
        }
    },
    {
        img: image.hpo1,
        details: {
            name: "Dubai",
            price:"Starting at $1500"
        }
    },
];

module.exports = { hpData };