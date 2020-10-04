import React from 'react';
import styles from './DoctorCard.module.css';

export default function DoctorCard(props) {

  return (
    <div className={styles.doctorCardContainer}>
      <img src={props.doctor.photo} alt="Doctor" className={styles.doctorPhoto}></img>
      <div className={styles.doctorInfo}>
        <span className={styles.infoName}>{props.doctor.name}</span>
        <span className={styles.infoProf}>{props.doctor.prof}</span>
      </div>
    </div>
  )
}
