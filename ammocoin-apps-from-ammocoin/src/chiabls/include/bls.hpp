// TEMPORARY BLS STUB - for core functionality without chiabls library
// This allows compilation while BLS features are disabled
// TO BE REPLACED with actual chiabls library once build issues are resolved

#ifndef BLS_HPP
#define BLS_HPP

#include <vector>
#include <string>

// Minimal stub classes to satisfy compilation dependencies
namespace bls {

// Bytes type for compatibility - inherits from vector for transparent compatibility
class Bytes : public std::vector<uint8_t> {
public:
    Bytes() : std::vector<uint8_t>() {}
    Bytes(const std::vector<uint8_t>& data) : std::vector<uint8_t>(data) {}
    // Direct constructor from initializer list for easy construction
    Bytes(std::initializer_list<uint8_t> init) : std::vector<uint8_t>(init) {}
};

class G1Element {
public:
    G1Element() = default;
    static G1Element FromBytes(const std::vector<uint8_t>& bytes) { return G1Element(); }
    std::vector<uint8_t> Serialize() const { return std::vector<uint8_t>(); }
    bool IsValid() const { return false; }
    static G1Element Generator() { return G1Element(); }
    G1Element operator+(const G1Element& other) const { return G1Element(); }
    bool operator==(const G1Element& other) const { return false; }
    bool operator!=(const G1Element& other) const { return true; }
};

class G2Element {
public:
    G2Element() = default;
    static G2Element FromBytes(const std::vector<uint8_t>& bytes) { return G2Element(); }
    std::vector<uint8_t> Serialize() const { return std::vector<uint8_t>(); }
    bool IsValid() const { return false; }
    static G2Element Generator() { return G2Element(); }
    G2Element operator+(const G2Element& other) const { return G2Element(); }
    bool operator==(const G2Element& other) const { return false; }
    bool operator!=(const G2Element& other) const { return true; }
};

class GTElement {
public:
    GTElement() = default;
    bool operator==(const GTElement& other) const { return false; }
};

class PrivateKey {
public:
    PrivateKey() = default;
    static PrivateKey FromBytes(const std::vector<uint8_t>& bytes) { return PrivateKey(); }
    static PrivateKey FromSeed(const std::vector<uint8_t>& seed) { return PrivateKey(); }
    std::vector<uint8_t> Serialize() const { return std::vector<uint8_t>(); }
    G1Element GetG1Element() const { return G1Element(); }
    G2Element GetG2Element() const { return G2Element(); }
    G2Element Sign(const std::vector<uint8_t>& message) const { return G2Element(); }
    bool operator==(const PrivateKey& other) const { return false; }
};

} // namespace bls

#endif // BLS_HPP