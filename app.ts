import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(peopleAccount)
peopleAccount.withdraw(100)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
console.log(companyAccount)
companyAccount.withdraw(200)
console.log(companyAccount)
