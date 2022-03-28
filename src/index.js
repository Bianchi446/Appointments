import React from 'react';
import  ReactDOM  from 'react';
import { AppointmentsDayView } from './Appointment';
import { sampleAppointments } from './sampleData';

ReactDOM.render(
    <AppointmentsDayView appointments={sampleAppointments}/>,
    document.getElementById('root')
);

