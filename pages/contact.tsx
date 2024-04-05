import axios from "axios";
import PublicLayout from "components/layouts/public.layout";
import { Button } from "components/ui/button";
import Input from "components/ui/input";
import TextArea from "components/ui/textArea";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "styles/containers/contact/Contact.module.scss";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [nameVal, setNameVal] = useState<string>("");
  const [emailVal, setEmailVal] = useState<string>("");
  const [bodyVal, setBodyVal] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!nameVal || !emailVal || !bodyVal) {
      toast(`Please fill out all fields`, {
        hideProgressBar: true,
      });
      return;
    }
    setLoading(true);
    axios
      .post("/api/contact", {
        name: nameVal,
        email: emailVal,
        message: bodyVal,
      })
      .then((res) => {
        setLoading(false);
        toast.success(`Message sent!`, {});
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`Failed to send message! (check console log)`, {});
        console.log(err);
      });
  };

  return (
    <PublicLayout showFooter={false}>
      <ToastContainer position="top-center" theme="dark" autoClose={5000} />
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
