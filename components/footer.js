const Footer = () => {
    return ( 
        <>
        <hr className="w-1/2 mx-auto border-yellow-400 border-1" />
        <div className="bottom-0 grid items-center justify-between w-full grid-flow-col p-8">
            <div className="grid grid-flow-col gap-4 p-2 md:px-12 md:grid-cols-1">
               <p className="font-medium text-white dark:text-gray-300">WikiApp</p> 
                <p className="font-light text-gray-500 dark:text-gray-400">Technology News</p>
            </div>
            <div className="grid grid-flow-col gap-4 p-2 md:px-12">
                <img src="facebook.svg" className="w-6 h-6" />
                <img src="twitter.svg" className="w-6 h-6" />
                <img src="telegram.svg" className="w-6 h-6" />
            </div>
        </div>
        </>
     );
}
 
export default Footer;