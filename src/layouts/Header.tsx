import Button from "../components/Button";
import Logo from "../assets/zechubLogo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-screen h-[60px] fixed top-0 md:h-[80px] bg-[#020717] transition-all duration-300 ${
        scrolled ? "z-[120]" : "z-10"
      }`}
    >
      <div className="md:max-w-[1440px] h-[60px] md:h-[80px] mx-auto w-full">
        <div className="h-full">
          <nav className="text-white h-full px-6 py-4">
            <div className="flex h-full items-center justify-between">
              {/* Left: Logo & Menu */}
              <div>
                <img src={Logo} alt="" className="md:w-15 md:h-15 w-10 h-10" />
              </div>
              <div className="hidden lg:flex items-center space-x-8">
                <ul className="flex space-x-6 text-sm">
                  <li className="hover:text-gray-300 cursor-pointer">
                    <a href="https://youtube.com/@zechub">Tutorials</a>
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    <a href="https://zechub.wiki/developers">Developers</a>
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    <a href="https://zechub.wiki/contribute/help-build-zechub">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right: Buttons */}
              <div className="flex space-x-3">
                <Button className="text-[16px] hidden lg:block font-inter h-[40px] w-[96px]">
                  <a href="https://zechub.wiki/dao">DAO</a>
                </Button>
                <Button className="text-[16px] hidden lg:block font-inter h-[40px] w-[127px]">
                  <a href="https://zechub.wiki/dashboard">Dashboard</a>
                </Button>
                <Button
                  className="text-[14px] md:text-[16px] font-inter md:h-[40px] md:w-[120px]"
                  variant="filled"
                >
                  <a href="https://zechub.wiki/donation">Donate</a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
