import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import { useScrollHandler, interpolateColor } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slider";
import SubSlide from "./SubSlide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;
const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Finde the best outfit here",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First, Wear it First",
    description:
      "Haiting the chlothes in your wardrobe? Explore hundres of outfit ideas",
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your way",
    description:
      "Create your individual & unique style and look amazing everyday",
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the lastest trends in fashion and explore your personality",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const OnBoarding = () => {
  // const x = useValue(0);
  // TODO: useScroolEvent?
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description, x }}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoarding;
