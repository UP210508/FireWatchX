import { View, Text, StyleSheet, Linking } from 'react-native';
import ReturnBack from '@/presentation/components/admin/ReturnBack';

const HelpScreen = () => {
  const email = 'FireSupport@firewatchx.com';
  const phone = '449 7735179';

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={styles.container}>
      <ReturnBack title="Ayuda" />
      <View style={styles.content}>
        <Text style={styles.title}>¿Necesitas ayuda?</Text>
        <Text style={styles.description}>
          Si necesitas soporte técnico, no dudes en contactarnos a través de los siguientes medios:
        </Text>
        <Text style={styles.contact} onPress={handleEmailPress}>
          📧 Email: <Text style={styles.link}>{email}</Text>
        </Text>
        <Text style={styles.contact} onPress={handlePhonePress}>
          📞 Teléfono: <Text style={styles.link}>{phone}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F0',
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A22C29',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  contact: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default HelpScreen;
