import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ProgressBarAndroid,
  ScrollView,
} from "react-native";

import { LineChart } from "react-native-chart-kit";
import CustomProgress from "../../components/CustomProgress";

import DrawerItem from "../../components/DrawerItem";

const DashboardScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.days}>Daily Revenue Accumulated</Text>
        <View>
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.94} // from react-native
            height={320}
            yAxisLabel="¢"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

              propsForDots: {
                r: "4",
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              paddingLeft: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <Text style={styles.topic}>Top Selling Products</Text>

        <View style={styles.progressContainer}>
          <CustomProgress
            leftText="Samsung A70"
            rightText="28.7% sales"
            progress={0.8}
            color="#F4D532"
          />
          <CustomProgress
            leftText="Hp omen Laptop"
            rightText="22.32% sales"
            progress={0.6}
            color="#E12F2F"
          />
          <CustomProgress
            leftText="Bluetooth 5.0 wireless Ear..."
            rightText="16.92% sales"
            progress={0.7}
            color="#3EDED4"
          />
          <CustomProgress
            leftText="Tecno Spark 5 pro"
            rightText="11.2% sales"
            progress={0.5}
            color="#A85EBB"
          />
        </View>

        <DrawerItem />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10,
  },
  topic: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 15,
  },
  progressContainer: {
    marginTop: 12,
  },
  days: {
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
});
