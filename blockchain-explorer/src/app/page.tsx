import { Activity, Blocks, Users, TrendingUp, Clock, Shield, Zap, Eye } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/ui/SearchBar";

// Mock data - in a real app, this would come from your blockchain API
const mockStats = {
  currentHeight: 55881,
  totalTransactions: 1234567,
  totalAddresses: 89432,
  networkHashrate: "12.5 GH/s",
  blockTime: "60s",
  totalSupply: "99,876,543 AMMO",
  circulatingSupply: "89,123,456 AMMO",
  masternodes: 1247,
};

const mockRecentBlocks = [
  {
    height: 55881,
    hash: "0000000000000000000f3b2b2c5d8e9a7b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8",
    timestamp: Date.now() - 60000,
    transactions: 8,
    size: 1234,
  },
  {
    height: 55880,
    hash: "0000000000000000000e2a1b1d4c7e8a6b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7",
    timestamp: Date.now() - 120000,
    transactions: 12,
    size: 2156,
  },
  {
    height: 55879,
    hash: "0000000000000000000d1a0b0c3d6e7a5b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6",
    timestamp: Date.now() - 180000,
    transactions: 5,
    size: 867,
  },
];

const mockRecentTransactions = [
  {
    txid: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
    timestamp: Date.now() - 30000,
    value: 125.75,
    fee: 0.001,
  },
  {
    txid: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
    timestamp: Date.now() - 45000,
    value: 50.25,
    fee: 0.001,
  },
  {
    txid: "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
    timestamp: Date.now() - 90000,
    value: 1000.0,
    fee: 0.002,
  },
];

function formatTimeAgo(timestamp: number) {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  if (minutes === 0) return "Just now";
  if (minutes === 1) return "1 minute ago";
  return `${minutes} minutes ago`;
}

function formatHash(hash: string, length = 16) {
  return `${hash.slice(0, length)}...`;
}

function formatNumber(num: number) {
  return new Intl.NumberFormat().format(num);
}

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-ammocoin-gradient bg-clip-text text-transparent">
          AMMOcoin Explorer
        </h1>
        <p className="text-xl text-ammocoin-gray-300 mb-8 max-w-3xl mx-auto">
          Explore the AMMOcoin blockchain with privacy-focused features, Sapling transactions,
          and real-time network statistics.
        </p>
        <div className="max-w-2xl mx-auto">
          <SearchBar placeholder="Search blocks, transactions, addresses..." />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-ammocoin-gray-400">
          <span>• Block Height: {formatNumber(mockStats.currentHeight)}</span>
          <span>• Network: Mainnet</span>
          <span>• Consensus: Proof of Stake</span>
          <span>• Privacy: Sapling Protocol</span>
        </div>
      </section>

      {/* Network Statistics */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-ammocoin-white">Network Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <Blocks className="w-5 h-5 text-ammocoin-primary" />
              <span className="text-xs text-ammocoin-gray-400">BLOCKS</span>
            </div>
            <div className="text-2xl font-bold text-ammocoin-white">
              {formatNumber(mockStats.currentHeight)}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Current Height</div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-ammocoin-primary" />
              <span className="text-xs text-ammocoin-gray-400">TXS</span>
            </div>
            <div className="text-2xl font-bold text-ammocoin-white">
              {formatNumber(mockStats.totalTransactions)}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Total Transactions</div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-ammocoin-primary" />
              <span className="text-xs text-ammocoin-gray-400">ADDR</span>
            </div>
            <div className="text-2xl font-bold text-ammocoin-white">
              {formatNumber(mockStats.totalAddresses)}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Total Addresses</div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-5 h-5 text-ammocoin-primary" />
              <span className="text-xs text-ammocoin-gray-400">NODES</span>
            </div>
            <div className="text-2xl font-bold text-ammocoin-white">
              {formatNumber(mockStats.masternodes)}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Masternodes</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-ammocoin-white">AMMOcoin Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 hover:border-ammocoin-primary/50 transition-all">
            <Shield className="w-8 h-8 text-ammocoin-primary mb-4" />
            <h3 className="text-lg font-semibold text-ammocoin-white mb-2">Privacy First</h3>
            <p className="text-ammocoin-gray-400 text-sm">
              Sapling protocol enables completely private transactions with zero-knowledge proofs.
            </p>
          </div>

          <div className="glass-card p-6 hover:border-ammocoin-primary/50 transition-all">
            <Zap className="w-8 h-8 text-ammocoin-primary mb-4" />
            <h3 className="text-lg font-semibold text-ammocoin-white mb-2">Proof of Stake</h3>
            <p className="text-ammocoin-gray-400 text-sm">
              Energy-efficient consensus with staking rewards and masternode infrastructure.
            </p>
          </div>

          <div className="glass-card p-6 hover:border-ammocoin-primary/50 transition-all">
            <Clock className="w-8 h-8 text-ammocoin-primary mb-4" />
            <h3 className="text-lg font-semibold text-ammocoin-white mb-2">Fast Blocks</h3>
            <p className="text-ammocoin-gray-400 text-sm">
              60-second block times ensure quick transaction confirmation.
            </p>
          </div>

          <div className="glass-card p-6 hover:border-ammocoin-primary/50 transition-all">
            <Eye className="w-8 h-8 text-ammocoin-primary mb-4" />
            <h3 className="text-lg font-semibold text-ammocoin-white mb-2">Transparent</h3>
            <p className="text-ammocoin-gray-400 text-sm">
              Full blockchain transparency with optional privacy features.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Blocks */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-ammocoin-white">Recent Blocks</h2>
            <Link
              href="/blocks"
              className="text-ammocoin-primary hover:text-ammocoin-hover transition-colors text-sm"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {mockRecentBlocks.map((block) => (
              <div key={block.height} className="block-card">
                <div className="flex items-center justify-between mb-2">
                  <Link
                    href={`/block/${block.height}`}
                    className="text-ammocoin-primary hover:text-ammocoin-hover font-mono text-lg"
                  >
                    #{formatNumber(block.height)}
                  </Link>
                  <span className="text-sm text-ammocoin-gray-400">
                    {formatTimeAgo(block.timestamp)}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="hash-display">
                    {formatHash(block.hash)}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ammocoin-gray-400">
                      {block.transactions} transactions
                    </span>
                    <span className="text-ammocoin-gray-400">
                      {formatNumber(block.size)} bytes
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Transactions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-ammocoin-white">Recent Transactions</h2>
            <Link
              href="/transactions"
              className="text-ammocoin-primary hover:text-ammocoin-hover transition-colors text-sm"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {mockRecentTransactions.map((tx) => (
              <div key={tx.txid} className="block-card">
                <div className="flex items-center justify-between mb-2">
                  <Link
                    href={`/tx/${tx.txid}`}
                    className="text-ammocoin-primary hover:text-ammocoin-hover font-mono"
                  >
                    {formatHash(tx.txid, 12)}
                  </Link>
                  <span className="text-sm text-ammocoin-gray-400">
                    {formatTimeAgo(tx.timestamp)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ammocoin-white font-semibold">
                    {tx.value.toFixed(2)} AMMO
                  </span>
                  <span className="text-xs text-ammocoin-gray-400">
                    Fee: {tx.fee} AMMO
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Supply Information */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-ammocoin-white">Supply Information</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="stat-card">
            <div className="text-2xl font-bold text-ammocoin-primary mb-2">
              {mockStats.totalSupply}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Total Supply</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-ammocoin-primary mb-2">
              {mockStats.circulatingSupply}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Circulating Supply</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-ammocoin-primary mb-2">
              {mockStats.blockTime}
            </div>
            <div className="text-sm text-ammocoin-gray-400">Average Block Time</div>
          </div>
        </div>
      </section>
    </div>
  );
}