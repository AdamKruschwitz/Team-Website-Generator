const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Constructor", () => {
        it("should create a new employee with the given parameters", () => {
            const name = "John D. Employedman";
            const id = 1;
            const email = "j.d.employedman@gmail.com";
            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });
    });

    describe("getName", () => {
        it("should return the given name", () => {
            const name = "Will Smith";
            const employee = new Employee(name, 1, "w.smith@gmail.com");

            expect(employee.getName()).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the given id", () => {
            const id = 69;
            const employee = new Employee("Big Chungus", id, "turnedHimselfIntoAPickle@gmail.com");

            expect(employee.getId()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the given email", () => {
            const email = "s.e.baka@gmail.com";
            const employee = new Employee("Sus E. Baka", 420, email);

            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const employee = new Employee("Shelbert Nelburshnelson", 1, "shelbert.n@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});