import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Component() {
  const height = useHeaderHeight();

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const handleFocusTextInputUp = () => {
    setFocus((prevState) => ({
      ...prevState,
      upInputFocus: true,
    }));
    setKeyboardOpen(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardOpen ? height : 0}
    >
      <TextInput onFocus={handleFocusTextInputUp} />
    </KeyboardAvoidingView>
  );
}
