type Employee = {
    id: number;
    name: string;
    retire: (date: Date) => void;
}

let employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
}
employee.name = 'John Doe';