function getRandomCar(callback) {
    var car = {
        id: 1,
        model: '993 Carrera 2',
        year: 1996,
        description: 'an amazing car with tons of history',
        exteriorColor: {
            name: 'Black',
            hex: '#000000'
        },
        interiorColor: {
            name: 'Beige',
            hex: '#F5F5DC'
        },
        options: [
            'Tiptronic',
            'LSD',
            'Center armrest'
        ]
    };
    callback(car);
}


module.exports = { getRandomCar: getRandomCar };