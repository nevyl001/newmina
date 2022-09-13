import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5atxenm",
        "template_gdx8rzt",
        form.current,
        "PT9EId-6SyiTo9UTR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
                  <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <input
                      type="text"
                      id="email"
                      placeholder=" Email address"
                      name="email"
                    />
                    <button type="submit" value="Send">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.box_imgs}>
                <Link href="https://hotelnima.com/">
                  <div
                    className={styles.box_img}
                    style={{ backgroundImage: "url(/img/img_01.jpg)" }}
                  >
                    <div className={styles.overlay} />
                    <div className={styles.name}>NIMA LOCAL HOUSE</div>
                  </div>
                </Link>
                <div
                  className={styles.box_img}
                  style={{ backgroundImage: "url(/img/img_02.jpg)" }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.urban}>NIMA URBAN SPA</div>
                  <div className={styles.name_prox}>PRÓXIMAMENTE</div>
                </div>
                <Link href="https://nimalocalshop.com/blogs/nima-local-shop">
                  <div
                    className={styles.box_img}
                    style={{ backgroundImage: "url(/img/img_03.jpg)" }}
                  >
                    <div className={styles.overlay} />
                    <div className={styles.name}>NIMA LOCAL SHOP</div>
                  </div>
                </Link>
                <Link href="https://nimaeventos.com/">
                  <div
                    className={styles.box_img}
                    style={{ backgroundImage: "url(/img/img_04.jpg)" }}
                  >
                    <div className={styles.overlay} />
                    <div className={styles.name}>NIMA EVENTS</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.text_down}>
              <p>PART OF NIMA GROUP</p>
              <p>OMUN</p>
              <p>Lava lab</p>
            </div>
            <div className={styles.contact_down}>
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
      </main>
    </div>
  );
}
