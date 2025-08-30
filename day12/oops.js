class Person {
    constructor() {
        this.id = 101;
        this.name;
    }
    changeNname(name) {
        this.name = name;
    }
    prints() { console.log(`name: ${this.name}`) }
};

class Student extends Person {
    constructor() {
        super(name);
        this.Class;
        this.section;
    }
    changeSection(Class, section) {
        this.Class = Class;
        this.section = section;
    }
    prints() {
        console.log(`name: ${this.name} in ${this.Class}, ${this.section} `)
    }
};

const s1 = new Student();
s1.changeNname('Hari');
s1.changeSection(12, 'A');
s1.prints();