import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "../navigation/ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopTab"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <FontAwesome6
                    name="shop"
                    size={28}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Shop
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <Entypo
                    name="shopping-cart"
                    size={28}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Cart
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <FontAwesome
                    name="list-ul"
                    size={30}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Orders
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.rossy_brown,
    height: "9%",
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
