import { Routes } from "@angular/router";
import { SalaryMaster } from "./salary-master/page/salary-master/salary-master";
import { BankDetails } from "./bank-details/page/bank-details/bank-details";
import { GeneratePayroll } from "./generate-payroll/page/generate-payroll/generate-payroll";
import { EmployeeSalary } from "./employee-salary/page/employee-salary/employee-salary";

export const PayrollRoutesList: Routes = [
    { path: 'salarymaster', component: SalaryMaster, data: { breadcrumb: 'Salary Master' } },
    { path: 'bankdetails', component: BankDetails, data: { breadcrumb: 'Bank Details' } },
    { path: 'generatepayroll', component: GeneratePayroll, data: { breadcrumb: 'Generate Payroll' } },
    { path: 'employeesalary', component: EmployeeSalary, data: { breadcrumb: 'Employee Salary' } },
]