import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { GeneratePayrollService } from '../../generate-payroll-service';

@Component({
  selector: 'app-generate-payroll',
  imports: [SharedModule],
  templateUrl: './generate-payroll.html',
  styleUrl: './generate-payroll.scss',
})
export class GeneratePayroll {
  GeneratePayrollDetails: any;
  page: any;
  IsEmployeeLogin!: boolean;
  IsAdminLogin!: boolean;

  constructor(private generatePayrollService: GeneratePayrollService) {
    this.GetGeneratePayroll();
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetGeneratePayroll() {
    this.generatePayrollService.GetAllGeneratePayroll().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.GeneratePayrollDetails = result
      },
    })
  }

  GenerateEmployeePayroll() {
    // ### ** Payroll Auto - Generation Logic(Field - Wise) **

    // ** payroll_id **

    // * Auto - incremented ID for each payroll record.Unique.

    // ** employee_id **

    // * Fetched from Employee Master table.Each payroll is linked to an employee.

    // ** employee_name **

    // * Fetched from Employee Master table using employee_id.

    // ** month **

    // * Month for which payroll is generated.Input by system or admin.

    // ** year **

    // * Year of payroll.Input by system or admin.

    // ** working_days **

    // * Total working days in the month.Exclude weekends and holidays if applicable.

    // ** present_days **

    // * Number of days employee was present.Fetched from Attendance records.

    // ** leave_days **

    // * Number of paid leave days taken.Fetched from Leave records.

    // ** lop_days(Loss of Pay Days) **

    // * Days salary is deducted due to unpaid absence.
    // * Calculation: `lop_days = working_days - (present_days + leave_days)`

    //       ** overtime_hours **

    // * Extra hours worked by employee.Fetched from Attendance or Overtime records.

    // ** overtime_amount **

    // * Amount earned for overtime.
    // * Formula: `overtime_amount = overtime_hours × overtime_rate`
    //         * Example OT rate: `(basic_salary ÷ working_days ÷ 8) × OT_multiplier`

    //           * OT_multiplier is usually 1.5 for extra hours.

    // ** gross_salary **

    // * Total salary before deductions.
    // * Formula: `gross_salary = basic_salary + hra + da + conveyance + medical_allowance + special_allowance + bonus + overtime_amount`

    //       ** total_deductions **

    // * Total deductions from salary.
    // * Components:

    //   * `lop_deduction = (basic_salary ÷ working_days) × lop_days`
    //       * `pf_deduction = 0.12 × basic_salary`(example 12 % PF)
    //       * `esi_deduction` = fixed % if applicable
    //         * `professional_tax` = fixed per state slab
    //           * `other_deductions` = any manual adjustments(advance, fines, etc.)
    //             * Formula: `total_deductions = pf_deduction + esi_deduction + professional_tax + lop_deduction + other_deductions`

    //               ** net_salary **

    // * Final salary after deductions.
    // * Formula: `net_salary = gross_salary - total_deductions`

    //       ** payment_status **

    // * Default: `"Pending"` when payroll is generated.
    // * Update to `"Paid"` after salary is transferred.

    // ** payment_date **

    // * Null if pending.Set to actual date when payment is made.

  }
}
