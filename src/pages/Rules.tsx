import Header from "../layouts/Header";
import pattern from "../assets/Pattern.png";
import pattern1 from "../assets/Pattern1.png";
import pattern2 from "../assets/pattern2.png";
import shadow from "../assets/shadow.png";
import shadow2 from "../assets/shadow2.png";

const Rules = () => {
  return (
    <>
      <Header />
      <div className="relative flex justify-center items-center md:h-[400px] h-[200px]">
        <div className="absolute z-[90] w-full top-0 md:h-[152px] h-[80px]">
          <img src={pattern} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] w-full bottom-0 md:h-[152px] h-[80px]">
          <img src={pattern1} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] w-[500px] opacity-[0.6] bottom-0 right-0 md:h-[400px] h-full">
          <img src={pattern2} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] lg:w-[797px] left-[-23.1px] top-[-40.7px] md:h-[412px] h-[200px]">
          <img src={shadow} alt="" className="w-full h-full" />
        </div>
        <div className="absolute z-[90] lg:w-[797px] left-[-23.1px] top-[-40.7px]">
          <img src={shadow2} alt="" className="w-full h-full" />
        </div>
        <div className="xl:max-w-[1440px] px-6 flex justify-center items-center flex-col w-full z-[100] relative mx-auto  h-[60%]">
          {/* Background graphics */}

          <h1 className="md:text-[64px] text-[35px] sm:text-[45px] font-[800] text-center leading-[35px] sm:leading-[60px] relative z-[50] font-orbitron tracking-tight bg-gradient-to-b from-white from-80% to-[#03091F] text-transparent bg-clip-text">
            HACKATHON RULES
          </h1>
        </div>
      </div>
      <div className="text-white p-4 mt-6">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <h1 className="text-[25px] md:text-[45px] font-bold font-orbitron mb-6">
            Welcome to the ZecHub Hackathon
          </h1>

          <p className="font-space">
            Zcash is a decentralized cryptocurrency focused on privacy and
            selective disclosure.
          </p>

          <p className="font-space">
            We invite you or your team get started building on Zcash! Check out
            our developers page:
            <a
              href="https://zechub.wiki/developers"
              className="text-blue-600 underline ml-1 font-space"
              target="_blank"
              rel="noopener noreferrer"
            >
              zechub.wiki/developers
            </a>
          </p>

          <section>
            <h2 className="text-xl font-semibold font-orbitron mb-4">
              Contest Rules:
            </h2>
            <p className="font-space">
              Your application must interact with Zcash mainnet. This includes:
              <ul className="list-disc list-inside mt-2 space-y-4 font-space">
                <li className="font-space">
                  Sending/Receiving ZEC transactions
                </li>
                <li className="font-space">
                  Sending/Receiving Encrypted Memos
                </li>
                <li className="font-space">
                  Utilising network metrics from any Zcash RPC API
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-orbitron">
              Contest Submission:
            </h2>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="font-space">
                Submit the source code for your application to the ZecHub
                repository, it should contain all source files, assets, and
                scripts needed to build and run the project.
                <a
                  href="https://github.com/ZecHub/zechub/tree/main/Hackathon"
                  className="text-blue-600 underline ml-1 font-space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Submission Link
                </a>
              </li>
              <li className="font-space mb-4">
                Your submission must include documentation this can be a README
                /.md / .txt file detailing:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-5 mb-2">
                  <li className="font-space">
                    Purpose & Scope : What problem does the app solve?{" "}
                  </li>
                  <li className="font-space">
                    Core Features : List of the main capabilities.
                  </li>
                  <li className="font-space">
                    Architecture : Simple diagram showing major components & how
                    they interact.
                  </li>
                  <li className="font-space">
                    Technology Stack: Languages & Frameworks E.g. Frontend:
                    React + Tailwind; Backend: Zebrad + Zaino.”
                  </li>
                </ul>
              </li>
              <li className="font-space">
                Demonstrate how your application functions. Post a video to the  {" "}
                <strong> #zechub channel</strong> in the Zcash Global Discord.
              </li>
            </ol>
                <a
                  href="https://discord.gg/zcash"
                  className="text-blue-600 underline font-space mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #zechub
                </a>{" "}
                Discord channel.
          </section>

          <section>
            <h2 className="text-xl font-semibold font-orbitron mb-4">
              Voting Process:
            </h2>
            <p className="font-space">
              The ZecHub DAO will have a public vote on all complete submissions
              to the hackathon. Each entrant will receive a score based on 10
              points from each DAO member with the final ranked outcome decided
              by each entrants cumulative score.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-orbitron mb-4">
              DAO Vote Date:
            </h2>
            <p className="font-space">
              The voting will take place on <strong>August 29th</strong>. Make
              sure your project video and documentation is posted before this
              date for consideration.
            </p>
          </section>

          <p className="font-semibold font-space">
            <strong>Winners may be asked to provide additional documentation</strong>
          </p>

          <p className="font-semibold italic font-space">Best of luck!</p>
        </div>
      </div>
    </>
  );
};

export default Rules;
