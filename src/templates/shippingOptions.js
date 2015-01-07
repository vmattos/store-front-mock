vtex.define(function() {
    return (function () {
        dust.register("shippingOptions", body_0);

        function body_0(chk, ctx) {
            return chk.write("<div style=\"height: 20px; width: 20px; background: brown;\"></div>");
        }

        return "shippingOptions";
    })();
});