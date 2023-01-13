require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain hole guess arctic bubble general'; 
let testAccounts = [
"0x0c153444511b27a3c46acd6e225383b46dd96a7ed4322a012e37c09eb2f6754b",
"0x58edf24e9b548baa1fa0a856c2c0e46820bfd487f96641b3818be71177f1f31f",
"0xc9433e50ed4b3cea01335270a1403940bbb466ccb8820418a3a95e167f0c871a",
"0xe6c199bb351188a31987456f46112980435dac21326b10487c38dd0edca453f6",
"0xd4dfeae7450e0577a8f9a53b1c922215f5f6cbf891658006789365fa4896c3bb",
"0x420ced0ab30aa88d82b7428a4baaf40447615d5ada1c883fd682c25531453654",
"0xdc3b7ef4c317909541f1e88774d7ce977a88b7e4fe36147c5f410e23e422c040",
"0x2673709e59be17dc185313f0212c4ee381e4b52211137ee51f9eec3b7d750df7",
"0x498a625de7a38e0daad5a71397fae150e4ca2c65c0f3e9973aa9aef373358093",
"0x954ad9ced78b8baea2de17f4cf10a085e77181f47f003f027ef78b786d459bbc"
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

