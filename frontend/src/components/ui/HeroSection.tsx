import { FunctionComponent } from 'react';
import styles from './HeroSection.module.css';


const HeroSection:FunctionComponent = () => {
  	return (
    		<div className={styles.section}>
      			<div className={styles.sectionChild} />
      			<div className={styles.sectionText}>
        				<div className={styles.top}>
          					<div className={styles.mainHeadline}>
            						<span> Discover,</span>
            						<span> Connect,</span>
            						<span> Engage</span>


          					</div>
        				</div>
        				<div className={styles.paragraph}>
          					<p className={styles.sitElitFeugiat}>Stay Connected. Stay Updated. Experience Campus Life Like Never Before.</p>
          					<p className={styles.sitElitFeugiat}>Happen makes it easy to host events, connect with campus communities, and engage in college life effortlessly</p>
        				</div>
        				<div className={styles.buttonsGroup}>
          					<div className={styles.button}>
            						<div className={styles.textContainer}>
              							<div className={styles.buttonText}>Join Now</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			{/* <div className={styles.screendesktop}>
        				<div className={styles.topBar}>
          					<div className={styles.circles}>
            						<img className={styles.iconJamIconsFilledCi} alt="" src="icon / jam-icons / filled / circle-f.svg" />
            						<img className={styles.iconJamIconsFilledCi} alt="" src="icon / jam-icons / filled / circle-f.svg" />
            						<img className={styles.iconJamIconsFilledCi} alt="" src="icon / jam-icons / filled / circle-f.svg" />
          					</div>
          					<div className={styles.arrows}>
            						<img className={styles.iconJamIconsOutlineL} alt="" src={`icon / jam-icons / outline & logos / chevron-left.svg`} />
            						<img className={styles.iconJamIconsOutlineL} alt="" src={`icon / jam-icons / outline & logos / chevron-right.svg`} />
          					</div>
          					<div className={styles.addressBar}>
            						<div className={styles.feature}>app.weeb.ai</div>
          					</div>
        				</div>
        				<img className={styles.desktopAppPlaceholder1Icon} alt="" src="Desktop-App-Placeholder-1.svg" />
      			</div> */}
      			<div className={styles.sectionItem} />
    		</div>);
};

export default HeroSection;
