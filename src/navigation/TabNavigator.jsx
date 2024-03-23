import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "../navigation/ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";
import { useSelector } from "react-redux";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const cartItems = useSelector((state) => state.cartReducer.value.items);

  return (
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
                  Tienda
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
                <View style={styles.cartNumber}>
                  <Entypo
                    name="shopping-cart"
                    size={28}
                    color={focused ? "white" : "black"}
                    style={{ marginLeft: "3%", marginTop: "10%" }}
                  />
                  {cartItems.length > 0 ? (
                    <Text
                      style={{
                        color: focused ? "white" : "black",
                      }}
                    >
                      {cartItems.length}
                    </Text>
                  ) : null}
                </View>
                <Text style={{ color: focused ? "white" : "black" }}>
                  Carrito
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
                  Ordenes
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={32}
                  color={focused ? "white" : "black"}
                />
                <Text style={{ color: focused ? "white" : "black" }}>
                  Perfil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
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
  cartNumber: {
    flexDirection: "row",
  },
});
