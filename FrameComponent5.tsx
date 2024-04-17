import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-85.svg"
        />
        <div className={styles.icrtdaciWrapper}>
          <h1 className={styles.icrtdaci}>ICRTDACI</h1>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.callForPapers}>Call for papers</div>
          <div className={styles.committeeMembers}>Committee Members</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <img
        className={styles.image2Icon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
    </header>
  );
};

export default FrameComponent5;
