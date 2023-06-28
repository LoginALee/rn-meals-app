import { useRef, useState } from "react";
import { Pressable } from "react-native";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

export default function FavoriteIcon({
  onAddFavorite,
  onRemoveFavorite,
  isFavorite = false,
  style,
}) {
  const ref = useRef(null);

  const TransitionIcon = () => (
    <MaterialIcons name="favorite" size={24} color={Colors.Yellow} />
  );

  const Icon = () => (
    <MaterialIcons name="favorite-border" size={24} color={Colors.Yellow} />
  );

  const onPressFunc = () => {
    ref.current?.animateNextTransition();
    isFavorite ? onRemoveFavorite() : onAddFavorite();
  };

  const transition = (
    <Transition.Together>
      <Transition.Out type="scale" durationMs={100} />
      <Transition.Change interpolation="easeInOut" />
      <Transition.In type="scale" durationMs={100} delayMs={50} />
    </Transition.Together>
  );

  if (!TransitionIcon) {
    return (
      <Pressable onPress={onPressFunc}>
        <Icon style={style} />
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPressFunc}>
      <Transitioning.View ref={ref} transition={transition}>
        {!isFavorite ? (
          <Icon style={style} />
        ) : (
          <TransitionIcon style={style} />
        )}
      </Transitioning.View>
    </Pressable>
  );
}
