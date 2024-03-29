const CollectionConfig = {

    tokenName: "Classy Dogs Collection",
    tokenSymbol: 'CD',
    // metadata IPFS URI for Classy Dogs NFT collection
    // baseMetadataURI: "ipfs://QmdN2LsGe35Skv8HJjjYQqtv2LNs43VS7zxQgcLPwHxYjd/",
    baseMetadataURI: "ipfs://QmcKmG3ht3d7nSmurmnAkjsLaxsgUxBVFMTJoTUJzvkzVY",
    // hiddenMetadataUri: 'ipfs://QmcSWAAxqfdDGcKNGxKeqRbziCNhuwTv7jRD87EjCn1wvg',
    hiddenMetadataUri: 'ipfs://QmSBb9VTinMindyDM98i9Wwy4rDnQUkLHUodhszwqkax8G',
    maxSupply: 10000,
    whitelistSale: {
        price: 0.05,
        maxMintAmountPerTx: 1,
    },
    preSale: {
        price: 0.07,
        maxMintAmountPerTx: 3,
    },
    publicSale: {
        price: 0.09,
        maxMintAmountPerTx: 5,
    },
    contractAddress: null,
    marketplaceIdentifier: 'my-nft-token',
    // marketplaceConfig: Marketplaces.openSea,
    whitelistAddresses: [],
};

module.exports = { CollectionConfig };
