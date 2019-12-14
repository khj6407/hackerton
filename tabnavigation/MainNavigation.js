import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Navigation from "./Navigation";
import AddContent from "../components/TextInput/AddContent";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: Navigation,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: AddContent
    }
  },
  {
    headerMode: "screen",
    mode: "card" //card, modal
  }
);

export default createAppContainer(MainNavigation);
