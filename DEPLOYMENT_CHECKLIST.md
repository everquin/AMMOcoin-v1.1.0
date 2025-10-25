# 🚨 AMMOcoin v1.1.0 Emergency Deployment Checklist

## **CRITICAL: Complete within 72 hours to avoid network disconnection**

---

## 📋 **Pre-Deployment Checklist**

### **System Requirements**
- [ ] Operating System: Linux, macOS, or Windows
- [ ] RAM: Minimum 4GB, Recommended 8GB+
- [ ] Disk Space: 10GB free for build + blockchain
- [ ] Dependencies installed (see README.md)

### **Preparation**
- [ ] Current AMMOcoin daemon stopped
- [ ] wallet.dat backed up (if applicable)
- [ ] Current binaries backed up
- [ ] Network connectivity verified

---

## 🔧 **Build & Deploy Process**

### **Option A: Quick Deployment (RECOMMENDED)**
- [ ] Run `./EMERGENCY_BUILD.sh` and select option 1
- [ ] Verify build completed successfully
- [ ] Copy binaries to production location
- [ ] Update any systemd/service files
- [ ] Test configuration before starting

### **Option B: Full Modern Applications**
- [ ] Run `./EMERGENCY_BUILD.sh` and select option 2
- [ ] Complete build process
- [ ] Test GUI application (if using)
- [ ] Configure new features as needed

---

## ⚡ **Critical Deployment Steps**

### **1. Stop Current Services**
```bash
# Stop daemon
./pivx-cli stop

# Stop any systemd services
sudo systemctl stop ammocoin  # if applicable

# Verify shutdown
ps aux | grep pivx
```

### **2. Backup Current Setup**
```bash
# Backup binaries
cp pivxd pivxd.v1.0.backup
cp pivx-cli pivx-cli.v1.0.backup

# Backup wallet (if exists)
cp wallet.dat wallet.dat.backup

# Backup configuration
cp pivx.conf pivx.conf.backup
```

### **3. Install New Version**
```bash
# Copy new binaries
cp src/pivxd .
cp src/pivx-cli .
cp src/pivx-tx .

# Set permissions
chmod +x pivxd pivx-cli pivx-tx

# Verify version
./pivxd --version
# Should show: AMMOcoin Core version v1.1.0
```

### **4. Start and Verify**
```bash
# Start daemon
./pivxd -daemon

# Wait for startup (30 seconds)
sleep 30

# Verify network info
./pivx-cli getnetworkinfo

# Check protocol version
./pivx-cli getnetworkinfo | grep protocolversion
# Should show: "protocolversion": 70920

# Check connections
./pivx-cli getconnectioncount
```

---

## 🔒 **Security Verification**

### **Critical Security Checks**
- [ ] Protocol version shows **70920**
- [ ] Version string shows **v1.1.0**
- [ ] Peer connections working
- [ ] DoS protection active (check debug.log)
- [ ] No error messages in debug.log

### **Network Verification Commands**
```bash
# Protocol check
./pivx-cli getnetworkinfo | grep protocolversion

# Peer verification
./pivx-cli getpeerinfo | head -20

# Block sync status
./pivx-cli getblockchaininfo | grep "verificationprogress\|blocks"

# Memory pool status
./pivx-cli getmempoolinfo
```

---

## 📊 **Post-Deployment Monitoring**

### **Monitor for 24 Hours**
- [ ] Peer count stable (>3 connections)
- [ ] Block sync continuing normally
- [ ] No disconnections from network
- [ ] Debug.log shows no errors
- [ ] RPC commands responding correctly

### **Exchange/Service Specific**
- [ ] Trading operations functional
- [ ] Deposit/withdrawal processing
- [ ] Balance reporting accurate
- [ ] API endpoints responding
- [ ] Monitoring systems updated

---

## 🚨 **Emergency Rollback Plan**

If critical issues occur:

### **Immediate Rollback**
```bash
# Stop new version
./pivx-cli stop

# Restore backup
cp pivxd.v1.0.backup pivxd
cp pivx-cli.v1.0.backup pivx-cli

# Restart old version
./pivxd -daemon

# Verify operation
./pivx-cli getnetworkinfo
```

### **Contact Emergency Support**
- **Critical Issues**: emergency@ammocoin.org
- **Discord**: #emergency-support
- **Telegram**: @AMMOcoinEmergency

---

## ⏰ **Timeline Enforcement**

| Time Remaining | Priority | Action |
|----------------|----------|--------|
| **72 Hours** | CRITICAL | Core infrastructure (exchanges, pools) |
| **48 Hours** | HIGH | Masternodes, major stakeholders |
| **24 Hours** | MEDIUM | All other users |
| **0 Hours** | AUTOMATIC | Network begins rejecting old versions |

---

## ✅ **Success Criteria**

### **Deployment Complete When:**
- [ ] New version running (v1.1.0)
- [ ] Protocol version 70920 active
- [ ] Network connections stable
- [ ] All services operational
- [ ] Monitoring confirmed healthy
- [ ] Team notified of completion

### **Network-Wide Success:**
- [ ] >50% nodes upgraded within 24h
- [ ] >90% nodes upgraded within 48h
- [ ] Protocol enforcement activates smoothly
- [ ] No network splits or issues

---

## 📞 **Support Contacts**

### **Emergency Response Team**
- **Primary**: emergency@ammocoin.org
- **Discord**: AMMOcoin Emergency Channel
- **Telegram**: AMMOcoin Support Group

### **Technical Issues**
- **Build Problems**: Include full error output
- **Network Issues**: Provide debug.log excerpt
- **Service Issues**: Include service status and logs

---

**Remember: This is a mandatory security update. Network participation depends on upgrading within 72 hours.**

*AMMOcoin Emergency Response Team*
*October 18, 2025*