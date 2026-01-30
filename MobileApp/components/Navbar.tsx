/**
 * Navbar Component
 * Top navigation bar with branding, theme toggle, and home button
 */

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, usePathname } from 'expo-router';
import Animated, {
    FadeIn,
    FadeInLeft,
    FadeInRight,
} from 'react-native-reanimated';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/context/ThemeContext';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface NavbarProps {
    showHomeButton?: boolean;
}

export function Navbar({ showHomeButton = true }: NavbarProps) {
    const { colorScheme, isDark, toggleTheme } = useTheme();
    const colors = Colors[colorScheme];
    const insets = useSafeAreaInsets();
    const pathname = usePathname();

    const isHome = pathname === '/' || pathname === '/index';

    const handleHomePress = () => {
        router.push('/');
    };

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top + 8,
                    backgroundColor: colors.background,
                    borderBottomColor: colors.border,
                },
            ]}
        >
            {/* Left Section - Branding */}
            <Animated.View entering={FadeInLeft.delay(100).duration(500)} style={styles.brandingSection}>
                <ThemedText style={[styles.appTitle, { color: colors.text }]}>
                    Labelling App
                </ThemedText>
                <ThemedText style={[styles.developerText, { color: colors.textSecondary }]}>
                    developed by Emirhan Aydın
                </ThemedText>
            </Animated.View>

            {/* Right Section - Controls */}
            <Animated.View entering={FadeInRight.delay(200).duration(500)} style={styles.controlsSection}>
                {/* Theme Toggle */}
                <AnimatedTouchable
                    onPress={toggleTheme}
                    style={[
                        styles.iconButton,
                        {
                            backgroundColor: colors.card,
                            borderColor: colors.border,
                        },
                    ]}
                    activeOpacity={0.7}
                >
                    <IconSymbol
                        name={isDark ? 'moon.fill' : 'sun.max.fill'}
                        size={22}
                        color={isDark ? '#FBBF24' : '#F59E0B'}
                    />
                </AnimatedTouchable>

                {/* Home Button - Show only if not on home and showHomeButton is true */}
                {showHomeButton && !isHome && (
                    <AnimatedTouchable
                        entering={FadeIn.duration(300)}
                        onPress={handleHomePress}
                        style={[
                            styles.iconButton,
                            {
                                backgroundColor: colors.primary,
                                borderColor: colors.primary,
                            },
                        ]}
                        activeOpacity={0.7}
                    >
                        <IconSymbol name="house.fill" size={22} color="#FFFFFF" />
                    </AnimatedTouchable>
                )}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 12,
        borderBottomWidth: 1,
    },
    brandingSection: {
        flex: 1,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: -0.5,
    },
    developerText: {
        fontSize: 11,
        fontWeight: '500',
        marginTop: 2,
        opacity: 0.8,
    },
    controlsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});
