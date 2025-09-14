import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VpnButton from '../components/VpnButton';

export default function HomeScreen() {
  const [connected, setConnected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SecureVPN</Text>
      <Text style={styles.status}>
        Status: {connected ? "Connected ✅" : "Disconnected ❌"}
      </Text>

      <VpnButton connected={connected} onPress={() => setConnected(!connected)} />

      <Text style={styles.info}>
        {connected ? "Your connection is secure." : "Tap to connect securely."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#38bdf8",
    marginBottom: 20,
    fontWeight: "bold",
  },
  status: {
    fontSize: 18,
    color: "#e2e8f0",
    marginBottom: 30,
  },
  info: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 20,
  },
});
