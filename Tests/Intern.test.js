const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            // Act
            const intern = new Intern("Albert", "1945", "physics@albert.com", 'physicsClub');

            // Assert
            expect(intern).toEqual({ name: "Albert", id: "1945", email: "physics@albert.com", school: 'physicsClub' });
        });
    });
});