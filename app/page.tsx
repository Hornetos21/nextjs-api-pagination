import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
      <h1>Spaceflight News</h1>
      <div className={styles.wrapper}>
        <img
          src="https://raw.githubusercontent.com/TheSpaceDevs/Tutorials/main/assets/snapi_poster.png"
          alt=""
        />
      </div>
    </>
  )
}
