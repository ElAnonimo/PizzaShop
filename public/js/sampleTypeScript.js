var fooBar = (function () {
    function fooBar() {
        this.name = "Mikki";
    }
    fooBar.prototype.showMe = function () {
        console.log(this.name);
    };
    return fooBar;
}());
var foo = new fooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map