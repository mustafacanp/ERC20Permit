import { usePlugin } from '@nomiclabs/buidler/config'

usePlugin('@nomiclabs/buidler-truffle5')
usePlugin('solidity-coverage')
usePlugin('buidler-gas-reporter')

export default {
  defaultNetwork: 'buidlerevm',
  solc: {
    version: '0.8.0',
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  gasReporter: {
    enabled: true,
  },
  paths: {
    artifacts: './build',
    coverage: './coverage',
    coverageJson: './coverage.json',
  },
  networks: {
    coverage: {
      url: 'http://127.0.0.1:8555',
    },
  },
}
