import { View } from 'react-native';
import ReturnBack from '@/presentation/components/admin/ReturnBack';
import { alerts } from '@/presentation/data/alerts.data';
import AlertTrack from '@/presentation/components/alerts/AlertTrack';
import AlertCounter from '@/presentation/components/alerts/AlertCounter';

const infoAlerts = alerts.filter( alert => alert.type == 'info' );
const warnAlerts = alerts.filter( alert => alert.type == 'warn' );
const errorAlerts = alerts.filter( alert => alert.type == 'error' );

const AlertsScreen = () => {
  return (
    <View>
      <ReturnBack title='Alertas Emitidas' />
      <AlertCounter alerts={[ infoAlerts, warnAlerts, errorAlerts ]} />
      <AlertTrack type="info" titleSection="Información" alerts={infoAlerts} />
      <AlertTrack type="warn" titleSection="Avisos" alerts={warnAlerts} />
      <AlertTrack type="error" titleSection="Errores" alerts={errorAlerts} />
    </View>
  )
}

export default AlertsScreen