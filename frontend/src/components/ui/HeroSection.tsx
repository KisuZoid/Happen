import { FunctionComponent } from 'react';
import styles from './HeroSection.module.css';
import { SignedIn, SignedOut, SignInButton} from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const HeroSection: FunctionComponent = () => {
	const navigate = useNavigate();

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
					<p className={styles.sitElitFeugiat}>
						Stay Connected. Stay Updated. Experience Campus Life Like Never Before.
					</p>
					<p className={styles.sitElitFeugiat}>
						Happen makes it easy to host events, connect with campus communities, and engage in college life effortlessly
					</p>
				</div>

				<div className={styles.buttonsGroup}>
					<SignedOut>
						<div className={styles.button}>
							<div className={styles.textContainer}>
								<SignInButton>
									<button className={styles.buttonText}>Get Started</button>
								</SignInButton>
							</div>
						</div>
					</SignedOut>

					<SignedIn>
						<div className={styles.button}>
							<div className={styles.textContainer}>
								<button
									className={styles.buttonText}
									onClick={() => navigate('/create-event')}
								>
									Create Event
								</button>
							</div>
						</div>
					</SignedIn>
				</div>
			</div>
			<div className={styles.sectionItem} />
		</div>
	);
};

export default HeroSection;
