import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../pages/Home/HomeScreen";
import Groceries from "../../pages/Groceries/Groceries";
import Recipes from "../../pages/Recipes/Groceries";
import Spending from "../../pages/Spending/Spending";
import Shop from "../../pages/Shop/Shop";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          tabBarLabel: "Groceries",
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarLabel: "Recipes",
        }}
      />
      <Tab.Screen
        name="Spending"
        component={Spending}
        options={{
          tabBarLabel: "Spending",
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: "Shop",
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
