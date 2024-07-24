import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 300;

interface MarkerPoint {
  lat: number
  lng: number
}

type MarkersMapProps = PropsWithChildren<{
  markers?: MarkerPoint[]
}>;

export default function MarkersMap({
  markers,
  children,
}: MarkersMapProps) {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <MapView 
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          pitchEnabled={false}
          camera={{
            center: {
              latitude: 40.7448608,
              longitude: -73.9366702
            },
            zoom: 10,
            pitch: 12,
            heading: 12,
          }}

        >
          {markers && (markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lng,
              }}
            />
          )))}
        </MapView>
      </View>
      <View style={styles.content}>{children}</View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: HEADER_HEIGHT,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
