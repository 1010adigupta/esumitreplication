const _navbar =()=>{
    return(
<>
<header class="header">
      <nav class="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-dark">
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
          
          <a class="nav-link px-2" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/Team">Team</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link active navActive" href="#">Events</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/Speakers">Speakers</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/Sponsors">Sponsors</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/FAQ">FAQ</a>
        </li>
        <li class="nav-item px-1">
        <a class="nav-link" href="/login">LOG IN /</a>
        </li>
        <li class="nav-item ">
        <a class="nav-link " href="/register"><img class="img1 px-1" src="register.png"></img></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
    
    </>

    );

}
export default _navbar;