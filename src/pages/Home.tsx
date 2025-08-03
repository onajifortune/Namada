import { useState, useEffect } from "react";

const GovernanceDashboard = () => {
  const [activeTab, setActiveTab] = useState<
    "parameters" | "proposals" | "validators"
  >("parameters");
  const [darkMode, setDarkMode] = useState(false);
  const [paramsData, setParamsData] = useState<any>(null);
  const [propsData, setPropsData] = useState<any>(null);
  const [validatorData, setValidatorData] = useState<any>(null);
  const [loading, setLoading] = useState({
    params: true,
    props: true,
    validator: true,
  });
  const [error, setError] = useState<{
    params: string | null;
    props: string | null;
    validator: string | null;
  }>({ params: null, props: null, validator: null });

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    // Fetch Parameters Data
    const fetchParams = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ZecHub/zechub-wiki/main/public/data/namada/protocol_parameters.json"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
        setParamsData(jsonData[0]);
      } catch (err) {
        setError((prev) => ({
          ...prev,
          params:
            err instanceof Error ? err.message : "An unknown error occurred",
        }));
      } finally {
        setLoading((prev) => ({ ...prev, params: false }));
      }
    };

    // Fetch Proposals Data
    const fetchProps = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ZecHub/zechub-wiki/main/public/data/namada/props.json"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
        setPropsData(jsonData[0]);
      } catch (err) {
        setError((prev) => ({
          ...prev,
          props:
            err instanceof Error ? err.message : "An unknown error occurred",
        }));
      } finally {
        setLoading((prev) => ({ ...prev, props: false }));
      }
    };

    // Fetch Proposals Data
    const fetchValidator = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ZecHub/zechub-wiki/main/public/data/namada/zechub.json"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
        setValidatorData(jsonData[0]);
      } catch (err) {
        setError((prev) => ({
          ...prev,
          validator:
            err instanceof Error ? err.message : "An unknown error occurred",
        }));
      } finally {
        setLoading((prev) => ({ ...prev, validator: false }));
      }
    };

    fetchParams();
    fetchProps();
    fetchValidator();
  }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  if (loading.params && loading.props) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 bg-[#1e2939]`}
    >
      <div className="text-gray-100 min-h-screen">
        {/* Header Section */}
        <header className="bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-white">
                  Namada Governance Dashboard
                </h1>
              </div>
              {/* <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <span className="w-5 h-5 block">☀️</span>
                  ) : (
                    <span className="w-5 h-5 block">🌙</span>
                  )}
                </button>
              </div> */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-700 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("parameters")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "parameters"
                    ? "text-blue-400 border-blue-400"
                    : "border-transparent hover:border-gray-300 text-gray-400 hover:text-gray-300"
                }`}
              >
                Protocol Parameters
              </button>
              <button
                onClick={() => setActiveTab("proposals")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "proposals"
                    ? "text-blue-400 border-blue-400"
                    : "border-transparent hover:border-gray-300 text-gray-400 hover:text-gray-300"
                }`}
              >
                Governance Proposals
              </button>
              <button
                onClick={() => setActiveTab("validators")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "validators"
                    ? "text-blue-400 border-blue-400"
                    : "border-transparent hover:border-gray-300 text-gray-400 hover:text-gray-300"
                }`}
              >
                Validators
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "parameters" ? (
            <ParametersTab
              data={paramsData}
              loading={loading.params}
              error={error.params}
              darkMode={darkMode}
            />
          ) : activeTab === "proposals" ? (
            <ProposalsTab
              data={propsData}
              loading={loading.props}
              error={error.props}
              darkMode={darkMode}
            />
          ) : (
            <ValidatorTab
              data={validatorData}
              loading={loading.validator}
              error={error.validator}
              darkMode={darkMode}
            />
          )}
        </main>
      </div>
    </div>
  );
};

const ParametersTab = ({ data, loading, error }: any) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`p-4 rounded-lg bg-gray-800 text-red-400`}
      >
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Governance Parameters Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Governance Parameters Card */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">
              Governance Parameters
            </h2>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {Object.entries(data.Governance_Parameters[0]).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-sm text-gray-300">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="text-sm font-medium text-gray-100">
                      {typeof value === "number"
                        ? value.toLocaleString()
                        : String(value)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Public Goods Funding Card */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">
              Public Goods Funding
            </h2>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {Object.entries(data.Public_Goods_Funding_Parameters[0]).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-sm text-gray-300">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="text-sm font-medium -gray-100">
                      {typeof value === "number" ? `${value}` : String(value)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Protocol Parameters Card */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">
              Protocol Parameters
            </h2>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {Object.entries(data.Protocol_Parameters[0])
                .filter(
                  ([key]) =>
                    ![
                      "VP_allowlist",
                      "Transactions_allowlist",
                      "Protocol_Parameters",
                      "Implicit_VP_hash",
                    ].includes(key)
                )
                .map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-sm text-gray-300">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="text-sm font-medium text-gray-100">
                      {typeof value === "boolean"
                        ? value
                          ? "Yes"
                          : "No"
                        : String(value)}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Proof of Stake Card */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">
              Proof of Stake
            </h2>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {Object.entries(data.Proof_Of_Stake_Parmeters[0]).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-sm -gray-300">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="text-sm font-medium text-gray-100">
                      {typeof value === "number" && key.includes("rate")
                        ? `${value * 100}%`
                        : String(value)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Allowlists Section */}
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-gray-200">
            Allowlists
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* VP Allowlist */}
            <div>
              <h3 className="text-md font-medium text-gray-300 mb-3">
                VP Allowlist
              </h3>
              <div className="bg-gray-700 p-4 rounded-md max-h-60 overflow-y-auto">
                {data.Protocol_Parameters[0].VP_allowlist.map(
                  (hash: string, i: number) => (
                    <div
                      key={i}
                      className="text-xs font-mono text-gray-300 mb-1 break-all"
                    >
                      {hash}
                    </div>
                  )
                )}
              </div>
              <h3 className="text-md font-medium mt-6 text-gray-300 mb-3">
                Implicit VP hash
              </h3>
              <div className="-gray-700 p-4 rounded-md max-h-60 overflow-y-auto">
                <div className="text-xs font-mono text-gray-300 mb-1 break-all">
                  {data.Protocol_Parameters[0].Implicit_VP_hash}
                </div>
              </div>
            </div>

            {/* Transactions Allowlist */}
            <div>
              <h3 className="text-md font-medium text-gray-300 mb-3">
                Transactions Allowlist
              </h3>
              <div className="bg-gray-700 p-4 rounded-md max-h-60 overflow-y-auto">
                {data.Protocol_Parameters[0].Transactions_allowlist.map(
                  (hash: string, i: number) => (
                    <div
                      key={i}
                      className="text-xs font-mono text-gray-300 mb-1 break-all"
                    >
                      {hash}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProposalsTab = ({ data, loading, error, darkMode }: any) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`p-4 rounded-lg bg-gray-800 text-red-400`}
      >
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Current Epoch */}
      <div className="bg-gray-800 rounded-lg shadow px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-200">
          Current Epoch:{" "}
          <span className="font-bold">{data.Last_committed_epoch}</span>
        </h2>
      </div>

      {/* Proposals Table */}
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Start Epoch
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  End Epoch
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Activation Epoch
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {data.Proposal.map((proposal: any , index : number) => (
                <tr
                  key={proposal.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {proposal.Type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                    {proposal.Author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {proposal.Start_Epoch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {proposal.End_Epoch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {proposal.Activation_Epoch}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ValidatorTab = ({ data, loading, error, darkMode }: any) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`p-4 rounded-lg ${
          darkMode ? "bg-gray-800 text-red-400" : "bg-white text-red-600"
        }`}
      >
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl">
        {/* Header with Avatar */}
        <div className="bg-gray-700 p-6 flex items-center space-x-4">
          <img
            src={data.Avatar}
            alt="ZecHub Logo"
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-400">{data.Name}</h1>
            <p className="text-gray-300">{data.Description}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Contact
              </h2>
              <p className="mt-2">
                <span className="text-gray-400">Email:</span> {data.Email}
              </p>
              <p className="mt-1">
                <span className="text-gray-400">Discord:</span> {data.Discord}
              </p>
              <p className="mt-1">
                <span className="text-gray-400">Website:</span>
                <a
                  href={data.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-1"
                >
                  {data.Website}
                </a>
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Staking Details
              </h2>
              <p className="mt-2">
                <span className="text-gray-400">Commission:</span>{" "}
                {data.Commission}
              </p>
              <p className="mt-1">
                <span className="text-gray-400">Max Change:</span>{" "}
                {data.Max_Change}
              </p>
              <p className="mt-1">
                <span className="text-gray-400">Epoch:</span> {data.Epoch}
              </p>
            </div>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Address
            </h2>
            <p className="mt-2 font-mono text-sm break-all bg-gray-800 p-3 rounded">
              {data.Address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceDashboard;
