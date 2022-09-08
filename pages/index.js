import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nima</title>
        <meta name="description" content="Nima" />
        <link rel="icon" href="/" />
      </Head>
      <main className={styles.main}>
        <div className={styles.test}>
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.scroll_box}>
                <div className={styles.logo}>
                  <Image
                    src="/img/logo.png"
                    alt="Logo2"
                    width={303}
                    height={106}
                  />
                </div>

                <div className={styles.text_left}>
                  <p>PART OF NIMA GROUP</p>
                  <p>OMUN</p>
                  <p>Lava lab</p>
                </div>
                <div className={styles.contact}>
                  <div className={styles.text}>
                    <p>Sign Up For Exclusive Offers</p>
                  </div>
                  <form
                    className={styles.form}
                    action="/send-data-here"
                    method="post"
                  >
                    <input
                      type="text"
                      id="last"
                      placeholder=" Email address"
                      name="last"
                    />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.box_imgs}>
                <div
                  href="#"
                  className={styles.box_img}
                  style={{ backgroundImage: "url(/img/img1.png)" }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.name}>ASD ASD ASD</div>
                </div>
                <div
                  href="#"
                  className={styles.box_img}
                  style={{ backgroundImage: "url(/img/img2.png)" }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.name}>ASD ASD ASD</div>
                </div>
                <div
                  href="#"
                  className={styles.box_img}
                  style={{ backgroundImage: "url(/img/img3.png)" }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.name}>ASD ASD ASD</div>
                </div>
                <div
                  href="#"
                  className={styles.box_img}
                  style={{ backgroundImage: "url(/img/img4.png)" }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.name}>ASD ASD ASD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
