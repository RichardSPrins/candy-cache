import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lake Elsinore Candy Cache Bash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', height: 'auto', width: '100vw', padding: '0 20px' }}>
        <div><p className='nav-title' style={{ fontSize: '40px', margin: '0px' }}>Candy Cache</p></div>
      </header>
      <hero style={{
        width: '100vw', height: '93vh',
        backgroundImage: 'url("ws_Halloween_night_1366x768.jpg")', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ borderRadius: '10px', backgroundColor: 'rgba(40, 40, 40, 0.5)', width: '30%', height: '600px', padding: '20px', display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '45px', textShadow: '2px 2px #000000' }}>Welcome to the Lake Elsinore Candy Cache</h1>
            <p>Worried about Trick or Treating this year because of COVID-19? Join in on the fun and stay safe this Halloween by visiting these Candy Cache locations in the Lake Elsinore Area</p>
            <p>This will ensure a contact-less experience for everyone out there wanting to enjoy a spooky night out, fun for the whole family!</p>
            <p>If you want to sign up to host a Candy Cache in your neighborhood, just click the button below and fill out our brief form</p>
            <button style={{ height: '55px', width: '120px', borderRadius: '15px', border: 'none', fontSize: '18px' }}><a href="https://docs.google.com/forms/d/e/1FAIpQLSeSBkIKTauyc02rihbDZCEdomhNnUBz5_MIj56kYUVqHD0Mpg/viewform?usp=sf_link" style={{ color: "black" }}>Sign up here!</a></button>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ border: '1px solid white', height: '600px', width: '600px', borderRadius: '10px', backgroundColor: 'white' }}>
              <Map />
            </div>
          </div>
        </div>

      </hero>


      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
