import React, {useState} from "react";
import './styles/app.scss'

export const Appointment = ({ customer, stylist, service, notes }) => {
    return(
        <div className="appointmentView">
            <table>
                <tbody>
                    <tr>
                    <td> CUSTOMER </td>
                    <td>{customer.firstName} {customer.lastName}</td>
                    </tr>
                    <tr>
                        <td>PHONE NUMBER</td>
                        <td>{customer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>STYLIST</td>
                        <td>{stylist}</td>
                    </tr>
                    <tr>
                        <td>SERVICE</td>
                        <td>{service}</td>
                    </tr>
                    <tr>
                    <td>NOTES</td>
                    <td>{notes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
  };


export const AppointmentsDayView = ({appointments}) => {

    const [selectedAppointment, setSelectedAppointment] = useState(
        0
    );

return(
    <div id="appointmentsDayView">
    <ol className="ordered__list">
    {appointments.map((appointment, i)=> (
        <li key={appointment.startsAt}>
            <button type="button"
            onClick={() => setSelectedAppointment(i)}
            >
        {appointmentTimeOfDay(appointment.startsAt)}    
            </button>
        </li>
    ))}
    </ol>
    {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
    ) : (
        <Appointment {...appointments[selectedAppointment]}/>
    )}
</div>
)
};


