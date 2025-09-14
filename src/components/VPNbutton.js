import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function VpnButton({ connected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, connected ? styles.connected : styles.disconnected]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {connected ? "Disconnect" : "Connect"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  connected: {
    backgroundColor: "#ef4444",
  },
  disconnected: {
    backgroundColor: "#22c55e",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
