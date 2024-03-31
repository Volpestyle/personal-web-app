import axios from "axios";
import PublicLayout from "components/layouts/public.layout";
import { Button } from "components/ui/button";
import Input from "components/ui/input";
import TextArea from "components/ui/textArea";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "styles/containers/contact/Contact.module.scss";

const Contact = () => {
  const [nameVal, setNameVal] = useState<string>("");
  const [emailVal, setEmailVal] = useState<string>("");
  const [bodyVal, setBodyVal] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!nameVal || !emailVal || !bodyVal) {
      /* addToast(`Please fill out all fields`, {
        appearance: "error",
        autoDismiss: true,
      });*/
      return;
    }
    setLoading(true);
    axios
      .post("/contact", {
        name: nameVal,
        email: emailVal,
        message: bodyVal,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          /*addToast(`Message sent!`, {
            appearance: "success",
            autoDismiss: true,
          });*/
          // console.log(res.data);
        } else {
          /* addToast(`Failed to send message! (check console log)`, {
            appearance: "error",
            autoDismiss: true,
          });*/
        }
      });
  };

  return (
    <PublicLayout showFooter={false}>
      <div className={styles.container}>
        <div className={styles.bgWrap}>
          <Image
            src={"/images/spinning-globe.gif"}
            fill={true}
            quality={100}
            alt={""}
          />
        </div>
        <div className={styles.body}>
          <h1>Hmu</h1>
          <div style={{ marginTop: "-1rem" }}>
            <Image
              src="/svgs/h-zigzag-line-white.svg"
              width={1000}
              height={10}
              alt={""}
            />
            <form className={styles.form}>
              <div className={styles.inputLabel}>
                Name
                <Input
                  value={nameVal}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNameVal(e.target.value)
                  }
                />
              </div>
              <div className={styles.inputLabel}>
                Email
                <Input
                  value={emailVal}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmailVal(e.target.value)
                  }
                />
              </div>
              <div className={styles.inputLabel}>
                Message
                <TextArea
                  value={bodyVal}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setBodyVal(e.target.value)
                  }
                />
              </div>
              {loading ? (
                <Image
                  src={"/svgs/loading-ring-white.svg"}
                  width={100}
                  height={100}
                  alt={""}
                />
              ) : (
                <Button
                  onClick={handleSendEmail}
                  style={{ color: "white", marginTop: "1rem" }}
                >
                  Send
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Contact;
