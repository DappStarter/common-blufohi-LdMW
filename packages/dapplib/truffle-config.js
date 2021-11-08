require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue raise range proud hunt drive equal genre'; 
let testAccounts = [
"0xf6b7197d73dbf5b45548a8fd82d75dd65f9fa82c9ffe5671a0bc7a52aea70a55",
"0xe024531e3bdc5c8f8527be713d457edd18d308769f25948569f26e70c9b8ff4e",
"0x8052da7c5ff550dd4185d9c8e931ff3ef251cc0f9fb345e8e7f5107a39073389",
"0xffc700ccd014ff5baca790176188026f34368e679fa34db05b2df4dd92ad9091",
"0x8cf7fb69951a8706142e9b5545cf3ee412f62fab1c18a9423f55a0c1d687ea4c",
"0xbc70ad8b8b41bcf01dfdd77034918b235e672a2c623ecc5527a11c2b815673e4",
"0x38f34bf7171f0ebc6b9b2375bf4e1768f63e067f6356690431e91170711a5730",
"0xb50f156b6da2de6357e995d9c5dc6677e1493361ce644eb14d8945d6df1edb5c",
"0x2636cc171a67fc0a5cc9769a08cce2fa186b86589272f93e0b18f479e70e9069",
"0x1c0b955568c3b6a6329028155cbeae846bfa957ced01171d6d5663d18136d3c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

