import { Trade } from 'rt-types'
import { ExecuteTradeRequest } from './executeTradeRequest'
import { SpotPriceTick } from './spotPriceTick'
import { RfqState } from '../components/types'

export interface LastTradeExecutionStatus {
  request: ExecuteTradeRequest
  hasError: boolean
  error?: string
  trade?: Trade
}

export interface SpotTileData {
  currencyChartIsOpening: boolean
  isTradeExecutionInFlight: boolean
  price: SpotPriceTick
  historicPrices: SpotPriceTick[]
  lastTradeExecutionStatus?: LastTradeExecutionStatus | null
  rfqState: RfqState
  rfqReceivedTime: number | null
  rfqTimeout: number | null
  rfqPrice: SpotPriceTick | null
  notional: number
}

export interface CurrencyPairNotional {
  currencyPair: string
  notional: number
}
