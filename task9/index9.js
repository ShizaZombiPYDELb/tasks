const company = {
    sales: [
        { name: 'Jhon', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};

function totalSales(company) {
    let total = 0;
    for (const i in company) {
        if (Array.isArray(company[i])){
            total += company[i].reduce((total, i) => total + i.salary, 0);
        }
        else if (typeof company[i] === 'object') {
            total += totalSales(company[i]);
        }
    }
    return total;
}

const total1 = totalSales(company);
console.log(total1);