(function() {
    "use strict";

    vtex.curl(['shipping/js/component/ShippingOptions'], function (ShippingOptions) {
        ShippingOptions.attachTo('.cart-info')
    });

})();