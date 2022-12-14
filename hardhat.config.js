require('dotenv').config()

require('@nomicfoundation/hardhat-toolbox')
require('hardhat-watcher')

const GANACHE_MNEMONIC = 'vague transfer holiday basket rent shop future wing want employ cry evidence'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  watcher: {
    compile: {
      tasks: ['compile'],
      files: ['./contracts'],
      verbose: true
    },
    test: {
      tasks: ['test'],
      files: ['./test/*.js', './test/*.ts', './test/**/*.js', './test/**/*.ts', './contracts', './contracts/**'],
      runOnLaunch: true,
    }
  },
  networks: {
    ganache: {
      url: 'http://52.205.226.246:8545/',
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC,
        initialIndex: 0
      },
      network_id: 5777
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC,
        initialIndex: 0
      },
      network_id: 80001
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_ETHERSCAN_API_KEY,
    }
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  }
}
