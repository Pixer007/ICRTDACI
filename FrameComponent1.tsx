import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.final120424Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.drFrJoseCcParent}>
            <h3 className={styles.drFrJose}>Dr. Fr. Jose CC</h3>
            <div className={styles.viceChancellorWrapper}>
              <div className={styles.viceChancellor}>Vice Chancellor</div>
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-34@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.drAnilJosephPWrapper}>
              <h3 className={styles.drAnilJoseph}>Dr Anil Joseph P</h3>
            </div>
            <div className={styles.registrar}>Registrar</div>
            <div className={styles.anilPinto1Wrapper}>
              <img
                className={styles.anilPinto1}
                loading="lazy"
                alt=""
                src="/anil-pinto-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.conferenceGeneralChairWrapper}>
          <div className={styles.conferenceGeneralChair}>
            Conference General Chair
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
