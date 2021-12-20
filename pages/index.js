const Home = () => {
    return ( 
        <>
        <div className="grid items-center justify-center my-8 sm:grid-cols-2 md:mx-4 md:my-24">
            <div className="order-2 mx-6 sm:order-1">
                <p className="text-xl font-medium md:text-2xl lg:text-3xl xl:text-5xl">The world between your hand</p>
                <br/>
                <p className="text-sm font-light md:text-md lg:text-xl xl:text-2xl">We are connected the world throw sharing
                   sceince , persons , places and more ...</p>
                <br/>
                <button className="p-2 text-sm bg-yellow-400 rounded btn btn-primary md:text-md lg:text-md lg:p-3">Lets Discover ...</button>
            </div>
            <div className="order-1 mx-6 my-4 sm:order-2">
                <img src="hero_img.png" />
            </div>
        </div>
        {/* Card Section */}
        <div className="grid items-center justify-center gap-6 mx-6">
            <div className="mx-auto text-xl">Search for everything</div>
            <div className="grid grid-flow-row gap-8 sm:grid-cols-3">
                <div className="">
                    <img src="science.png"/>
                    <p>Sciense</p>
                </div>
                <div className="">
                    <img src="tech.png"/>
                    <p>Technology</p>
                </div>
                <div className="">
                    <img src="persons.png"/>
                    <p>Persons</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;