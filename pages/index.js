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
            <div className="order-1 mx-6 my-4 transform sm:order-2 md:skew-y-3">
            <div class="relative w-full hidden md:block">
                <div class="absolute bg-yellow-400 rounded-full -top-10 -left-4 w-96 h-96 mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                </div>
                <img src="hero_img.png" class="relative" />
            </div>
        </div>
        {/* Card Section */}
        <div className="grid items-center justify-center gap-6 mx-6 my-32">
            <div className="mx-auto text-xl font-medium">Search for everything</div>
            <div className="grid grid-flow-row gap-8 sm:grid-cols-3">
                <div className="grid place-items-center">
                    <img src="science.png"/>
                    <p>Sciense</p>
                </div>
                <div className="grid place-items-center">
                    <img src="tech.png"/>
                    <p className="bg-red-200">Technology</p>
                </div>
                <div className="grid place-items-center">
                    <img src="persons.png"/>
                    <p>Persons</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;