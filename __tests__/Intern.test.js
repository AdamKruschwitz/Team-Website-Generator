const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("constructor", () => {
        it("should return an intern with the given values", () => {
            const name = "Danny Phantom";
            const id = 14;
            const email = "goin-ghost@spook.edu";
            const school = "Spook Community College";
            const intern = new Intern(name, id, email, school);

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("should return the given school", () => {
            const school = "Ithaca College";
            const intern = new Intern("Adam Kruschwitz", 19, "a.j.kruschwitz@gmail.com", school);

            expect(intern.getSchool()).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern("name", 99, "e.m@il.com", "Kindergarten");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});