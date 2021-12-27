const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx-6 my-12 text-sm font-light text-gray-700 dark:text-gray-400 md:text-base md:mx-12">
            <div className="flex items-center justify-center">
                <img
                    src="/logo.svg"
                    className="w-10 h-10 md:h-12 md:w-12"
                />
                <span className="mx-2 font-medium">WikiApp</span>
            </div>
            <div className="flex gap-3 text-xs md:gap-6 md:text-base">
                <div>
                    Search
                </div>
                <div>
                    About us
                </div>
            </div>
        </div>
    );
}

export default Navbar;