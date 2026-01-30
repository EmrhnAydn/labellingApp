/**
 * Labelling App - Home Screen
 * Modern, dynamic home screen with theme toggle and quick actions
 */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
  withSequence,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/context/ThemeContext';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { ThemeToggle } from '@/components/ThemeToggle';
import { IconSymbol } from '@/components/ui/icon-symbol';

const { width } = Dimensions.get('window');

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function HomeScreen() {
  const { colorScheme, isDark } = useTheme();
  const colors = Colors[colorScheme];
  const insets = useSafeAreaInsets();

  // Animation values
  const pulse = useSharedValue(1);

  React.useEffect(() => {
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1500 }),
        withTiming(1, { duration: 1500 })
      ),
      -1,
      true
    );
  }, []);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  const navigateToCamera = () => {
    router.push('/(tabs)/camera');
  };

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.header}>
        <View>
          <ThemedText style={[styles.welcomeText, { color: colors.textSecondary }]}>
            Hoş Geldiniz
          </ThemedText>
          <ThemedText type="title" style={styles.appTitle}>
            Labelling App
          </ThemedText>
        </View>
        <ThemeToggle />
      </Animated.View>

      {/* Hero Section */}
      <Animated.View entering={FadeIn.delay(300).duration(800)} style={styles.heroSection}>
        <Animated.View
          style={[
            styles.heroGradient,
            { backgroundColor: isDark ? colors.primary + '30' : colors.primary + '15' },
            pulseStyle
          ]}
        >
          <IconSymbol
            name="tag.fill"
            size={80}
            color={colors.primary}
          />
        </Animated.View>
        <ThemedText style={[styles.heroText, { color: colors.textSecondary }]}>
          Görsellerinizi kolayca etiketleyin
        </ThemedText>
      </Animated.View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Animated.View entering={FadeInUp.delay(500).duration(600)}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Hızlı Başla
          </ThemedText>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(600).duration(600)} style={styles.cardsRow}>
          <AnimatedTouchable
            style={[
              styles.actionCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                shadowColor: colors.shadow,
              }
            ]}
            onPress={navigateToCamera}
            activeOpacity={0.8}
          >
            <View style={[styles.cardIcon, { backgroundColor: colors.primary + '20' }]}>
              <IconSymbol name="camera.fill" size={32} color={colors.primary} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
              Fotoğraf Çek
            </ThemedText>
            <ThemedText style={[styles.cardDesc, { color: colors.textSecondary }]}>
              Kamera ile yeni görsel
            </ThemedText>
          </AnimatedTouchable>

          <AnimatedTouchable
            style={[
              styles.actionCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                shadowColor: colors.shadow,
              }
            ]}
            onPress={navigateToCamera}
            activeOpacity={0.8}
          >
            <View style={[styles.cardIcon, { backgroundColor: colors.success + '20' }]}>
              <IconSymbol name="photo.fill" size={32} color={colors.success} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
              Galeriden Seç
            </ThemedText>
            <ThemedText style={[styles.cardDesc, { color: colors.textSecondary }]}>
              Mevcut görselleri aç
            </ThemedText>
          </AnimatedTouchable>
        </Animated.View>
      </View>

      {/* Theme Info */}
      <Animated.View
        entering={FadeInUp.delay(800).duration(600)}
        style={[styles.themeInfo, { backgroundColor: colors.backgroundSecondary, borderColor: colors.border }]}
      >
        <IconSymbol
          name={isDark ? 'moon.fill' : 'sun.max.fill'}
          size={20}
          color={isDark ? '#FBBF24' : '#F59E0B'}
        />
        <ThemedText style={[styles.themeInfoText, { color: colors.textSecondary }]}>
          {isDark ? 'Karanlık mod aktif' : 'Aydınlık mod aktif'} - Sağ üstten değiştir
        </ThemedText>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  welcomeText: {
    fontSize: 14,
    marginBottom: 4,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '800',
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  heroGradient: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroText: {
    fontSize: 16,
    textAlign: 'center',
  },
  actionsContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  actionCard: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
  },
  themeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  themeInfoText: {
    fontSize: 14,
    flex: 1,
  },
});
