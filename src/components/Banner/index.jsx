import styles from './Banner.module.css'


const BannerHome = () => {
    
  return (
    <div className={styles.banner_container}>
        <div className={styles.banner_content}>
            <h1 className={styles.title}>Schedule your service now</h1>
            <h3 className={styles.slogan}>Guardian Security your partner</h3>
        </div>
    </div>
    );
}

export default BannerHome