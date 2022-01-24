import PublicLayout from "components/layouts/public.layout";
import Image from "next/image";
import styles from "styles/containers/contact/Contact.module.scss";
const Contact = () => {
  return (
    <PublicLayout showFooter={false}>
      <div className={styles.container}>
        <div className={styles.bgWrap}>
          <Image
            src={"/images/spinning-globe.gif"}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.body}>
          <h1>Hmu</h1>
          <div style={{ marginTop: "-1rem" }}>
            <Image
              src="/svgs/h-zigzag-line-white.svg"
              width={1000}
              height={10}
            />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Contact;
