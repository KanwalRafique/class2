

export default async function About(){
    await new Promise((resolve) => { setTimeout(resolve, 2000)});
    
    return(
    <div>
        <br></br>
        <h1 className="text-center text-4xl">About Us</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <p className="mb-4 ml-32">Limelight (Maypole Pvt. Ltd) is a renowned Pakistan fashion brand founded in 2010 offering high-quality trending products at affordable prices on almost daily basis!
        
        </p>
        <br></br>
        <p className="mb-4 ml-32">The Eastern and Western apparel, accessories and fragrances for Women, Men and Girls are available in our 85 stores across Pakistan and online.</p>
<br></br>

<img src="https://www.limelight.pk/cdn/shop/files/cambric-RTW_Mobile-size_9110c85c-821d-4279-b2e5-7d29bb13387f_675x.jpg?v=1727441600" alt="About Us" className="ml-80"/>

        </div>
    )
}