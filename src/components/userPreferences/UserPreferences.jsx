export default function UserPreferences({children, icon, styles, FontAwesomeIcon}) {
  return (
    <div>
      <div className={styles.userDataText}>{children}</div>
      <div>
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
