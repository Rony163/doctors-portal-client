import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw0XHL1uDqjZaN3ofqI0eolwx75TaQIT0L2kIQMjpLoOrJ4o4NSzONoHCNz8oTwU51q9K1Xwi9EfZSWNc0Y8Rp100553j9shH');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`https://still-fortress-16838.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => { setAppointment(data) })
    }, [appointmentId])
    return (
        <div>
            <h2>{appointment.patientName} please pay for {appointment.serviceName}</h2>
            <h4>${appointment.price}</h4>
            <h6>Your Appointment Date {appointment.date}</h6>
            {
                appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;