import Header from "../layouts/Header";
import pattern from "../assets/Pattern.png";
import pattern1 from "../assets/Pattern1.png";
import pattern2 from "../assets/pattern2.png";
import pattern3 from "../assets/pattern3.png";
import shadow from "../assets/shadow.png";
import shadow2 from "../assets/shadow2.png";
import star from "../assets/star-img.png";
import star2 from "../assets/star-img2.png";
import Button from "../components/Button";
import Countdown from "../components/Countdown";
import iconUp from "../assets/icon-up.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import cupIcon from "../assets/cup.png";
import shadow3 from "../assets/shadow3.png";
import medal1 from "../assets/noto-v1_1st-place-medal.png";
import medal2 from "../assets/noto-v1_2nd-place-medal.png";
import medal3 from "../assets/noto-v1_3rd-place-medal.png";
import medal from "../assets/noto-v1_sports-medal.png";
import borderLight from "../assets/border-light.png";
import borderLight2 from "../assets/border-light2.png";
import count1 from "../assets/count1.png";
import count2 from "../assets/count2.png";
import count3 from "../assets/count3.png";
import shadow4 from "../assets/shadow4.png";
import assistance from "../assets/assistance.png";
import shielded from "../assets/shielded.png";
import zcashIcon from "../assets/zcashIcon.png";
import near from "../assets/near.png";
const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="relative flex justify-center items-center md:h-[860px] h-[600px] sm:h-[750px]">
        <div className="absolute z-[90] w-full top-0 md:h-[352px] h-[230px]">
          <img src={pattern} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] w-full bottom-0 md:h-[352px] h-[230px]">
          <img src={pattern1} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] w-[500px] opacity-[0.6] bottom-0 right-0 md:h-[912px] h-full">
          <img src={pattern2} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] lg:w-[797px] left-[-23.1px] top-[-40.7px] h-[712px]">
          <img src={shadow} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] lg:w-[797px] left-[-23.1px] top-[-40.7px]">
          <img src={shadow2} alt="" className="w-full h-full" />
        </div>
        <div className="xl:max-w-[1440px] px-6 flex justify-center items-center flex-col w-full z-[100] relative mx-auto  h-[60%]">
          {/* Background graphics */}
          <img
            src={shielded}
            className="absolute rotate-25 md:w-[100px] w-[60px] animate-[bounce_5s_infinite] md:h-[100px] h-[60px] md:top-[80%] top-[100%] left-10"
          />
          <img
            src={star2}
            className="absolute md:w-[71px] w-[36px] animate-pulse md:h-[60px] h-[30px] md:top-[7%] -top-10 lg:left-45 left-10"
          />
          <img
            src={zcashIcon}
            className="absolute md:w-[100px] w-[40px] animate-[bounce_5s_infinite] md:h-[100px] h-[40px] lg:top-[0%] -top-5 lg:right-45 right-10"
          />
          <img
            src={near}
            className="absolute md:w-[100px] w-[60px]  bottom-30  md:right-[25%] right-10"
          />
          <img
            src={star}
            className="absolute md:w-[74px] w-[36px] animate-pulse md:h-[79.45px] h-[35px] right-10 md:top-[50%] top-[40%]"
          />

          <h1 className="md:text-[64px] text-[35px] sm:text-[45px] font-[800] text-center leading-[35px] sm:leading-[60px] relative z-[50] font-orbitron tracking-tight bg-gradient-to-b from-white from-80% to-[#03091F] text-transparent bg-clip-text">
            ZECHUB HACKATHON
          </h1>
          <p className="max-w-xl mx-auto font-space md:text-[20px] text-[14px] pt-4 sm:text-[16px] text-center text-white">
            Challenge yourself to build with Zcash—one of the leading
            privacy-preserving blockchains. - Join the Hackathon
          </p>

          <div className="mt-8 flex flex-wrap justify-center space-x-4">
            {/* <Button className="h-[56px] bg-white !text-black md:w-[254px] text-[18px]">
              <a href="">Join the Hackathon</a>
            </Button> */}
            <Button className="md:w-[194px] h-[56px]" variant="filled">
              <a href="https://discord.gg/zcash">Zcash Discord</a>
            </Button>
          </div>

          <Countdown />
        </div>
      </div>

      <div className="w-full py-12 2xl:px-0 px-4 md:px-10">
        <div className="md:max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          <h1 className="font-orbitron text-center text-[25px] sm:text-[35px] lg:text-[48px] text-white font-[600]">
            Challenge Overview
          </h1>

          <div className="flex lg:flex-row flex-col gap-24 w-full md:pt-36 pt-20 items-center justify-between">
            <div className="xl:w-[565px] lg:w-[500px] w-full  sm:p-8 p-4 glass-container rounded-md md:min-h-[500px]">
              <h1 className="font-space text-[25px] sm:text-[31.66px] text-white font-[600]">
                Run a Zcash Node
              </h1>
              <p className="font-space text-[14px] sm:text-[18px] text-white font-[400] mt-4">
                Set up and run a Zcash node. Learn the fundamentals and follow
                our step-by-step guide to launch your own zcashd node.
              </p>
              <div className="pt-8 flex flex-col space-y-4 text-start">
                <Button className="h-[48px] flex justify-between items-center gap-10 px-5 w-fit">
                  <a href="https://zebra.zfnd.org/" className="flex justify-between items-center text-[14px] sm:text-[16px]">Zcash Documentation <img src={iconUp} alt="" /></a>
                </Button>
                <Button className="h-[48px] flex justify-between items-center gap-10 px-5 w-fit">
                  <a href="https://github.com/zingolabs/zaino/blob/dev/docs/rpc_api.md" className="flex justify-between items-center text-[14px] sm:text-[16px]">RPC Docs <img src={iconUp} alt="" /></a>
                </Button>
                <Button className="h-[48px] flex justify-between items-center gap-10 px-5 w-fit">
                  <a href="https://fringe-brow-647.notion.site/Shade-Agents-19a09959836d8091bb8febb318cc09fd" className="flex justify-between items-center text-[14px] sm:text-[16px]">Shade Agents <img src={iconUp} alt="" /></a>
                </Button>
              </div>
              <div className="rounded-full lg:w-[107px] lg:h-[107px] hidden xl:flex justify-center items-center glass-container-full">
                <p className="text-[48px] leading-10 font-mono font-[700] text-white">
                  1
                </p>
              </div>
            </div>
            <div className="xl:w-[565px] lg:w-[500px]  w-full glass-container sm:p-8 p-4 rounded-md md:min-h-[500px]">
              <h1 className="font-space text-[25px] sm:text-[31.66px] text-white font-[600]">
                Create a Zcash App
              </h1>
              <p className="font-space  text-[14px] sm:text-[18px] text-white font-[400] mt-4">
                Use Zcash's unique features to power your own app. Creativity,
                Usability and Privacy are key!
              </p>
              <div className="pt-8">
                <Button className="h-[48px] flex justify-between items-center gap-10 px-5 w-fit">
                  <a href="https://zechub.wiki/developers" className="flex justify-between items-center text-[14px] sm:text-[16px]">Build on Zcash <img src={iconUp} alt="" /></a>
                </Button>
              </div>

              <div className="pt-8">
                <h1 className="font-space text-[16px] text-white font-[600]">
                  Ideas to get you started
                </h1>
                <div className="py-4 space-y-4">
                  <div className="flex items-center gap-3">
                    {" "}
                    <img src={icon1} className="w-[24px] h-[24px]" />{" "}
                    <p className="text-white text-[14px] sm:text-[16px]">A game with Zcash entry fees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    {" "}
                    <img src={icon2} className="w-[24px] h-[24px]" />{" "}
                    <p className="text-white text-[14px] sm:text-[16px]">
                      A private messaging app (Zcash supports encrypted memos)
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {" "}
                    <img src={icon3} className="w-[24px] h-[24px]" />{" "}
                    <p className="text-white text-[14px] sm:text-[16px]">A micro-donation platform</p>
                  </div>
                </div>
              </div>
              <div className="absolute rounded-full w-[107px] h-[107px] hidden xl:flex  justify-center items-center glass-container-full">
                <p className="text-[48px] leading-10 font-mono font-[700] text-white">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 2xl:px-0 px-4 md:px-10">
        <div className="md:max-w-[1440px] mx-auto flex flex-col justify-center items-center">
         <h1 className="font-orbitron text-center text-[25px] sm:text-[35px] lg:text-[48px] text-white font-[600]">
            Prizes to be Won
          </h1>

          <div className="flex lg:flex-row flex-col md:pt-36 pt-24 justify-center xl:justify-between items-center  w-full  gap-4">
            <div className="space-y-8 md:w-fit w-full md:px-0 px-8">
              <div className="md:md:w-[316px] w-full h-[145px] flex justify-center items-center bg-[#F79329] rounded-[21.21px] relative z-[50]">
                <div className="absolute w-full flex justify-center items-center">
                  <img
                    src={borderLight}
                    className="md:w-[291px] w-[95%] h-[123px]"
                  />
                </div>
                <div className="flex gap-2 w-full px-8 justify-start items-center">
                  <img src={medal1} className="w-[56px] h-[56px]" />
                  <div className="text-white">
                    <p className="font-space md:text-[21.21px] font-[500]">
                      1st Prize
                    </p>
                    <p className="font-space text-[18px] md:text-[26.91px] font-[700]">
                      100 ZEC
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[316px] w-full h-[145px] flex justify-center items-center bg-[#28649745] rounded-[21.21px] relative z-[50]">
                <div className="absolute w-full flex justify-center items-center">
                  <img
                    src={borderLight}
                    className="md:w-[291px] w-[95%] h-[123px]"
                  />
                </div>
                <div className="flex gap-2 w-full px-8 justify-start items-center">
                  <img src={medal2} className="w-[56px] h-[56px]" />
                  <div className="text-white">
                    <p className="font-space md:text-[21.21px] font-[500]">
                      2nd Prize
                    </p>
                    <p className="font-space text-[18px] md:text-[26.91px] font-[700]">
                      50 ZEC
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[316px] w-full h-[145px] flex justify-center items-center bg-[#96A2AC] rounded-[21.21px] relative z-[50]">
                <div className="absolute w-full flex justify-center items-center">
                  <img src={borderLight} className="md:w-[291px] w-[95%] h-[123px]" />
                </div>
                <div className="flex gap-2 w-full px-8 justify-start items-center">
                  <img src={medal3} className="w-[56px] h-[56px]" />
                  <div className="text-white">
                    <p className="font-space md:text-[21.21px] font-[500]">
                      3rd Prize
                    </p>
                    <p className="font-space text-[18px] md:text-[26.91px] font-[700]">
                      25 ZEC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[515px] h-[646px] hidden xl:flex justify-center items-center relative z-[50]">
              <img
                src={cupIcon}
                className="w-[516px] animate-pulse h-[502.77px] relative z-50"
              />
              <div className="absolute z-40 left-4 -top-20 w-[700px] h-[646px]">
                <img src={shadow3} className="w-full h-full" />
              </div>
            </div>
           <div className="space-y-8 md:w-fit w-full md:px-0 px-8">
              <div className="md:w-[316px]  w-full h-[145px] flex justify-center items-center bg-[#28649745] rounded-[21.21px] relative z-[50]">
                <div className="absolute w-full flex justify-center items-center">
                  <img src={borderLight} className="md:w-[291px] w-[95%] h-[123px]" />
                </div>
                <div className="flex gap-2 w-full px-8 justify-start items-center">
                  <img src={medal} className="w-[56px] h-[56px]" />
                  <div className="text-white">
                    <p className="font-space md:text-[21.21px] font-[500]">
                      4th Prize
                    </p>
                    <p className="font-space text-[18px] md:text-[26.91px] font-[700]">
                      25 ZEC
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[316px] w-full h-[145px] flex justify-center items-center bg-[#D3CAAE] rounded-[21.21px] relative z-[50]">
                <div className="absolute w-full flex justify-center items-center">
                  <img src={borderLight} className="md:w-[291px] w-[95%] h-[123px]" />
                </div>
                <div className="flex gap-2 w-full px-8 justify-start items-center">
                  <img src={medal} className="w-[56px] h-[56px]" />
                  <div className="text-white">
                    <p className="font-space md:text-[21.21px] font-[500]">
                      5th Prize
                    </p>
                    <p className="font-space text-[18px] md:text-[26.91px] font-[700]">
                      7 ZEC
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[316px] w-full h-[145px] bg-transparent rounded-[21.21px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 2xl:px-0 px-4 md:px-10 relative z-[50]">
        <div className="md:max-w-[1440px]  mx-auto flex flex-col  justify-center items-center">
         <h1 className="font-orbitron text-center text-[25px] sm:text-[35px] lg:text-[48px] text-white font-[600]">
            How It Works
          </h1>
          <div className="w-full lg:flex-row flex-wrap flex-col gap-14 flex justify-around text-white py-8 relative z-[50]">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={count1} alt="" className="h-[112px] w-[112px]" />
              <h1 className="text-[24px] font-[700] font-space h-[50px]">
                How to Participate
              </h1>
              <p className="font-[400] font-space leading-[28px] w-[332px] text-center text-[14px] md:text-[16px] h-[100px]">
                Set up a Zebra Node, Zaino Indexer or Zingo-cli to build your app and share your project in the Zechub discord channel 
              </p>
              <img
                src={shadow4}
                alt=""
                className="w-[243px] absolute -bottom-15 h-[140px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 relative">
              <img src={count2} alt="" className="h-[112px] w-[112px]" />
              <h1 className="text-[24px] font-[700] font-space h-[50px]">
                What to Submit
              </h1>
              <p className="font-[400] font-space leading-[28px] w-[332px] text-center text-[14px] md:text-[16px]  h-[100px]">
                To be eligible for a prize, you must provide a video demo showing interaction with the Zcash network.  Documentation of your project to be submitted to the zechub hackathon repository. 
              </p>
              <img
                src={shadow4}
                alt=""
                className="w-[243px] absolute -bottom-15 h-[140px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 relative">
              <img src={count3} alt="" className="h-[112px] w-[112px]" />
              <h1 className="text-[24px] font-[700] font-space h-[50px]">
                Voting & Deadlines
              </h1>
              <p className="font-[400] font-space leading-[28px] w-[332px] text-center text-[14px] md:text-[16px]  h-[100px]">
                Voting happens via a public ZecHub DAO poll in the Zcash Global
                Discord. Submit your project before October 12 to be eligible.
              </p>
              <img
                src={shadow4}
                alt=""
                className="w-[243px] absolute -bottom-15 h-[140px]"
              />
            </div>
          </div>

          <div className="relative w-full">
            <img src={borderLight2} alt="" className="w-full md:h-[140px]" />
            <Button
              className="md:w-[354px] sm:text-[16px] text-[14px] w-fit md:h-[56px] h-[46px] absolute left-1/2  -translate-x-1/2 bottom-0"
              variant="filled"
            >
              <a href="https://discord.gg/zcash">Join Zcash Discord</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full py-12 2xl:px-0 px-4 md:px-10">
        <div className="md:max-w-[1440px]  mx-auto flex flex-col justify-center items-center">
          <img
            src={assistance}
            alt=""
            className="md:h-[478px]  md:w-[1034px]"
          />
        </div>
      </div>

      <div className="w-full py-12 2xl:px-0 px-4 md:px-10">
        <div className="md:max-w-[1440px] gap-8 md:px-0 px-6 glass-container min-h-[521px] rounded-[10px]  mx-auto flex flex-col justify-center items-center relative">
          <h1 className="sm:text-[30px] text-[18px] lg:text-[48px] font-orbitron font-[600] text-center tracking-normal md:w-[663px] text-white  leading-[125%]">
            Support the Hackathon with Your Donations!
          </h1>
          <p className="leading-[28px] font-[400] font-space sm:text-[16px] text-[14px] text-white md:w-[851px] text-center">
            Your contributions can help us 1) run nodes for contestants to build
            on the Zcash network, 2) increase the prize pool. If you'd like to
            support our efforts, please consider making a donation.
          </p>
          <p className="leading-[28px] font-[400] font-space sm:text-[16px] text-[14px] text-white md:w-[851px] text-center">
            We gladly accept ZEC via our Donations page,and AKT Akash Token via
            the DAO. Thank you for your support
          </p>
          <Button variant="filled" className="sm:w-[292px] relative z-50 h-[56px]">
            <a href="https://zechub.wiki/donation">Make Donations</a>
          </Button>
          <div className="absolute z-1">
            <img
              src={pattern3}
              alt=""
              className="h-[325px] opacity-[70%] w-[904.93px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
