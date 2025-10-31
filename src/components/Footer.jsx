const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
                <a href="#beranda">Beranda</a>
                <a href="#tentang">Tentang</a>
                <a href="#proyek">Proyek</a>
            </div>
            <div className="flex items-center gap-4">
                <a href="https://github.com/wildanibnu30" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://instagram.com/wildsketch30" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="https://facebook.com/wildsketch30" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <i className="ri-facebook-fill ri-2x"></i>
                </a>
                <a href="https://www.youtube.com/@wildsketch30" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                    <i className="ri-youtube-fill ri-2x"></i>
                </a>
            </div>

        </div>
    );
};

export default Footer