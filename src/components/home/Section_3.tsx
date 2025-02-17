import React from "react";
import styles from "./Section_3.module.css";
import { CiMobile1 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Section_3 = (props: Props) => {
  return (
    <section className={styles.section3}>
      <h2>
        Some of my <br />
        Practice Projects
      </h2>
      <div className={styles.cardsDiv}>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_1}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/1-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://pricingpagedemo.netlify.app/"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_9}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/9-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://searchyourcountryname.netlify.app/"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_2}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/2-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://designstudioofnoman.netlify.app/"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.colordiv}>
          <div className={styles.colordivs_3}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/3-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://tourpagehomenoman.netlify.app/"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_4}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/4-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://multistepappnoman.netlify.app"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_5}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/5-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://sitelandingpagenoman.netlify.app"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_6}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/6-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://tipcalculatorappnextjs.netlify.app"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_7}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/7-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://newshomepagemainnoman.netlify.app"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.colordiv}>
          <div className={styles.colordivs_8}></div>
          <div className={styles.imageAndText}>
            <Image
              src="/8-d.JPG"
              alt="project image"
              width={400}
              height={200}
              className={styles.image}
            />
            <div className={styles.texts}>
              <h3> My contributions</h3>
              <p>
                <CgWebsite className={styles.circle} />
                Frontend development
              </p>
              <p>
                <CiMobile1 className={styles.circle} />
                Mobile responsiveness
              </p>
              <Link
                href="https://introsectionwithdropdownnvigation.netlify.app"
                className={styles.link}
              >
                <button>
                  <p>
                    Demo website <FaArrowRightToBracket />
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_3;
