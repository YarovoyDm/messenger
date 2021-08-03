import React, {useState} from 'react'
import {ReactComponent as TelegrtamLogo} from '../../images/telegramLogo.svg'

import styles from './LoginPage.module.css'

export function LoginPage(){
    const [checkbox, setCHeckbox] = useState(true)

    const onCheckboxChange = () => {
        setCHeckbox(!checkbox)
    }

    return <div className={styles.loginPage}>
        <div className={styles.content}>
            <TelegrtamLogo className={styles.telegramLogo}/>
            <div className={styles.title}>Telegram</div>
            <div className={styles.subTitle}>Пожалуйста, укажите код страны и свой номер телефона.</div>
            <input className={styles.loginInputs} placeholder='E-mail'/>
            <input className={styles.loginInputs} placeholder='Password'/>
            <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={checkbox} onChange={onCheckboxChange}/>
                <div onClick={() => onCheckboxChange()}>Keep me signed in</div>
            </div>
            <button className={styles.qrCodeButton}>Вход по QR-коду</button>
        </div>
    </div>
}