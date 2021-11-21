import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Login.module.scss";
import { Popover, ArrowContainer } from "react-tiny-popover";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import router from "next/router";
//https://github.com/react-hook-form/resolvers/issues/271
const { yupResolver } = require("@hookform/resolvers/yup");

const Login: NextPage = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { addToast } = useToasts();

  const makeVisibleHandler = () => {
    document.querySelector("svg")!.style.visibility = "visible";
  };
  const makeHiddenHandler = () => {
    document.querySelector("svg")!.style.visibility = "hidden";
  };

  useEffect(() => {
    document.querySelector("svg")!.style.visibility = isPopoverOpen
      ? "visible"
      : "hidden";
    const h2 = document.querySelector("h2");
    if (isPopoverOpen) return;
    else {
      h2!.addEventListener("mouseover", makeVisibleHandler);
      h2!.addEventListener("mouseleave", makeHiddenHandler);
    }
    return () => {
      h2!.removeEventListener("mouseover", makeVisibleHandler);
      h2!.removeEventListener("mouseleave", makeHiddenHandler);
    };
  }, [isPopoverOpen]);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(`LOGGING IN: ${email}, ${password}`);
    try {
      const user = await Auth.signIn(email, password);
      router.push("/cms/dashboard");
      addToast("Logged in successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      console.error("Error signing in:", error);
      addToast("Failed to log-in", { appearance: "error", autoDismiss: true });
    }
  };

  const schema = Yup.object()
    .shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    })
    .required();

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Login to CMS</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.login_header}>
          <Popover
            isOpen={isPopoverOpen}
            positions={["top", "bottom", "left", "right"]} // preferred positions by priority
            onClickOutside={() => setIsPopoverOpen(!isPopoverOpen)}
            content={({ position, childRect, popoverRect }) => (
              <ArrowContainer
                position={position}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowColor={"rgba(255, 255, 255, 0.678)"}
                arrowSize={10}
              >
                <div className={styles.popover}>
                  The entrance to the backend...
                </div>
              </ArrowContainer>
            )}
          >
            <div className={styles.header}>
              <h2 onClick={() => setIsPopoverOpen(!isPopoverOpen)}>login</h2>
              <FontAwesomeIcon size={"sm"} icon={faInfoCircle} />
            </div>
          </Popover>
        </div>
        <form
          className={styles.login_form}
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <label htmlFor="login-email">email</label>
            <input type="text" id="login-email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="login-password">password</label>
            <input
              type="password"
              id="login-password"
              {...register("password")}
            />
          </div>
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
};

export default Login;
