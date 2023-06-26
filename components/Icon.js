import { useRef, useState } from "react";
import { Pressable } from "react-native";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";

export default function Icon({
  Icon,
  TransitionIcon,
  onPress,
  style,
  transitionIconStyle,
}) {
  const ref = useRef(null);
  const [toggled, setToggled] = useState(false);

  const toggle = () => setToggled(!toggled);

  const onPressFunc = () => {
    toggle();
    ref.current?.animateNextTransition();
    onPress && onPress();
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
        {!toggled ? (
          <Icon style={style} />
        ) : (
          <TransitionIcon style={transitionIconStyle} />
        )}
      </Transitioning.View>
    </Pressable>
  );
}
