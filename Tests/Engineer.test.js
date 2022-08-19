const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            // Act
            const engineer = new Engineer("Albert", "1945", "physics@albert.com", 'physicsClub');

            // Assert
            expect(engineer).toEqual({ name: "Albert", id: "1945", email: "physics@albert.com", github: 'physicsClub' });
        });
    });
});