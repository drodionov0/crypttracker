import styles from '../styles/main.module.scss';
import logo from '../images/github-mark-white.png'
import { createClient } from '@layerzerolabs/scan-client';
import { useEffect, useState } from 'react';


const Scanner = () => {

    const [cryptoperation, setCryptoperation] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const client = createClient('mainnet');

            try{
                const { messages } = await client.getMessagesBySrcTxHash(
                    '0x0b673a48e761576b2bdea4b256f3935bfc2d8f2e',
                );

                setCryptoperation(messages)
                console.log(cryptoperation)

            }
         catch (error) {
            console.log(error)
        }
    }
        fetchData();
    }, [])

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

export default Scanner