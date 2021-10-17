const Manager = include("../lib/Manager.js");

describe("Manager", () => {
    describe("constructor", () => {
        it("Should return a manager with the given parameters", () => {
            const name = "Man Agerman";
            const id=1;
            const email = "m.agerman@gmail.com";
            const officeNumber = 1;
            
            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getRole", () => {
        it("Should return 'Manager'", () => {
            const manager = new Manager("Jack Black", 42, "jblack@rock.com", 1);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});