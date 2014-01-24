var caramel = require('caramel');

caramel.configs({
    context: '/TestApp2',
    negotiation: true,
    themer: function () {
        return 'classic';
    }
});