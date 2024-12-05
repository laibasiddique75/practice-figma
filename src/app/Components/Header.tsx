import Image from "next/image";
const Header = () => {
  return (

<div>
 
<header className="p-3 text-bg-tertiary">
<div className="container">
   
  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-36">
  <h1> Exclusive</h1>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-10">
      <li><a href="#" className="nav-link px-2 text-black">Home</a></li>
      <li><a href="#" className="nav-link px-2 text-black">Contact</a></li>
      <li><a href="#" className="nav-link px-2 text-black">About</a></li>
      <li><a href="#" className="nav-link px-2 text-black">Sign up</a></li>
     
     
    </ul>

    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
      <input type="search" className="form-control form-control-dark text-bg-tertiary" placeholder="Search..." aria-label="Search"/>
    
    </form> 

    <div className="text-end">

  <Image src="/heart.png" alt="heart" width={120} height={120}/>
    </div>
  </div>
</div>
</header>






</div>




  )
}

export default Header;
