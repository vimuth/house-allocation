var caramel = require('caramel');

caramel.configs({
    context: '/HouseManagement',
    negotiation: true,
    themer: function () {
        return 'classic';
    }
});