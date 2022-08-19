const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office if provided valid arguments", () => {
            // Act
            const manager = new Manager("Albert", "1945", "physics@albert.com", 'physicsClub');

            // Assert
            expect(manager).toEqual({ name: "Albert", id: "1945", email: "physics@albert.com", office: 'physicsClub' });
        });
    });
});