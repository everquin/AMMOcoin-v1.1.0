# 🚨 AMMOcoin v1.1.0 Emergency Security Release

## **CRITICAL: Network Enforcement in 72 Hours**

This emergency release provides **critical security updates** for the AMMOcoin network. All users **MUST** upgrade within 72 hours to avoid network disconnection.

---

## 🔒 **Security Fixes Applied**

### **1. DoS Attack Prevention** ⭐ **CRITICAL**
- **Fixed**: Mempool command abuse vulnerability
- **Impact**: Prevents network flooding attacks that could crash nodes
- **Code**: Added protection in `src/main.cpp` line 6594

### **2. Protocol Security Upgrade** ⭐ **CRITICAL**
- **Updated**: Protocol version 70916 → 70920
- **Enforcement**: Older protocol versions will be rejected after 72 hours
- **Impact**: Forces all nodes to use secure communication

### **3. Modern Codebase** ⭐ **MAJOR IMPROVEMENT**
- **Source**: Latest PIVX v5.6.1 adapted to AMMOcoin
- **Benefits**: 5-6 years of security patches and improvements
- **Features**: Modern Qt GUI, cross-platform support, enhanced stability

---

## 📦 **What's Included**

This release provides **TWO APPROACHES** for the emergency upgrade:

### **Option A: Updated Core Daemon** ⭐ **IMMEDIATE DEPLOYMENT**
- **Location**: `/ammocoin-source/` directory
- **Status**: ✅ **Ready for immediate use**
- **Security**: All critical patches applied
- **Protocol**: Version 70920 with DoS protection

### **Option B: Modern Applications** ⭐ **ADVANCED FEATURES**
- **Location**: `/ammocoin-apps-from-ammocoin/` directory
- **Status**: 🔄 **Advanced build in progress**
- **Features**: Modern Qt GUI, enhanced functionality
- **Timeline**: Complete within 2-4 hours

---

## ⚡ **IMMEDIATE DEPLOYMENT (Option A)**

For **critical infrastructure** and **immediate deployment**:

### **1. Build Updated Core Daemon**
```bash
cd ammocoin-source
./autogen.sh
./configure --with-boost=/opt/homebrew
make -j4

# Binaries will be in src/
# - pivxd (AMMOcoin daemon with v1.1.0 security patches)
# - pivx-cli (Command line interface)
# - pivx-tx (Transaction utility)
```

### **2. Quick Deployment**
```bash
# Stop current daemon
./pivx-cli stop

# Backup current version
cp pivxd pivxd.v1.0.backup

# Install new version
cp src/pivxd .
cp src/pivx-cli .
cp src/pivx-tx .

# Restart with new version
./pivxd -daemon

# Verify upgrade
./pivx-cli getnetworkinfo
# Should show: "protocolversion": 70920
```

---

## 🎯 **ADVANCED DEPLOYMENT (Option B)**

For **modern applications** with enhanced features:

### **1. Complete the Modern Build**
```bash
cd ammocoin-apps-from-pivx
# Build should complete automatically
make -j4

# Will create:
# - ammocoind (Modern AMMOcoin daemon)
# - ammocoin-cli (Updated CLI)
# - ammocoin-tx (Updated transaction tool)
# - ammocoin-qt (Modern GUI wallet)
```

### **2. Full Feature Set**
- ✅ **Modern Qt GUI** - Professional wallet interface
- ✅ **Cross-platform** - Windows, macOS, Linux support
- ✅ **Enhanced Security** - Latest security improvements
- ✅ **Advanced Features** - Masternodes, staking, privacy features

---

## 🔧 **Build Dependencies**

### **macOS (Homebrew)**
```bash
brew install automake autoconf libtool boost berkeley-db qt@5
```

### **Ubuntu/Debian**
```bash
sudo apt update
sudo apt install build-essential libtool autotools-dev automake pkg-config
sudo apt install libssl-dev libevent-dev bsdmainutils python3
sudo apt install libboost-all-dev libdb4.8-dev libdb4.8++-dev
sudo apt install qt5-default qttools5-dev-tools
```

---

## ⚠️ **CRITICAL TIMELINE**

| Hours Remaining | Action Required |
|-----------------|-----------------|
| **72 Hours** | All infrastructure must upgrade |
| **48 Hours** | Masternodes and services |
| **24 Hours** | All users should upgrade |
| **0 Hours** | Network enforcement begins |

---

## 🧪 **Quick Verification**

After upgrading, verify your node is secure:

```bash
# Check protocol version (should be 70920)
./pivx-cli getnetworkinfo | grep protocolversion

# Check version string (should show v1.1.0)
./pivxd --version

# Check peer connections
./pivx-cli getpeerinfo | grep version
```

**Expected Output:**
- Protocol version: `70920`
- Version string: `AMMOcoin Core version v1.1.0`
- DoS protection: Active (check debug.log)

---

## 📞 **Emergency Support**

### **For Critical Issues:**
- **Discord**: [AMMOcoin Emergency Channel]
- **Telegram**: [AMMOcoin Support]
- **Email**: emergency@ammocoin.org

### **Deployment Priority:**
1. **Exchanges & Services** - Immediate upgrade required
2. **Masternodes** - Upgrade within 24 hours
3. **All Users** - Upgrade within 48 hours

---

## 💾 **Wallet Compatibility**

✅ **Your existing wallet.dat files are fully compatible**
- No wallet migration required
- Same address format
- Same private key format
- Blockchain history preserved

**Simply stop, upgrade, and restart!**

---

**This is a mandatory security update. Upgrade immediately to maintain network participation and security.**

---

*AMMOcoin Development Team*
*October 18, 2025*
*Emergency Security Release v1.1.0*
