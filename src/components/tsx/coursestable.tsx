import styles from '../styles/main.module.scss';
import logo from '../images/github-mark-white.png'

const Coursetable = () => {
    return(
        <div className={styles}>
            <body>
                <div className={styles.page}>
                    <div className={styles.nav}>
                        <h2>CRYPT CHECKER</h2>
                    </div>
                </div>



                <div className={styles.footer}>
                    <div className={styles.fotphoto}>
                        <a href='https://github.com/drodionov0'><img src={logo} alt='git' width='30px'></img></a>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Coursetable