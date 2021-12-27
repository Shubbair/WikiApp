const Home = () => {
    return ( 
        <>
        <div className="grid items-center justify-center my-8 sm:grid-cols-2 md:mx-4 md:my-24">
            <div className="order-2 mx-6 sm:order-1">
                <p className="text-xl font-medium md:text-2xl lg:text-3xl xl:text-5xl dark:text-gray-300">The world between your hand</p>
                <br/>
                <p className="text-sm font-light md:text-md lg:text-xl xl:text-2xl dark:text-gray-400">We are connected the world throw sharing
                   sceince , persons , places and more ...</p>
                <br/>
                <button className="p-2 text-sm bg-yellow-400 rounded btn btn-primary md:text-md lg:text-md lg:p-3 dark:text-gray-800">Lets Discover ...</button>
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
            <div className="mx-auto text-xl font-medium dark:text-gray-300 md:text-3xl">Search for everything</div>
            <div className="grid grid-flow-row gap-8 sm:grid-cols-3">
                <div className="grid place-items-center ">
                    <img src="science.png" className=""/>
                    <div className="grid w-full p-2 -my-4 bg-yellow-400 rounded-b-lg sm:my-6 sm:rounded-none sm:bg-transparent place-items-center">
                    <p className="dark:text-gray-400">Sciense</p>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <img src="tech.png"/>
                    <div className="grid w-full p-2 -my-4 bg-yellow-400 rounded-b-lg sm:my-6 sm:rounded-none sm:bg-transparent place-items-center">
                    <p className="dark:text-gray-400">Technology</p>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <img src="persons.png"/>
                    <div className="grid w-full p-2 -my-4 bg-yellow-400 rounded-b-lg sm:my-6 sm:rounded-none sm:bg-transparent place-items-center">
                    <p className="mx-auto dark:text-gray-400">Persons</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid items-center justify-center gap-6 mx-6 my-8 md:my-64">
            <p className="grid md:text-4xl place-items-center dark:text-gray-300">Still waiting!</p>
            <p className="text-gray-700 md:text-2xl dark:text-gray-500">Don’t waste your time, start discovering</p>
            <button className="p-2 bg-yellow-400 rounded text-md btn btn-primary md:text-md lg:text-md lg:p-3 dark:text-gray-800">Discover</button>
        </div>
        </>
     );
}
 
export default Home;