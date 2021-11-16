import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://still-fortress-16838.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2>Our doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={Doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;