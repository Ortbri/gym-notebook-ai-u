import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { useUnistyles } from 'react-native-unistyles';

const TabsLayout = () => {
  const { theme } = useUnistyles();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
        headerStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
        headerTitleStyle: {
          color: theme.colors.text.primary,
        },
      }}>
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'fire' : 'fire'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'bar-chart' : 'bar-chart'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
