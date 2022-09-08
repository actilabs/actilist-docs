import React from 'react'
import styles from './styles.module.css'

const Stat = (props) => {
  const { icon, label, value, loader } = props
  if (loader) {
    return (
      <div className={styles.statCard} style={{ justifyContent: 'center' }}>
        {loader}
      </div>
    )
  }
  return (
    <div className={styles.statCard}>
      <div>
        <p> {label}</p>
        <h2>{value}</h2>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  )
}

export default Stat
