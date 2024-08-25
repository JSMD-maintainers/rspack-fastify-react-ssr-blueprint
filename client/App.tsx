import React, { JSX } from "react";
import { LogoContainer } from "./LogoContainer";
import styles from "./App.module.css";
import { RootComponentProps } from "../global";

function App(props: RootComponentProps["rootComponentProps"]): JSX.Element {
  return (
    <header className={styles.header}>
      <h3>Welcome to the JSMDG's {props.hello} Setup! 🚀</h3>
      <p>
        Kickstart your next project with our powerful, scalable foundation,
        designed to help you build modern and fast applications effortlessly.
      </p>
      <br />
      <div className={styles.wrapper}>
        <code>
          Featuring <strong>Rspack</strong>, <strong>Fastify</strong>, and{" "}
          <strong>React</strong> for a blazing fast, scalable, and modern web
          application
        </code>
      </div>
      <LogoContainer />
      <p>
        Go and check out other open-source projects{" "}
        <a className={styles.appLink} href="https://github.com/jsmdg">
          on Github
        </a>{" "}
        👾
      </p>
    </header>
  );
}

export { App };
