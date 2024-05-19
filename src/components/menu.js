

function App() {
    return (
      <>
<header id="header" class="fixed-top d-flex align-items-center">
<div class="container d-flex justify-content-between align-items-center">

  <div class="logo">
    <h1><a href="/customer">RRA-CLAIM</a></h1>
    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
  </div>

  <nav id="navbar" class="navbar">
    <ul>
      <li><a class="active " href="/customer">Home</a></li>
      <li><a href="/claim">claim</a></li>
      <li><a href="/myclaim">my claims</a></li>
      <li><a href="/logout">logout</a></li>
   
    </ul>
    <i class="bi bi-list mobile-nav-toggle"></i>
  </nav>

</div>
</header>
  
  
      </>
    );
  }
  
  export default App;
  