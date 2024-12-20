// Styles
import styles from "./UserDetails.module.css";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faHeart,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
// React
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useContext } from "react";
// Components
import UserPreferences from "../../components/userPreferences/UserPreferences";
// Context
import { UserContext } from "../../context/UserContext";

export default function UserDetails() {
  const { handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogOut();
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>My details | VocabVault</title>
      </Helmet>
      <section
        aria-labelledby="my-details"
        className={[styles.section, "section"].join(" ")}
      >
        <div className={[styles.headingWrapper, "h2Wrapper"].join(" ")}>
          <h2 id="my-details">My Details</h2>
        </div>
        <div className="setPaddingInline">
          <div className={styles.logOutWrapper}>
            <button onClick={handleClick} className={styles.logoutBtn}>
              Log out
            </button>
          </div>
          <hr className={styles.horizontalLine} />
          <div className={styles.mainContentWrapper}>
            <div className={styles.overlay}>
              <div className={styles.imageEditProfileWrapper}>
                <div className={styles.addImageWrapper}>
                  <button type="button" className={styles.addImageBtn}>
                    Add image
                  </button>
                </div>
                <div className={styles.editProfileWrapper}>
                  <button type="button" className={styles.editBtn}>
                    Edit profile
                  </button>
                </div>
              </div>
              <div className={styles.userDataWrapper}>
                <UserPreferences
                  icon={faBookOpenReader}
                  styles={styles}
                  FontAwesomeIcon={FontAwesomeIcon}
                >
                  My learning
                </UserPreferences>
                <UserPreferences
                  icon={faHeart}
                  styles={styles}
                  FontAwesomeIcon={FontAwesomeIcon}
                >
                  Saved Words
                </UserPreferences>
                <UserPreferences
                  icon={faShieldHalved}
                  styles={styles}
                  FontAwesomeIcon={FontAwesomeIcon}
                >
                  Privacy Settings
                </UserPreferences>
                <div className={styles.deleteAccountWrapper}>
                  <button type="button" className={styles.deleteBtn}>
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
