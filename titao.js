function TiTao() {

    this.version = '0.0.1';
}

//Array Functions

TiTao.prototype.isArray = Array.isArray || function (obj) {
    return obj instanceof Array;
};

TiTao.prototype.first = function (array) {
     if (array == null) return void 0;
     return array[0];
};

TiTao.prototype.initial = function (array, n) {
    return Array.prototype.slice.call(array, 0, array.length - (n == null? 1: n));
};

TiTao.prototype.head = function (array) {
    return this.initial(array, 1);
};

TiTao.prototype.rest = function (array, n) {
    return Array.prototype.slice.call(array, n == null? 1 : n);
};

TiTao.prototype.tail = function (array) {
    return Array.prototype.slice.call(array, 1);
};


//Misc. Functions

TiTao.prototype.getVersion = function () {
    return this.version;
};

module.exports = new TiTao();
