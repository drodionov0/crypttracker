import styles from '../styles/main.module.scss';
import logo from '../images/github-mark-white.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Scanner = () => {
    
    const apikey = '6RXKB146BPI2QA13C2UJYT4G3YCAXY1T94';
    const [transactions, setTransactions] = useState<any[]>([]);
    const [addresses, setAddresses] = useState<string[]>([]);

    useEffect(() => {
        const fetchAddresses = async () => {
          try {
            const response = await axios.get('/addresses.txt');
            const addressesArray = response.data.trim().split('\n');
            setAddresses(addressesArray);
          } catch (error) {
            console.error(error);
          }
        };
        fetchAddresses();
      }, []);
      
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const transactionsArray = [];
                for (let i = 0; i < addresses.length; i++) {
                    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${addresses[i]}&startblock=0&endblock=99999999&sort=asc&apikey=${apikey}`);
                    transactionsArray.push(...response.data.result);
                }
                setTransactions(transactionsArray);
                console.log(transactions);
            } catch(error) {
                console.error(error);
            }
        };
        if(addresses.length > 0) {
            fetchTransactions();
        }
    }, [addresses, apikey, transactions]);

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
                    <div className={styles.ind} key={`${transaction.hash}-${index}`}>
                        <div className={styles.hash}>hash: </div>
                        <p className={styles.text}>{transaction.hash}</p>
                        <div className={styles.hash}>from: </div>
                        <p className={styles.text}>{transaction.from}</p>
                        <div className={styles.hash}>to:</div>
                        <p className={styles.text}>{transaction.to}</p>
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