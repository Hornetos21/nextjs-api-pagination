import styles from './Button.module.scss'

interface Props {
  handle(): void
  text: string
  disabled?: boolean
}
const ButtonComp = ({ handle, text, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={styles.btn}
      type="button"
      onClick={handle}
    >
      {text}
    </button>
  )
}

export default ButtonComp
