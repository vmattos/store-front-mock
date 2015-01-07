(function($) {
    "use strict";

    var dependencies = [
        'flight/lib/component',
        'shipping/templates/shippingOptions'
    ];

    return vtex.define(dependencies, function(defineComponent, shippingOptionsTemplate) {

        function ShippingOptions() {

            this.doSomething = function(e) {
                e.preventDefault();

                var node = this.node;

                dust.render("shippingOptions", {}, function(err, template) {
                    node.innerHtml += template
                });
            };

            this.after('initialize', function() {
                this.on('click', this.doSomething);
            });
        }

        return defineComponent(ShippingOptions);
    });

})(jQuery);