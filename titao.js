function TiTao() {

    this.version = '0.0.1';
}

TiTao.prototype.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

TiTao.prototype.getVersion = function () {
    return this.version;
};

module.exports = new TiTao();