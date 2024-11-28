// components/PieChartComponent.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartComponent = ({ data }) => {
  return (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 40} // Adjust width to fit the screen
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // Number of decimal places to show
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default PieChartComponent;
