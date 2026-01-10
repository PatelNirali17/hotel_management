import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { RoomAvailabilityDashboard } from '../../component/room-availability-dashboard/room-availability-dashboard';
import { RoomTypeOccupancy } from '../../component/room-type-occupancy/room-type-occupancy';
import { RoomReservation } from '../../component/room-reservation/room-reservation';
import { CurrentBooking } from '../../component/current-booking/current-booking';
import { HousekeepingStatus } from '../../component/housekeeping-status/housekeeping-status';
import { StaffAndShiftOverview } from '../../component/staff-and-shift-overview/staff-and-shift-overview';
import { LeaveOverview } from '../../component/leave-overview/leave-overview';

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule,RoomAvailabilityDashboard,RoomTypeOccupancy,RoomReservation,CurrentBooking,HousekeepingStatus,StaffAndShiftOverview,
    LeaveOverview
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
