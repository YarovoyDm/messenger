import React, {useState} from 'react'
import {ReactComponent as Arrow} from '../../images/arrow.svg'
import {ReactComponent as MenuIcon} from '../../images/menuIcon.svg'

import styles from './SettingsPage.module.css'

export function SettingsPage(){

    return <div className={styles.settingsPage}>
        <div className={styles.settingHeader}>
            <div className={styles.settingsHeaderBack}><Arrow /></div>
            <div className={styles.settingHeaderTitle}>Настройки</div>
            <div className={styles.settingHeaderMenu}><MenuIcon /></div>
        </div>
        <div className={styles.settingsUserInfo}>
            <div className={styles.userInfoPhoto} />
            <div className={styles.userInfoName}>Дмитрий Яровой</div>
            <div className={styles.userInfoPhone}>+380 63 646-84-36</div>
        </div>
    </div>
}