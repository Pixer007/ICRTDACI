import { FunctionComponent } from "react";
import styles from "./Footer16LiftBlue.module.css";

const Footer16LiftBlue: FunctionComponent = () => {
  return (
    <footer className={styles.footer16LiftBlue}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.christParent}>
            <h1 className={styles.christ}>CHRIST</h1>
            <div className={styles.deemedToBe}>(Deemed to be University)</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-85-1.svg" />
            <h1 className={styles.icrtdaci}>ICRTDACI</h1>
          </div>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.committeeMembers}>Committee Members</div>
          <div className={styles.callForPapers}>Call for papers</div>
        </div>
        <div className={styles.contactUsParent}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.frameDiv}>
            <div className={styles.mappinParent}>
              <img
                className={styles.mappinIcon}
                loading="lazy"
                alt=""
                src="/mappin.svg"
              />
              <div className={styles.dharmaramCollegePostContainer}>
                <p className={styles.dharmaramCollegePost}>
                  Dharmaram College Post, Hosur Road, Bengaluru - 560029,
                </p>
                <p className={styles.karnatakaIndia}>Karnataka, India</p>
              </div>
            </div>
            <div className={styles.phoneParent}>
              <img
                className={styles.phoneIcon}
                loading="lazy"
                alt=""
                src="/phone.svg"
              />
              <div className={styles.div}>+91 804012 9100 / 9600</div>
            </div>
            <div className={styles.videoconferenceParent}>
              <img
                className={styles.videoconferenceIcon}
                loading="lazy"
                alt=""
                src="/videoconference.svg"
              />
              <div className={styles.div1}>40129000</div>
            </div>
            <div className={styles.envelopeParent}>
              <img
                className={styles.envelopeIcon}
                loading="lazy"
                alt=""
                src="/envelope.svg"
              />
              <div className={styles.mailchristuniversityin}>
                mail@christuniversity.in
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialParent}>
          <div className={styles.social}>Social</div>
          <div className={styles.bxlFacebookParent}>
            <img
              className={styles.bxlFacebookIcon}
              alt=""
              src="/bxlfacebook.svg"
            />
            <img
              className={styles.instagramLogoIcon}
              loading="lazy"
              alt=""
              src="/instagramlogo@2x.png"
            />
            <img
              className={styles.bxlTwitterIcon}
              loading="lazy"
              alt=""
              src="/bxltwitter.svg"
            />
            <img
              className={styles.youtubeLogoIcon}
              loading="lazy"
              alt=""
              src="/youtubelogo@2x.png"
            />
            <img
              className={styles.objectIcon}
              loading="lazy"
              alt=""
              src="/object@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer16LiftBlueInner}>
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.copyrightChristDeemedToWrapper}>
            <div className={styles.copyrightChristContainer}>
              Copyright © CHRIST (Deemed to be University) 2020 | 
              <a
                className={styles.privacyPolicy}
                href="https://christuniversity.in/privacy-policy"
                target="_blank"
              >
                <span className={styles.privacyPolicy1}>Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer16LiftBlue;
