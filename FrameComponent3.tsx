import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.final120424Inner}>
      <div className={styles.importantDatesParent}>
        <h1 className={styles.importantDates}>
          <span className={styles.important}>{`Important `}</span>
          <span className={styles.dates}>Dates</span>
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.febParent}>
              <div className={styles.feb}>FEB</div>
              <div className={styles.div}>23</div>
              <div className={styles.div1}>2025</div>
            </div>
            <div className={styles.submissionOfFull}>
              Submission of full paper
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.marchParent}>
              <div className={styles.march}>MARCH</div>
              <div className={styles.div2}>21</div>
              <div className={styles.div3}>2025</div>
            </div>
            <div className={styles.notificationOfAcceptance}>
              Notification of acceptance
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.aprilParent}>
              <div className={styles.april}>APRIL</div>
              <div className={styles.div4}>10</div>
              <div className={styles.div5}>2025</div>
            </div>
            <div className={styles.registrationAndCameraReady}>
              Registration and camera-ready copy submissions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
