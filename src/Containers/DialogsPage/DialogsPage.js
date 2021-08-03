import React, {useState} from 'react'
import { User } from '../../Components/User/User'
import {ReactComponent as TelegrtamLogo} from '../../images/telegramLogo.svg'

import styles from './DialogsPage.module.css'

export function DialogsPage(){
    const users = [
        {id: 1, user: 'Dmitriy', lastMessage: 'Всім привіт', lastDate: 'Mon', lastMessagesCount: 44},
        {id: 2, user: 'Luda', lastMessage: 'Привіт мій дорогий', lastDate: 'Fri', lastMessagesCount: 55},
        {id: 3, user: 'Ivaka', lastMessage: 'Hello from Germany', lastDate: 'Thu', lastMessagesCount: 66},
        {id: 4, user: 'Sobaka', lastMessage: 'I am pes', lastDate: 'Wed', lastMessagesCount: 77},
        {id: 5, user: 'Tripaka', lastMessage: 'Es', lastDate: 'Sun', lastMessagesCount: 88},
        {id: 6, user: 'Kloaka', lastMessage: 'What`s going on?', lastDate: 'Mon', lastMessagesCount: 99},
        {id: 1, user: 'Dmitriy', lastMessage: 'Всім привіт', lastDate: 'Mon', lastMessagesCount: 44},
        {id: 2, user: 'Luda', lastMessage: 'Привіт мій дорогий', lastDate: 'Fri', lastMessagesCount: 55},
        {id: 3, user: 'Ivaka', lastMessage: 'Hello from Germany', lastDate: 'Thu', lastMessagesCount: 66},
        {id: 4, user: 'Sobaka', lastMessage: 'I am pes', lastDate: 'Wed', lastMessagesCount: 77},
        {id: 5, user: 'Tripaka', lastMessage: 'Es', lastDate: 'Sun', lastMessagesCount: 88},
        {id: 6, user: 'Kloaka', lastMessage: 'What`s going on?', lastDate: 'Mon', lastMessagesCount: 99},
        {id: 1, user: 'Dmitriy', lastMessage: 'Всім привіт', lastDate: 'Mon', lastMessagesCount: 44},
        {id: 2, user: 'Luda', lastMessage: 'Привіт мій дорогий', lastDate: 'Fri', lastMessagesCount: 55},
        {id: 3, user: 'Ivaka', lastMessage: 'Hello from Germany', lastDate: 'Thu', lastMessagesCount: 66},
        {id: 4, user: 'Sobaka', lastMessage: 'I am pes', lastDate: 'Wed', lastMessagesCount: 77},
        {id: 5, user: 'Tripaka', lastMessage: 'Es', lastDate: 'Sun', lastMessagesCount: 88},
        {id: 6, user: 'Kloaka', lastMessage: 'What`s going on?', lastDate: 'Mon', lastMessagesCount: 99},
    ]

    const usersElements = (() => {
        return users.map((user) => {
            return <User key={user.id} id={user.id} lastMessage={user.lastMessage} lastDate={user.lastDate} lastMessagesCount={user.lastMessagesCount} user={user.user}/>
        })
    })()

    console.log(usersElements)
    return <div >
        <div className={styles.usersWrapper}>
            {usersElements}
        </div>
    </div>
}