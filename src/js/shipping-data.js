(function() {
    "use strict";

    vtex.curl(['shipping/js/component/ShippingOptions'], function (shippingOptions) {
        console.log(shippingOptions)
    });

})();