import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
// import { ScrollView } from 'react-native-virtualized-view'
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SliderBox } from "react-native-image-slider-box";
import ProductItem from "../component/ProductItem";
import { deals, images, list, offers } from "../data";
import { ItemProps, Product } from "../types/types";
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from "react-redux";
// import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { UserType } from "../UserContext";
// import jwt_decode from "jwt-decode";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("jewelry");
  const [items, setItems] = useState<ItemProps[]>([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

// 09040547464

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error, "error message");
      }
    };
    fetchData();
  }, []);

  const onGenderOpen = useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Pressable style={styles.pressable}>
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="black"
            />
            <TextInput placeholder="Search for your favourite products " />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>
        <Pressable style={styles.pressableLocation}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Pressable>
            <Text style={styles.address}>
              42, Ayonnuga Street, Ikoyi Boulevard
            </Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable key={index} style={styles.preesableList}>
              <Image source={{ uri: item.image }} style={styles.scrollImage} />
              <Text style={styles.scrollImgText}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          dotColor={"#13274F"}
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{ width: "100%" }}
        />
        <Text style={styles.trendDeals}>Trending Deals of the week</Text>
        <View style={styles.dealsView}>
          {deals.map((deal, index) => (
            <Pressable key={index} style={styles.dealPressable}>
              <Image source={{ uri: deal.image }} style={styles.dealsImage} />
            </Pressable>
          ))}
        </View>
        <Text style={styles.borderlineText} />
        <Text style={styles.todayDeals}>Today's Deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable key={index} style={styles.pressableOffers}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150, resizeMode: "contain" }}
              />
              <View style={styles.itemView}>
                <Text style={styles.itemText}> Upto {item.offer}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={styles.borderlineText} />
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            width: "45%",
            marginBottom: open ? 50 : 15,
          }}
        >
          <DropDownPicker
            style={{
              borderColor: "#B7B7B7",
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category} //genderValue
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            // placeholder={"choose category..."}
            placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            // onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>

        <View style={styles.productView}>
          {products
            ?.filter((product) => product.category === category)
            .map((product, index) => (
              <ProductItem
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  viewStyle: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  pressableLocation: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#AFEEEE",
  },
  address: {
    fontSize: 13,
    fontWeight: "500",
  },
  scrollImage: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  scrollImgText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
  },
  preesableList: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  trendDeals: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dealsView: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  dealsImage: {
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  dealPressable: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  todayDeals: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  borderlineText: {
    height: 1,
    borderColor: "#D0D0D0",
    borderWidth: 2,
    marginTop: 15,
  },
  pressableOffers: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemView: {
    backgroundColor: "#E31837",
    paddingVertical: 5,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 4,
  },
  itemText: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  placeholderStyles: {},
  dropdownPicker: {
    borderColor: "#B7B7B7",
    height: 30,
    // marginBottom: open() ? 120 : 15,
  },
  productView: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
