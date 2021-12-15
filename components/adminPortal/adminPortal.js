import { useState } from 'react'
import ImagesEditor from '../imagesEditor/imagesEditor'
import LoginForm from '../loginForm/loginForm'
import ServicesEditor from '../servicesEditor/servicesEditor'
import styles from './adminPortal.module.css'

export default function AdminPortal(){
  const [token, setToken] = useState(false)
  const [editor, setEditor] = useState('')

  return (<div className={styles.container}>
    {token ? <>
      <h1 className={styles.h1}>{editor ? editor : 'Admin portal'}</h1>
      {editor && <button className={styles.backBtn} onClick={_ => {setEditor('')}}>{'< Back to admin portal'}</button>}
      {!editor && <div className={styles.editorsList}>
        {['Services', 'Images', 'About'].map((editorType, index) => {
          return (<button 
            className={styles.editorBtn} 
            key={index}
            onClick={_ => {setEditor(editorType)}}
          >{editorType}</button>)
        })}</div>
      }
      {editor === 'Services'
      ? <ServicesEditor token={token}/>
      : editor === 'Images'
      ? <ImagesEditor token={token}/>
      : editor === 'About'
      ? <></>
      : ''
      }
    </> : <LoginForm setToken={setToken} />}
  </div>)
}