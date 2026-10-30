import { colors } from '@/styles/global';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color as string} />,
        }}
      />
      <Tabs.Screen
        name='add-meal'
        options={{
          title: 'Add Meal',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color as string} />,
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color as string} />,
        }}
      />
    </Tabs>
  );
}
