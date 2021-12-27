import React, { useState } from 'react';

const Navbar = () => {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    
    return (
        <>
        <div className="flex items-center justify-between mx-6 my-12 text-sm font-light text-gray-700 dark:text-gray-400 md:text-base md:mx-12" onClick={toggle}>
            <div className="flex items-center justify-center">
                <img
                    src="/logo.svg"
                    className="w-10 h-10 md:h-12 md:w-12"
                />
                <span className="mx-2 font-medium">WikiApp</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xs md:gap-6 md:text-base" id="show">
                <div className="grid w-32 grid-flow-col p-2 bg-gray-700 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                   <p className="">Search</p>
                </div>
                <div>
                    About us
                </div>
            </div>
        </div>
        <div style={{
        display: showMe?"block":"none"
      }} id="item" className="absolute">
          <div className="bg-gray-700">
             this is it man don't be shy!! 
          </div>
      </div>
        </>
    );
}

export default Navbar;