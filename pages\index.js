import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pakistan Cricket Team</title>
        <meta name="description" content="Pakistan Cricket Team Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pakistan Cricket Team
        </h1>

        <Image src="/logo.png" alt="Pakistan Cricket Team Logo" width={200} height={200} />

        <section className={styles.players}>
          <h2>Players</h2>
          <ul>
            <li>Babar Azam</li>
            <li>Mohammad Rizwan</li>
            <li>Fakhar Zaman</li>
            <li>Shaheen Afridi</li>
          </ul>
        </section>

        <section className={styles.schedule}>
          <h2>Upcoming Matches</h2>
          <ul>
            <li>Pakistan vs England (T20)</li>
            <li>Pakistan vs Australia (ODI)</li>
            <li>Pakistan vs New Zealand (Test)</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Pakistan Cricket Team</p>
      </footer>
    </div>
  );
}

export default Home;