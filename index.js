// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*
// я и не собирался :)
let successful = []
let unSuccessful = []

let taxes = 0
let taxesMax = {}
let taxesMin = {}

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',
        budget: 889500,
        tax: 17,
        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {
        name: 'Samsung',
        budget: 889500,
        tax: 12,
        expensesPerYear: [
            {
                title: 'Salaries',
                total: 650400
            },
            {
                title: 'Utilites',
                total: 29000,
            },
            {
                title: 'Rent',
                total: 212000
            }
        ]
    },

]
//1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*
//2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ percent в объектах. 
//3. Сохранить в переменной taxes общее количество налогов со всех компаний. 
//4. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги
//5. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег
//5. в компании после вычета всех налогов и трат*
const setup = () => {
    console.log(bank);
    // task 4
    let arrTaxes = []
    let allTaxes = []
    for (let company of bank) {
        // task 1
        let totalExpenses = 0;
        company.expensesPerYear.forEach(expense => {
            totalExpenses = totalExpenses + expense.total
        });
        company.expensesPerMonth = Math.round(totalExpenses / 12)
        

        // task 2
        company.percent = Math.round(company.expensesPerMonth / (company.budget / 1200))

        // task 3
        taxes = taxes + company.budget / 100 * company.tax

        // task 4
        arrTaxes.push({tax : company.budget / 100 * company.tax, name : company.name})
        allTaxes.push(company.budget / 100 * company.tax)

        // task 5
        company.totalMoney = company.budget - (company.budget / 100 * company.tax + totalExpenses)

        console.log('Company name : ' + company.name);
        // task 1 result
        console.log('Task 1 - the total expenses per month are : ' + Math.round(company.expensesPerMonth));
        // task 2 result
        console.log('Task 2 - the percent of expenses per month relative to budget are : ' + Math.round(company.percent) + '%');
        // task 5 
        if (company.totalMoney > 0) {
            console.log('Task 5 - total money left : ' + company.totalMoney);
        }
        else {
            company.totalMoney = String(company.totalMoney).slice(1);
            +company.totalMoney
            console.log('Task 5 - money left : 0, and company must pay a debt in amount of : ' + company.totalMoney + ' currency');
        }
        console.log('');
    }
    // task 4
    taxesMax = Math.max(...allTaxes)
    taxesMin = Math.min(...allTaxes)
    for (let obj of arrTaxes) {
        if (obj.tax == taxesMax) {
            taxesMax = obj.name;
        }
        else if (obj.tax == taxesMin) {
            taxesMin = obj.name
        }
    }
    console.log('');
    // task 3 result
    console.log('Task 3 - the price of all taxes is : ' + taxes);
    // task 4 result
    console.log('Task 4 - the smallest taxes pay : ' + taxesMin);
    console.log('Task 4 - the biggest taxes pay : ' + taxesMax);
}

setup();