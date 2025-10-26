# AMMOcoin Paper Wallet Generator

A secure, offline paper wallet generator for AMMOcoin cryptocurrency.

## Features

- 🔒 **Secure**: Uses Web Crypto API for cryptographically secure random number generation
- 🌐 **Offline**: Can be used completely offline for maximum security
- 🖨️ **Print-Ready**: Optimized layout for printing physical wallets
- 📱 **QR Codes**: Automatic QR code generation for easy mobile scanning
- 🎯 **Multiple Wallets**: Generate up to 5 wallets at once
- ⚡ **Entropy Options**: Additional entropy via mouse movement and custom input
- ✅ **Validation**: Built-in address validation to ensure correctness

## Security Features

- Cryptographically secure random number generation
- Base58 encoding with checksums
- AMMOcoin-specific address formatting
- WIF (Wallet Import Format) private key generation
- Mouse entropy collection for additional randomness
- Offline operation capability

## How to Use

### For Maximum Security:

1. **Download the HTML file** to a clean, offline computer
2. **Disconnect from the internet** before opening
3. **Open** `index.html` in any modern web browser
4. **Add entropy** by moving your mouse randomly
5. **Generate wallets** using the interface
6. **Print immediately** and store securely
7. **Clear browser data** and delete files after use

### Quick Instructions:

1. Select number of wallets to generate (1-5)
2. Optionally add custom entropy text
3. Click "Add Mouse Entropy" and move mouse randomly for 10 seconds
4. Click "Generate New Wallets"
5. Print the wallets using the print button
6. Store printed copies securely

## Wallet Information

Each generated wallet contains:

- **Public Address**: Use this to receive AMMOcoin (safe to share)
- **Private Key (WIF)**: Keep this SECRET - controls your funds
- **QR Codes**: For easy scanning with mobile wallets

## Technical Details

- **Address Version**: 0x17 (AMMOcoin 'A' addresses)
- **Private Key Version**: 0x97 (AMMOcoin WIF format)
- **Encoding**: Base58Check encoding with checksums
- **Hash Functions**: SHA256 and RIPEMD160 for address generation
- **Key Format**: Compressed public keys (33 bytes)

## Security Warnings

⚠️ **CRITICAL SECURITY NOTES:**

- Never use this generator on a computer connected to the internet if you plan to store significant funds
- Always validate generated addresses before sending funds
- Store multiple backup copies in secure, separate locations
- Never enter your private key on any online service unless you're moving ALL funds
- Paper can be damaged by fire/water - consider additional backup methods

## Browser Compatibility

This generator works in all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Technical Implementation

The generator uses:
- **Web Crypto API** for secure random number generation
- **CryptoJS** for cryptographic hash functions
- **QRCode.js** for QR code generation
- **Custom Base58** implementation for Bitcoin-style encoding
- **AMMOcoin network parameters** for proper address generation

## License

This paper wallet generator is provided as-is for the AMMOcoin community. Use at your own risk.

## Verification

To verify the integrity of generated addresses:
1. Use the built-in "Validate Addresses" function
2. Cross-check with official AMMOcoin wallet software
3. Test with small amounts first

## Support

For support with AMMOcoin or this paper wallet generator, please visit the official AMMOcoin community channels.

---

**Remember: Your private keys are your responsibility. Keep them safe!**