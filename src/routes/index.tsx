import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonView from '../screens/pokemon';
import PokemonDetail from '../screens/pokemonDetail';
import {RootRouter} from '../const/routes';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={options}
        initialRouteName={RootRouter.pokemonView}>
        <Stack.Screen name={RootRouter.pokemonView} component={PokemonView} />
        <Stack.Screen
          name={RootRouter.pokemonDetails}
          component={PokemonDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
