# AMMOcoin v1.1.0

**Privacy-Focused Cryptocurrency Platform with Multi-Platform Support**

[![Build Status](https://img.shields.io/badge/build-production--ready-brightgreen)](https://github.com/AMMOcoin/AMMOcoin)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows%20%7C%20ARM64-blue)](https://github.com/AMMOcoin/AMMOcoin)
[![License](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/licenses/MIT)

---

## What is AMMOcoin?

AMMOcoin is a modern, privacy-focused cryptocurrency built on proven blockchain technology. It combines the robust foundation of Bitcoin with advanced privacy features, energy-efficient Proof-of-Stake consensus, and comprehensive multi-platform support.

### Key Features

🛡️ **Privacy Technology**
- **Sapling Protocol**: Zero-knowledge proofs for completely private transactions
- **Shielded Addresses**: Optional privacy for enhanced transaction confidentiality
- **Selective Disclosure**: Users control transaction visibility

⚡ **Advanced Consensus**
- **Proof-of-Stake**: Energy-efficient mining alternative
- **Masternode Network**: Tier-two infrastructure for enhanced services
- **Fast Block Times**: Quick transaction confirmation

🏛️ **Governance & Economics**
- **Decentralized Voting**: Community-driven development decisions
- **Treasury System**: Sustainable funding for ecosystem growth
- **Staking Rewards**: Passive income for network participants

🔧 **Developer Features**
- **JSON-RPC API**: Complete programmatic blockchain access
- **Multi-signature Support**: Enterprise-grade security
- **HD Wallets**: BIP32/44 hierarchical deterministic wallets

---

## 📦 **What's Available**

### ✅ **Production Ready**

#### **1. macOS Binaries** (Native ARM64/Intel)
- `ammocoind` (11.6MB) - Core daemon server
- `ammocoin-cli` (820KB) - Command-line interface
- `ammocoin-tx` (1.7MB) - Transaction utility
- **Status**: Working and tested

#### **2. Secure Paper Wallet Generator**
- Modern HTML/JavaScript implementation
- Web Crypto API for cryptographically secure generation
- QR code support for mobile scanning
- Offline operation capability

#### **3. Cross-Platform Build System**
- Docker-based compilation for Linux x64
- Docker-based compilation for Windows x64
- Docker-based compilation for ARM64/Raspberry Pi
- Automated build scripts for all platforms

---

## 🚀 **Quick Start**

### macOS Installation

```bash
# Clone the repository
git clone https://github.com/AMMOcoin/AMMOcoin.git
cd AMMOcoin

# Use pre-built binaries (recommended)
cd ammocoin-apps-from-ammocoin
./ammocoind -daemon
./ammocoin-cli getinfo
```

### Build from Source

```bash
# Install dependencies (macOS)
brew install boost berkeley-db@4 libevent openssl qt@5

# Build AMMOcoin
cd ammocoin-apps-from-ammocoin
./configure --with-incompatible-bdb --disable-tests --disable-bench
make -j4
```

### Multi-Platform Compilation

```bash
# Build for all platforms using Docker
cd cross-compile
./build-all-platforms.sh

# Creates binaries for:
# - Linux x64
# - Windows x64
# - ARM64/Raspberry Pi
```

---

## 💻 **Platform Support**

| Platform | Status | Binary Size | Notes |
|----------|--------|-------------|--------|
| **macOS ARM64** | ✅ Working | 14MB total | Native M1/M2 support |
| **macOS Intel** | ✅ Working | 14MB total | Via Rosetta compatibility |
| **Linux x64** | 🔄 Ready for build | ~14MB | Ubuntu/Debian/CentOS |
| **Windows x64** | 🔄 Ready for build | ~14MB | Windows 10/11 |
| **ARM64/RPi** | 🔄 Ready for build | ~14MB | Raspberry Pi 4/5 |

---

## 🔧 **Usage Examples**

### Basic Operations
```bash
# Start daemon
./ammocoind -daemon

# Check node status
./ammocoin-cli getinfo

# Create new address
./ammocoin-cli getnewaddress

# Send transaction
./ammocoin-cli sendtoaddress "address" 10.0

# Enable staking
./ammocoin-cli walletpassphrase "passphrase" 999999 true
```

### Privacy Transactions
```bash
# Create shielded address
./ammocoin-cli getnewshieldedaddress

# Shield coins for privacy
./ammocoin-cli shieldsendmany "from_address" '[{"address":"shielded_address","amount":10}]'
```

### Paper Wallet Generation
```bash
# Open the paper wallet generator
open paper-wallet-generator/index.html
# Generate secure offline wallets with QR codes
```

---

## 📊 **Technical Specifications**

### Network Parameters
- **Port**: 55881
- **RPC Port**: 55882
- **Block Time**: 60 seconds
- **Algorithm**: Proof-of-Stake
- **Masternode Collateral**: 10,000 AMMO

### Privacy Features
- **Protocol**: Sapling (zk-SNARKs)
- **Address Format**: AMMOcoin-specific (0x17 version)
- **Private Keys**: WIF format (0x97 version)
- **Cryptography**: SHA256, RIPEMD160, secp256k1

---

## 📝 **Documentation**

- **Installation Guide**: [ammocoin-apps-from-ammocoin/README.md](ammocoin-apps-from-ammocoin/README.md)
- **Paper Wallet Guide**: [paper-wallet-generator/README.md](paper-wallet-generator/README.md)
- **Build Instructions**: [cross-compile/README.md](cross-compile/README.md)
- **Release Summary**: [MULTI_PLATFORM_RELEASE_SUMMARY.md](MULTI_PLATFORM_RELEASE_SUMMARY.md)
- **Whitepapers**: [AMMOcoin_Whitepaper_v1.1.0.md](AMMOcoin_Whitepaper_v1.1.0.md)

---

## 🔒 **Security**

### Reporting Vulnerabilities
For security concerns, please email: security@ammocoin.org

**Do not create public issues for security vulnerabilities.**

### Best Practices
- Always encrypt your wallet with a strong passphrase
- Regular backup of wallet.dat
- Keep software updated
- Use official releases only
- Verify checksums before installation

---

## 🤝 **Contributing**

We welcome contributions! Please see our contribution guidelines for:
- Code standards and review process
- Testing requirements
- Documentation standards
- Community guidelines

---

## 📄 **License**

AMMOcoin Core is released under the terms of the MIT license. See [COPYING](COPYING) for more information.

---

## 🌟 **Acknowledgments**

AMMOcoin is built upon the foundational work of Bitcoin, PIVX, Zcash, and the broader cryptocurrency development community. We acknowledge their contributions to open-source blockchain technology.

---

**Current Version**: v1.1.0
**Release Date**: October 2024
**Status**: Production Ready ✅
