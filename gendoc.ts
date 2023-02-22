import { main } from 'solidity-docgen/dist/main'

const targets = [
  "Broker",
  "BiPoolManager",
  "ConstantProductPricingModule",
  "ConstantSumPricingModule",
  "TradingLimits",
  "SortedOracles",
  "StableToken",
  "BreakerBox",
  "MedianDeltaBreaker",
  "ValueDeltaBreaker",
  "Reserve",
  "IBroker",
  "IExchangeProvider",
  "IBreakerBox",
  "IBreaker"
]

async function run() {
  const builds = targets.map((target) => {
    const artifact = require(`./out/${target}.sol/${target}.json`);
    return {
      input: artifact.metadata,
      output: {
        sources: {
          [artifact.ast.absolutePath]: {
            ast: artifact.ast,
            id: artifact.id
          }
        }
      }
    }
  })

  await main(builds, { pages: 'items' })
}

run();