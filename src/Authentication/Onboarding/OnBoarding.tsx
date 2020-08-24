import React from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { useValue, onScrollEvent } from "react-native-redash";

import Slider, { SLIDE_HEIGHT } from "./Slider";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const OnBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          <Slider label="Relaxed" />
          <Slider label="Playfull" right />
          <Slider label="Excentric" />
          <Slider label="Funky" right />
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        ></View>
      </View>
    </View>
  );
};

export default OnBoarding;
