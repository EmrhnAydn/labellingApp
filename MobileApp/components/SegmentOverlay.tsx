/**
 * SegmentOverlay Component
 * Renders SVG segmentation path over an image
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/context/ThemeContext';
import type { Region } from '@/services/moondreamApi';

interface SegmentOverlayProps {
    svgPath: string;
    bbox: Region;
    imageWidth: number;
    imageHeight: number;
}

export function SegmentOverlay({
    svgPath,
    bbox,
    imageWidth,
    imageHeight,
}: SegmentOverlayProps) {
    const { colorScheme } = useTheme();
    const colors = Colors[colorScheme];

    if (!svgPath) {
        return null;
    }

    // Convert normalized bbox to pixel coordinates
    const bboxLeft = bbox.x_min * imageWidth;
    const bboxTop = bbox.y_min * imageHeight;
    const bboxWidth = (bbox.x_max - bbox.x_min) * imageWidth;
    const bboxHeight = (bbox.y_max - bbox.y_min) * imageHeight;

    // Scale the SVG path from normalized (0-1) to image dimensions
    const scaledPath = scalePathToImage(svgPath, imageWidth, imageHeight);

    return (
        <Animated.View
            entering={FadeIn.duration(500)}
            style={[styles.container, { width: imageWidth, height: imageHeight }]}
        >
            <Svg width={imageWidth} height={imageHeight} style={styles.svg}>
                {/* Segmentation mask */}
                <Path
                    d={scaledPath}
                    fill={colors.primary}
                    fillOpacity={0.4}
                    stroke={colors.primary}
                    strokeWidth={2}
                />
                {/* Bounding box indicator */}
                <Rect
                    x={bboxLeft}
                    y={bboxTop}
                    width={bboxWidth}
                    height={bboxHeight}
                    fill="transparent"
                    stroke={colors.success}
                    strokeWidth={2}
                    strokeDasharray="8,4"
                />
            </Svg>
        </Animated.View>
    );
}

/**
 * Scale SVG path coordinates from normalized (0-1) to image pixel dimensions
 */
function scalePathToImage(path: string, width: number, height: number): string {
    // Parse and scale the path coordinates
    // SVG path format: M x y L x y L x y ...
    return path.replace(
        /([ML])\s*([\d.]+)\s+([\d.]+)/gi,
        (match, command, x, y) => {
            const scaledX = parseFloat(x) * width;
            const scaledY = parseFloat(y) * height;
            return `${command} ${scaledX.toFixed(2)} ${scaledY.toFixed(2)}`;
        }
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default SegmentOverlay;
