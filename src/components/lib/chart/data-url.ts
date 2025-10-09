export const DATA_URL = {
  defaultUrl: "/data/zcash/shielded_supply.json",
  sproutUrl: "/data/zcash/sprout_supply.json",
  saplingUrl: "/data/zcash/sapling_supply.json",
  orchardUrl: "/data/zcash/orchard_supply.json",
  txsummaryUrl: "/data/zcash/transaction_summary.json",
  netInflowsOutflowsUrl: "/data/zcash/netinflowoutflow.json",
  nodecountUrl: "/data/zcash/nodecount.json",
  difficultyUrl: "/data/zcash/difficulty.json",
  lockboxUrl: "/data/zcash/lockbox.json",
  shieldedTxCountUrl: "/data/zcash/shieldedtxcount.json",
  issuanceUrl: "/data/zcash/issuance.json",
  shieldedUrl:
    "https://api.github.com/repos/ZecHub/zechub-wiki/commits?path=public/data/shielded_supply.json",
  namadaSupplyUrl: "/data/namada_supply.json",
  blockchainInfoUrl: "/api/blockchain-info",
  blockchairUrl:
    "https://api.blockchair.com/zcash/stats?key=A___wNpGniYbmkv7tLpMfOPBGe2as7vI",
  namadaRewardUrl: "/data/namada_rewards_rate.json",
  proposalsUrl: "/data/props.json",
  propsDetailsUrl: "/data/proposals/propsDetails.json",
  zechubUrl: "/data/zechub.json",
  protocol_parametersUrl: "/data/protocol_parameters.json",
} as const;
