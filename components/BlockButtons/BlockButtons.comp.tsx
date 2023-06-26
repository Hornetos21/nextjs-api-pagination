import React, { ReactNode } from 'react'
import styles from './BlockButtons.module.scss'

interface Props {
  children: ReactNode
}
const BlockButtonsComp = ({ children }: Props) => {
  return <div className={styles.block}>{children}</div>
}

export default BlockButtonsComp
