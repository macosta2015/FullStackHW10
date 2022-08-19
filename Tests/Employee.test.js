const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // Act
      const employee = new Employee("Albert", "1945", "Albert@physics.com");

      // Assert
      expect(employee).toEqual({ name: "Elon", id: "1945", email: "elon@tesla.com" });
    });
  });
});
