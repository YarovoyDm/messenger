import React, {useState} from 'react'
import {ReactComponent as TelegrtamLogo} from '../../images/telegramLogo.svg'

import styles from './LoginPage.module.css'

export function LoginPage(){
    return <div className={styles.loginPage}>
        <div className={styles.content}>
            <TelegrtamLogo className={styles.telegramLogo}/>
            <div className={styles.title}>Telegram</div>
            <div className={styles.subTitle}>Пожалуйста, укажите код страны и свой номер телефона.</div>
            <input className='' placeholder='E-mail'/>
            <input placeholder='Password'/>
        </div>
    </div>
}