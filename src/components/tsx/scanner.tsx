import styles from '../styles/main.module.scss';
import logo from '../images/github-mark-white.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Scanner = () => {
    
    const address = '0x0b673a48e761576b2bdea4b256f3935bfc2d8f2e';
    const apikey = '6RXKB146BPI2QA13C2UJYT4G3YCAXY1T94';
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        const fetchTransaction = async () => {
            try{
                const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apikey}`)
                setTransactions(response.data.result);
            } catch(error) {
                console.error(error);
            }
        }
        fetchTransaction();
    }, [address])

    return(
        <div className={styles}>
            <body>
                <div className={styles.page}>
                    <div className={styles.nav}>
                        <h2>CRYPT CHECKER</h2>
                    </div>
                </div>
                <div className={styles.scans}>
                        {transactions.map((transaction, index) => (
                            <div className={styles.ind}>
                                <p className={styles.hash}>hash: </p><p className={styles.text} key={index}>{transaction.hash}</p>  <p className={styles.hash}>from: </p><p className={styles.text} key={index}>{transaction.from}</p>  <p className={styles.hash}>to:</p><p className={styles.text} key={index}>{transaction.to}</p>
                            </div>
                        ))}
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

export default Scanner