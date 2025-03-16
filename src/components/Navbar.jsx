import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import CV from "../assets/Metitiri_Oghenetega_Cv5.pdf";

const Navbar = () => {
  return (
    <div className="mb-7 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-5xl">Mt</div>
      <div className="flex items-center justify-center gap-4 text-2xl m-8">
        <a href="https://www.linkedin.com/in/metitiri-oghenetega-4a94831b4">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SIRTEGS024">
          <FaGithub />
        </a>
        <div className="relative group p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 transition-all duration-500 ease-in-out">
          <div className="absolute inset-0 rounded-full bg-[#1e1e2e] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

          <a
            href={CV}
            className="relative flex items-center text-sm bg-[#1e1e2e] rounded-full text-white px-5 py-2 font-medium shadow-lg transition-all duration-500 ease-in-out w-full h-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-cyan-500 group-hover:to-blue-500 group-hover:text-black group-hover:scale-105 active:scale-95 after:content-[''] after:absolute after:inset-0 after:bg-white/20 after:rounded-full after:opacity-0 after:transition-all after:duration-300 active:after:opacity-100 active:after:scale-150"
            download
          >
            Resume
            <FaDownload
              className="ml-2 group-hover:text-black transition-all duration-500"
              size={18}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
