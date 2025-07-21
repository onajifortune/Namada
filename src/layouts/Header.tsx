import Button from "../components/Button";
import Logo from '../assets/zechubLogo.png'

const Header = () => {
  return (
    <div className="w-screen fixed z-[70]">
      <div className="md:max-w-[1440px] h-[80px] z-[70] bg-[#020717] mx-auto w-full">
        <div className="h-full">
          <nav className="text-white h-full px-6 py-4">
            <div className="flex h-full items-center justify-between">
              {/* Left: Logo & Menu */}
              <div>
                <img src={Logo} alt="" className="w-10 h-10" />
              </div>
              <div className="hidden lg:flex items-center space-x-8">
                <ul className="flex space-x-6 text-sm">
                  <li className="hover:text-gray-300 cursor-pointer">
                    Ecosystem
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Organizations
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">Guides</li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Tutorials
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Developers
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Contribute
                  </li>
                </ul>
              </div>

              {/* Right: Buttons */}
              <div className="flex space-x-3">
                <Button className="text-[16px] hidden lg:block font-inter h-[40px] w-[96px]">DAO</Button>
                <Button className="text-[16px] hidden lg:block font-inter h-[40px] w-[127px]">Dashboard</Button>
                <Button className="text-[16px] font-inter h-[40px] w-[120px]" variant="filled">Donate</Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
