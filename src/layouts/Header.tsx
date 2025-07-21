import Button from "../components/Button";
import Logo from "../assets/zechubLogo.png";

const Header = () => {
  return (
    <div className="w-screen fixed z-[100] h-[80px]">
      <div className="md:max-w-[1440px] h-[80px]  mx-auto w-full">
        <div className="h-full">
          <nav className="text-white h-full px-6 py-4">
            <div className="flex h-full items-center justify-between">
              {/* Left: Logo & Menu */}
              <div>
                <img src={Logo} alt="" className="w-15 h-15" />
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
                  className="text-[16px] font-inter h-[40px] w-[120px]"
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
