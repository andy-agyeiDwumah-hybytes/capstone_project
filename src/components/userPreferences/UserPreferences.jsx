export default function UserPreferences({children, icon, styles, FontAwesomeIcon, dataContent}) {
  return (
    <div className={styles.userPreferenceFlexWrapper}>
      <div className={styles.userDataText}>{children}</div>
      <div data-content={dataContent}>
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
