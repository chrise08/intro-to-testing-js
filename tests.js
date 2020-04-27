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

describe("isEven", function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should never return "undefined" when called', function () {
        expect(isEven()).not.toBe(undefined);
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed the string "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed the string "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when passed the boolean of true', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false when passed the boolean of false', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
})

describe("isVowel", function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should never return "undefined" when called', function () {
        expect(isVowel()).not.toBe(undefined);
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed the string "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed the string "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false when passed the string "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false when passed the number 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed the boolean of true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when passed the boolean of false', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false when passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false)
    });
})

