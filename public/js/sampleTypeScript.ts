class fooBar {
    private name = "Mikki";
    showMe() {
        console.log(this.name);
    }
}
var foo = new fooBar();
foo.showMe();