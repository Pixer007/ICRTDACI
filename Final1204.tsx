import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer16LiftBlue from "../components/Footer16LiftBlue";
import styles from "./Final1204.module.css";

const Final1204: FunctionComponent = () => {
  return (
    <div className={styles.final120424}>
      <section className={styles.final120424Inner}>
        <div className={styles.frameParent}>
          <FrameComponent5 />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent3 />
      <section className={styles.final120424Child}>
        <div className={styles.frameGroup}>
          <div className={styles.aboutUsWrapper}>
            <h1 className={styles.aboutUs}>
              <span className={styles.about}>{`About `}</span>
              <span className={styles.us}>Us</span>
            </h1>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-87@2x.png"
          />
          <div className={styles.christDeemedToBeUniversitWrapper}>
            <div className={styles.christDeemedTo}>
              CHRIST (Deemed to be University) was born out of the educational
              vision of St Kuriakose Elias Chavara, an educationalist and social
              reformer of the nineteenth century in South India. He founded the
              first Catholic indigenous congregation, Carmelites of Mary
              Immaculate (CMI), in 1831, which administers CHRIST (Deemed to be
              University). Established in 1969 as Christ College, it undertook
              path-breaking initiatives in Indian higher education with the
              introduction of innovative and modern curricula, insistence on
              academic discipline, imparting of Holistic Education, and adoption
              of global higher education practices with the support of creative
              and dedicated staff. The University Grants Commission (UGC) of
              India conferred Autonomy to Christ College in 2004 and identified
              it as an Institution with Potential for Excellence in 2006. In
              2008 under Section 3 of the UGC Act, 1956, the Ministry of Human
              Resource Development of the Government of India declared the
              institution a Deemed to be University, in the name and style of
              Christ University. One of the first institutions in India to be
              accredited in 1998 by the NAAC, and subsequently in 2004 and 2016,
              CHRIST (Deemed to be University) has the top grade 'A' in the
              4-point scale.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <div className={styles.aboutConferenceWrapper}>
            <h1 className={styles.aboutConference}>
              <span className={styles.about1}>{`About `}</span>
              <span className={styles.conference}>Conference</span>
            </h1>
          </div>
          <div className={styles.theConferenceOn}>
            The Conference on Recent Trends in Data Analytics and Computing
            Intelligence is a prestigious gathering aimed at exploring and
            discussing the latest advancements, methodologies, and innovations
            in the fields of data analytics and computing intelligence. This
            conference serves as a platform for researchers, academicians,
            industry professionals, and practitioners to exchange ideas, present
            their research findings, and foster collaborations.
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className={styles.final120424Inner1}>
        <div className={styles.committeeMembersParent}>
          <h1 className={styles.committeeMembers}>
            <span className={styles.committee}>{`Committee `}</span>
            <span className={styles.members}>Members</span>
          </h1>
          <div className={styles.patronsWrapper}>
            <div className={styles.patrons}>Patrons</div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer16LiftBlue />
    </div>
  );
};

export default Final1204;
