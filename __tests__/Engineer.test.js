const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("constructor", () => {
        it("should create an Engineer with the given parameters", () => {
            const name = "Nara G. Neer";
            const id = 1;
            const email = "n.g.neer@gmail.com";
            const github = "NGNeer";

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });
    });

    describe("getGithub", () => {
        it("should return the Engineer's github", () => {
            const github = "not-foratu";

            const engineer = new Engineer("Norm Foratu", 1, "n.foratu@gmail.com", github);

            expect(engineer.getGithub()).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const engineer = new Engineer("name", 12, "e@mail.com", "github");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});