let car = {
    // Object properties
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    color: "Grey",
    // Object method
    howOld: function() {
        return 'The car was made in the year ${this.year}';
    },
};
howOld();