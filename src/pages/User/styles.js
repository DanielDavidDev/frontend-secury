import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #059;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  background: #aaa;
  z-index: 5;
`;

export const LoggedIn = styled.TouchableOpacity`
  top: 20px;
  justify-content: center;
  align-items: center;
  background-color: #096;
  padding: 10px;
`;

export const LoggedInText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
`;

export const EyeButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 37px;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 90px 20px 0;
  max-height: 400px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.TextInput`
  font-size: 18px;
  margin-top: 3px;
  color: #333;
  justify-content: center;
  border: 1px solid #059;
  border-radius: 20px;
  elevation: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: #c54f3d;
  height: 54px;
  margin-horizontal: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  margin: 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-weight: bold;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
