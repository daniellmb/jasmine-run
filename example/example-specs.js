describe('localStorage', function () {

    var localStorage = $window.localStorage;

    afterEach(function () {
        localStorage.clear();
    });

    it('should provide a setItem method', function () {
        expect(typeof localStorage.setItem === "function").toBe(true);
    });

    it('should provide a getItem method', function () {
        expect(typeof localStorage.getItem === "function").toBe(true);
    });

    it('should provide a removeItem method', function () {
        expect(typeof localStorage.removeItem === "function").toBe(true);
    });

    it('should provide a clear method', function () {
        expect(typeof localStorage.clear === "function").toBe(true);
    });

    describe('when setting an item', function () {
        it('should change the length for new items', function () {
            expect(localStorage.length).toBe(0);
            expect(localStorage.setItem("localStorage.setItem", "test")).toBe(undefined);
            expect(localStorage.length).toBe(1);
        });
        it('should update the value for existing items', function () {
            expect(localStorage.length).toBe(0);
            localStorage.setItem("localStorage.setItem", "test1");
            localStorage.setItem("localStorage.setItem", "test2");
            expect(localStorage.length).toBe(1);
            expect(localStorage.getItem("localStorage.setItem")).toBe("test2");
        });
        it('should save as a string', function () {
            localStorage.setItem("localStorage.setItem", 1);
            expect(localStorage.length).toBe(1);
            expect(localStorage.getItem("localStorage.setItem")).toBe("1");
        });
    });

    describe('when getting an item', function () {
        it('should return a null value if the key does not exist', function () {
            expect(localStorage.getItem("localStorage.getItemMissing")).toBe(null);
        });
        it('should return the value if it exists', function () {
            localStorage.setItem("localStorage.getItem", "test");
            expect(localStorage.getItem("localStorage.getItem")).toBe("test");
        });
    });

    describe('when removing an item', function () {
        it('should do nothing if the key does not exist', function () {
            expect(localStorage.removeItem("localStorage.removeItemMissing")).toBe(undefined);
            expect(localStorage.length).toBe(0);
        });
        it('should return the value if it exists', function () {
            localStorage.setItem("localStorage.removeItem", "test");
            expect(localStorage.length).toBe(1);
            localStorage.removeItem("localStorage.removeItem")
            expect(localStorage.length).toBe(0);
            expect(localStorage.getItem("localStorage.getItem")).toBe(null);
        });
    });

    describe('when clearing all items', function () {
        it('should do nothing if there is no data', function () {
            expect(localStorage.length).toBe(0);
            expect(localStorage.clear()).toBe(undefined);
            expect(localStorage.length).toBe(0);
        });
        it('should remove all data', function () {
            localStorage.setItem("localStorage.clear1", "test1");
            localStorage.setItem("localStorage.clear2", "test2");
            localStorage.setItem("localStorage.clear3", "test3");
            expect(localStorage.length).toBe(3);
            localStorage.clear();
            expect(localStorage.length).toBe(0);
            expect(localStorage.getItem("localStorage.clear1")).toBe(null);
        });
    });

});