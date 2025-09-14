
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [connected, setConnected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SecureVPN</Text>
      <Text style={styles.status}>
        {connected ? "Connected ✅" : "Not Connected ❌"}
      </Text>

      <TouchableOpacity
        style={[styles.button, connected ? styles.disconnect : styles.connect]}
        onPress={() => setConnected(!connected)}
      >
        <Text style={styles.btnText}>
          {connected ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>IP hidden • AES-256 Encryption</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101820",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#00ffcc", marginBottom: 20 },
  status: { fontSize: 18, color: "white", marginBottom: 30 },
  button: {
    padding: 15,
    borderRadius: 50,
    width: 180,
    alignItems: "center",
  },
  connect: { backgroundColor: "#00cc66" },
  disconnect: { backgroundColor: "#ff4444" },
  btnText: { color: "white", fontSize: 18, fontWeight: "bold" },
  footer: { marginTop: 50, color: "#888" },
});
