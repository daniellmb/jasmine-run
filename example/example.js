//supply in memory storage where localStorage is not supported
(function (window) {
    if ("localStorage" in window && window.localStorage != null) {
        return;
    }
    var data = {};
    window.localStorage = {
        setItem:function (id, val) {
            if (!(id in data)) this.length++;
            data[id] = String(val);
        },
        getItem:function (id) {
            return data.hasOwnProperty(id) ? data[id] : null;
        },
        removeItem:function (id) {
            if (id in data) this.length--;
            delete data[id];
        },
        clear:function () {
            this.length = 0;
            data = {};
        },
        length:0
    };
})(this.$window || this);