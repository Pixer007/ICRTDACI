import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.final120424Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-28@2x.png"
            />
            <h3 className={styles.drFrBenny}>Dr. Fr. Benny Thomas</h3>
            <div className={styles.directorWrapper}>
              <div className={styles.director}>Director</div>
            </div>
          </div>
          <div className={styles.drJobyThomasParent}>
            <h3 className={styles.drJobyThomas}>Dr. Joby Thomas</h3>
            <div className={styles.deanWrapper}>
              <div className={styles.dean}>Dean</div>
            </div>
            <div className={styles.jobyThomas1Wrapper}>
              <img
                className={styles.jobyThomas1}
                loading="lazy"
                alt=""
                src="/joby-thomas-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.honoraryConferenceChairParent}>
            <div
              className={styles.honoraryConference}
            >{`Honorary & Conference Chair`}</div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.drMvinayParent}>
                  <h3 className={styles.drMvinay}>Dr. M.Vinay</h3>
                  <div className={styles.programCoOrdinator}>
                    Program Co-ordinator
                  </div>
                </div>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/frame-32@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
