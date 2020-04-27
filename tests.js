// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("isNumeric", function () {
    it('should be a defined function', function () {
        expect(typeof isNumeric).toBe("function");
    });
    it('should return a boolean value when called', function () {
        expect(typeof isNumeric()).toBe("boolean");
    });
    it('should return true when passed the number 5', function () {
        expect(isNumeric(5)).toBe(true);
    });
    it('should should return false when passed the string "Jim Henson"', function () {
        expect(isNumeric("Jim Henson")).toBe(false);
    });
    it('should return false when passed the array [1,2,3]', function () {
        expect(isNumeric([1,2,3])).toBe(false);
    });
    it('should return false when passed an object', function () {
        expect(isNumeric({name: "Carole Baskin", occupation: "Big Cat Enthusiast"})).toBe(false);
    });
    it('should return false when passed no arguments', function () {
        expect(isNumeric()).toBe(false);
    });
})

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed boolean true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed boolean false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return false when passed an empty string', function () {
        expect(sayHello("")).toBe(false);
    });
})

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean value when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the string "5"', function () {
        expect(isFive("5")).toBe(true);
    });
})