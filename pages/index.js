import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import _navbar from '../components/navB';
import getData from './datafetching';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>E-SummitReplication</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
      <_navbar/>
      <br></br>
      <br></br>
      <br></br> 
       <div className="e1">
    <div className="titleStyle">EVENTS</div>
    </div>
  <div className="container1">
  <div className="line1">
      <div className="cards"><img className="displayimg" src="design.png"/></div>
     

      <div className="cards"><img className="displayimg" src="ideastorm.png"/></div>
      <div className="displayimg" id="c1"><img className="cards" src="Productathon.png"/></div>
    </div>
    <div className="line2">
      <div className="displayimg"><img className="cards" src="saleable.png"/></div>
      <div className="displayimg"><img className="cards" src="expo.png"/></div>
      <div className="displayimg" id="c2"><img className="cards" src="vista.png"/></div>
    </div>

  </div>
  <div class="position-relative">
  <div class="position-fixed bottom-0 end-0">
    <a href="paynow/"><img class="img2" src="PayNow.png"></img></a>
  </div>
</div>

</div>
  
</div>
  )
}

getData();