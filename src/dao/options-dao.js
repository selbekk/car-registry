var defaults = {
    models: [
        'Carrera',
        'Carrera S',
        'Carrera 4',
        'Carrera 4S',
        'Turbo',
        'Turbo S',
        'GT2',
        'GT2 Clubsport',
        'RS',
        'RS Clubsport',
        'Speedster'
    ],
    years: [
        1994,
        1995,
        1996,
        1997,
        1998
    ],
    exteriorColors: [
        {
            code: 'A1',
            name: 'Black'
        },
        {
            code: 'A8',
            name: 'Polar Silver Metallic'
        },
        {
            code: 'B5',
            name: 'Wimbledon Green Metallic'
        },
        {
            code: 'D3',
            name: 'Iris Blue'
        },
        {
            code: 'E1',
            name: 'Ocean Blue Metallic'
        },
        {
            code: 'F1',
            name: 'Zenith Blue'
        },
        {
            code: 'F6',
            name: 'Cobalt Blue Metallic'
        },
        {
            code: 'F8',
            name: 'Midnight Blue'
        },
        {
            code: 'G1',
            name: 'Guards Red'
        },
        {
            code: 'H8',
            name: 'Arena Red Metallic'
        },
        {
            code: 'J1',
            name: 'Turquoise Blue'
        },
        {
            code: 'J3',
            name: 'Ocean Jade'
        },
        {
            code: 'K1',
            name: 'Turquoise Metallic'
        },
        {
            code: 'K3',
            name: 'Vesuvio Metallic'
        },
        {
            code: 'K6',
            name: 'Aventurine Green'
        },
        {
            code: 'P5',
            name: 'Grand Prix White'
        },
        {
            code: 'Q1',
            name: 'Pastel Yellow'
        },
        {
            code: 'Q9',
            name: 'Slate Metallic'
        },
        {
            code: 'S8',
            name: 'Riviera Blue'
        },
        {
            code: 'T1',
            name: 'Paladio Metallic'
        },
        {
            code: 'T3',
            name: 'Amaranth Metallic'
        },
        {
            code: 'W7',
            name: 'Forest Green Metallic'
        },
        {
            code: 'W8',
            name: 'Viola Metallic'
        },
        {
            code: 'X1',
            name: 'Artic Silver'
        },
        {
            code: 'X4',
            name: 'Speed Yellow'
        },
        {
            code: 'Z1',
            name: 'Glacier White'
        },
        {
            code: 'Z8',
            name: 'Metallic Black'
        }
    ]
};

function getDefaults(callback) {
    callback(defaults);
}

module.exports = {
    getDefaults: getDefaults
};