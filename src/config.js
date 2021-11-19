const contractName = process.env.REACT_APP_CONTRACT_NAME || 'v1.tenk.testnet';

export default function getConfig() {
  let config = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    contractName,
    GAS: '300000000000000',
    DEFAULT_NEW_ACCOUNT_AMOUNT: '5',
    contractMethods: {
      changeMethods: [
        'nft_mint_one',
        'nft_mint_many',
        'create_linkdrop',
        'nft_transfer',
      ],
      viewMethods: [
        'cost_per_token',
        'discount',
        'token_storage_cost',
        'total_cost',
        'nft_supply_for_owner',
        'nft_total_supply',
        'nft_tokens',
        'nft_tokens_for_owner',
        'tokens_left',
        'cost_of_linkdrop',
        'nft_metadata',
        'get_key_balance',
        'check_key',
      ],
    },
  };

  if (process.env.REACT_APP_ENV === 'prod') {
    config = {
      ...config,
      networkId: 'mainnet',
      nodeUrl: 'https://rpc.mainnet.near.org',
      walletUrl: 'https://wallet.near.org',
      helperUrl: 'https://helper.mainnet.near.org',
    };
  }

  return config;
}
