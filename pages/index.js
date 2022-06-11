import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import _design from '../Cards/design';
import _ideastormcard from '../Cards/ideastorm';
import _productathon from '../Cards/productathon';
import _saleable from '../Cards/saleable';
import _startupexpo from '../Cards/startupexpo';
import _vista from '../Cards/vista';
import useEffect from './fetchA';
export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>E-SummitReplication</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
      <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand p-3 mb-2 bg-dark ml-auto text-white"  href="#">
      <img src="https://www.esummit.in/fete-of-fortitude.webp"></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto padding.30rem mb-2 mb-lg-0">
        <li class="nav-item">
          
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Team">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Speakers"><style>Speakers</style></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Sponsors">Sponsors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/FAQ">FAQ</a>
        </li>
      </ul>
      <form class="d-flex">
      <a class="nav-link" href="/login">LOG IN /</a><a class="nav-link" href="/register">REGISTER</a>
      </form>
    </div>
  </div>
</nav>
      </header>
  <div className="heading">EVENTS</div>
  <div className="body">
    <div className="row1">
      <div className="card"><_design/></div>
      <div className="card"><_ideastormcard/></div>
      <div className="card"><_productathon/></div>
    </div>
    <div className="row2">
      <div className="card"><_saleable/></div>
      <div className="card"><_startupexpo/></div>
      <div className="card"><_vista/></div>
    </div>

  </div>
  
</div>
</div>
  )
}
//This func calls the esummit api
useEffect(); 