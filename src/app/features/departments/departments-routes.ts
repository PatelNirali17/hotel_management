import { Routes } from "@angular/router";
import { DepartmentMaster } from "./department-master/page/department-master/department-master";
import { DepartmentOverview } from "./department-overview/page/department-overview/department-overview";
import { DesignationMaster } from "./designation-master/page/designation-master/designation-master";

export const DepartmentsRoutesList: Routes = [
    { path: 'departmentmaster', component: DepartmentMaster, data: { breadcrumb: 'Department Master' } },
    { path: 'departmentoverview', component: DepartmentOverview, data: { breadcrumb: 'Department Overview' } },
    { path: 'designation', component: DesignationMaster, data: { breadcrumb: 'Designation Master' } },
]