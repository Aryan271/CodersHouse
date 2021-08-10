import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "6px",
  };

  const history = useHistory();

  function startRegister() {
    history.push("/register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse!" icon="logo">
        <p className={styles.text}>
          We are working hard to get CodersHouse ready for everyone! While we
          wrap up the finishing touches, we're adding people gradually to make
          sure nothing breaks.
        </p>

        <div>
          <Button onClick={startRegister} text="Get your Username" />
        </div>

        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite code?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
