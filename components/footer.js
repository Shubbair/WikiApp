const Footer = () => {
    return ( 
        <div className="bottom-0 grid items-center justify-between w-full grid-flow-col p-8 bg-gray-200">
            <div className="grid grid-flow-col gap-4 p-2 md:px-12 md:grid-cols-1">
               <p className="font-medium">WikiApp</p> 
                <p className="font-light text-gray-600">Technology News</p>
            </div>
            <div className="grid grid-flow-col gap-4 p-2 md:px-12">
                <img src="facebook.png" className="w-6 h-6" />
                <img src="twitter.png" className="w-6 h-6" />
                <img src="telegram.svg" className="w-6 h-6" />
            </div>
        </div>
     );
}
 
export default Footer;