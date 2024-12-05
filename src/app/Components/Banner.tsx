import Image from "next/image";
const Banner = () => {
  return (
    <div>
      


      <div className="container col-xxl-8 px-4 py-5">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
 <div className="col-10 col-sm-8 col-lg-6" >
<Image src="/banner.png" alt="banner" width={900} height={10000} layout="intrinsic" />
 </div>

  <div className="col-lg-6">
   
    <p >Woman's Fashion</p>
    <p >Men's Fashion</p>
    <p >Electronics</p>
    <p >Home & Lifestyle</p>
    <p >Medicine</p>
    <p >Exports & Outdoor</p>
    <p >Baby’s & Toys</p>
    <p >Groceries & Pets</p>
    <p >Health & Beauty </p>
  
  </div>
</div>

</div>
    </div>
  )
}

export default Banner;



