/*Задание №1-1*/
/*type User = {
    name: string;
    age?: number;
};

const user1: User = {
    name: "Smith",
    age: 20,
};

function getInfo(user: User): string {
    return `Имя: ${user.name}, возраст: ${user.age}`;
}

console.log(getInfo(user1));*/

/*Задание №1-2*/
/*enum Roles {
    Admin = 1,
    User = 3,
    Editor = 5
};

function getInfo(): number {
    return 5; 
}

const state = getInfo();

switch (state) {
    case Roles.Admin: {
        console.log(state);
        break;
    }
    case Roles.User: {
        console.log(state);
        break;
    }
    case Roles.Editor: {
        console.log(state);
        break;
    }
}*/

/*Задание №1-3*/
/*interface Position {
    name: string;
    salary: number;
};

interface Addr {
    country: string;
    city: string;
};

interface Employee {
    name: string;
    position: Position;
    addr: Addr;
};

const employee: Employee = {
    name: "andrew",
    position: {
        name: 'programmer',
        salary: 1000
    },
    addr: {
        country: 'Belarus',
        city: 'minsk'
    }
};

function getEmployee(employee: Employee): string {
    return `Andrew:\n 
    Name: ${employee.name};\n 
    Position: ${employee.position.name};\n 
    Salary: ${employee.position.salary};\n 
    Country: ${employee.addr.country};\n 
    City: ${employee.addr.city};\n`;
}

console.log(getEmployee(employee));*/

/*Задание №1-4*/
/*interface Time {
    start: string;
    finish: string;
};

interface EventInfo {
    name: string;
    time: Time;
};

const event1: EventInfo = {
    name: "my new event",
    time: {
        start: "2025-11-01",
        finish: "2025-12-31"
    }
};

function getEventInfo(event: EventInfo): string {
    return `Event:\n 
    Name: ${event.name};\n 
    Start: ${event.time.start};\n 
    Finish: ${event.time.finish};\n`;
}

console.log(getEventInfo(event1));*/

/*Задание №2-1*/
/*type User = {
    name: string;
    age: number;
    occupation?: string;
};

const users: Array<User> = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User): string {
    return ` - ${user.name}, ${user.age}`;
}

console.log('Users:');
users.forEach((user) => {
    console.log(logPerson(user));
});*/

/*Задание №3-1*/
/*type User = {
    type: string;
    name: string;
    age: number;
    occupation?: string;
    role?: string;
};

const persons: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

function isAdmin(person: User): boolean {
    return person.type === 'admin';
}

function isUser(person: User): boolean {
    return person.type === 'user';
}

function logPerson(person: User): string {
    let additionalInformation: string = "";

    if (isAdmin(person)) {
        additionalInformation = person.role ?? "";
    }

    if (isUser(person)) {
        additionalInformation = person.occupation ?? "";
    }

    return `- ${person.name}, ${person.age}, ${additionalInformation}`;
}

console.log('Admins:');
const check1: User[] = persons.filter(isAdmin);
check1.forEach((person) => {
    console.log(logPerson(person))
});

console.log('Users:');
const check2: User[] = persons.filter(isUser);
check2.forEach((person) => {
    console.log(logPerson(person))
});*/

