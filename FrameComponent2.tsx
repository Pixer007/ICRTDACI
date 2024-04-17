import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.final120424Inner}>
      <div className={styles.frameParent}>
        <div className={styles.confrenceTopicsWrapper}>
          <h1 className={styles.confrenceTopics}>
            <span className={styles.confrence}>{`Confrence `}</span>
            <span className={styles.topics}>Topics</span>
          </h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.image5Parent}>
              <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
              <textarea
                className={styles.frameChild}
                placeholder={`Computational Intelligent systems and soft
computing`}
                rows={9}
                cols={20}
              />
            </div>
          </div>
          <div className={styles.image6Parent}>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <h3 className={styles.computationalImagingAnd}>
                Computational imaging and signal processing
              </h3>
            </div>
          </div>
          <div className={styles.image7Parent}>
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
            <textarea
              className={styles.frameInner}
              placeholder={`Computational methods in biomedical signal processing & telemedicine`}
              rows={7}
              cols={21}
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.image8Parent}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
              <textarea
                className={styles.frameTextarea}
                placeholder="Computational intelligence in Wireless networks "
                rows={9}
                cols={20}
              />
            </div>
          </div>
          <div className={styles.image9Parent}>
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <h3 className={styles.computationalIntelligenceApp}>
                Computational intelligence applications
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
