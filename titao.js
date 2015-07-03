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

TiTao.prototype.last = function (array) {
    if (array == null) return void 0;
    return array[array.length - 1];
}

TiTao.prototype.rest = function (array, n) {
    return Array.prototype.slice.call(array, n == null? 1 : n);
};

TiTao.prototype.forEach = function(array, callback) {
    var i;

    if (this.isArray(array) == false) return void 0;
    for (i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

//change to use each
TiTao.prototype.compact = function (array) {
    var i,
        v = [];

    if (this.isArray(array) == false) return void 0;
    this.forEach(array, function (value, i, array) {
        if (value) v.push(value);
    });
    return v;
};

TiTao.prototype.head = function (array) {
    if (this.isArray(array) === false) return void 0;
    if (array.length === 1) return array;
    return this.initial(array, 1);
};

TiTao.prototype.tail = function (array) {
    if (this.isArray(array) === false) return void 0;
    if (array.length === 1) return array;
    return this.rest(array, 1)
};

//Misc. Functions

TiTao.prototype.getVersion = function () {
    return this.version;
};

module.exports = new TiTao();
