const Home = () => {
    return ( 
        <>
        <div className="grid items-center justify-center my-8 sm:grid-cols-2">
            <div className="order-2 mx-6 sm:order-1">
                <p className="text-xl font-medium">The world between your hand</p>
                <br/>
                <p className="text-sm font-light">We are connected the world throw sharing
                   sceince , persons , places and more ...</p>
                <br/>
                <button className="p-2 text-sm bg-yellow-400 rounded btn btn-primary">Lets Discover ...</button>
            </div>
            <div className="order-1 mx-6 my-4 sm:order-2">
                <img src="hero_img.png" />
            </div>
        </div>
        {/* Card Section */}
        <div className="grid items-center justify-center">
            <div className="mx-auto text-xl">Search for everything</div>
            <div className="grid grid-flow-row sm:grid-cols-3">
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