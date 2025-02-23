import { FunctionComponent } from 'react';
import styles from './Header.module.css';


const Header:FunctionComponent = () => {
  	return (
    		<div className={styles.header}>
      			<div className={styles.leftParent}>
        				<div className={styles.left}>
          					<b className={styles.weeb}>Happen</b>
          					{/* <div className={styles.buttonsGroup}>
            						<div className={styles.menuItem}>
              							<div className={styles.buttonText}>About Us</div>
            						</div>
            						<div className={styles.menuItem}>
              							<div className={styles.buttonText}>Solutions</div>
            						</div>
            						<div className={styles.menuItem}>
              							<div className={styles.buttonText}>Pricing</div>
            						</div>
            						<div className={styles.menuItem}>
              							<div className={styles.buttonText}>Resources</div>
            						</div>
          					</div> */}
        				</div>
        				<div className={styles.buttonsGroup1}>
          					<div className={styles.button}>
            						<div className={styles.textContainer}>
              							<div className={styles.buttonText}>Log In</div>
            						</div>
          					</div>
          					<div className={styles.button1}>
            						<div className={styles.textContainer}>
              							<div className={styles.buttonText}>Join Now</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Header;
