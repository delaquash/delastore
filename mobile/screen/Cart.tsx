import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  CartProps,
  incrementQuantity,
  reduceQuantity,
  removeFromCart,
} from "../reducers/cartReducer";
import { RootState } from "../store";

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((prev, current) => current + prev, 0);
  const increaseQuantity = (item: CartProps) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item: CartProps) => {
    dispatch(reduceQuantity(item));
  };
  const deleteItem = (item: CartProps) => {
    dispatch(removeFromCart(item));
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Pressable style={styles.containerPress}>
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>

        <Feather name="mic" size={24} color="black" />
      </View>

      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>Subtotal : </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{total}</Text>
      </View>
      <Text style={{ marginHorizontal: 10 }}>EMI details Available</Text>

      <Pressable
        onPress={() => navigation.navigate("Confirm")}
        style={styles.pressLength}
      >
        <Text>Proceed to Buy ({cart.length}) items</Text>
      </Pressable>
      <Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 1,
          marginTop: 16,
        }}
      />

      <View style={{ marginHorizontal: 10 }}>
        {cart?.map((item: CartProps, index: React.Key | null | undefined) => (
          <View style={styles.cartView} key={index}>
            <Pressable style={styles.cartPress}>
              <View>
                <Image
                  style={{ width: 140, height: 140, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                />
              </View>
              <View>
                <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                  {item?.title}
                </Text>
                <Text style={styles.cartPrice}>{item?.price}</Text>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={{
                    uri: "https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png",
                  }}
                />
                <Text style={{ color: "green" }}>In Stock</Text>
                <Text style={{ fontWeight: "500", marginTop: 6 }}>
                  {item?.rating?.rate} ratings
                </Text>
              </View>
            </Pressable>

            <Pressable style={styles.pressQuantity}>
              <View style={styles.viewQuantity}>
                {item?.quantity > 1 ? (
                  <Pressable
                    onPress={() => decreaseQuantity(item)}
                    style={styles.pressDelete}
                  >
                    <AntDesign name="minus" size={24} color="black" />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => deleteItem(item)}
                    style={styles.pressDelete}
                  >
                    <AntDesign name="delete" size={24} color="black" />
                  </Pressable>
                )}

                <Pressable
                  style={{
                    backgroundColor: "white",
                    paddingHorizontal: 18,
                    paddingVertical: 6,
                  }}
                >
                  <Text>{item?.quantity}</Text>
                </Pressable>

                <Pressable
                  onPress={() => increaseQuantity(item)}
                  style={styles.pressDelete}
                >
                  <Feather name="plus" size={24} color="black" />
                </Pressable>
              </View>
              <Pressable
                onPress={() => deleteItem(item)}
                style={styles.deleteItem}
              >
                <Text>Delete</Text>
              </Pressable>
            </Pressable>

            <Pressable style={styles.pressLater}>
              <Pressable style={styles.viewLater}>
                <Text>Save For Later</Text>
              </Pressable>

              <Pressable style={styles.moreInfo}>
                <Text>See More Like this</Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  containerScroll: {
    marginTop: 55,
    flex: 1,
    backgroundColor: "white",
  },
  containerPress: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  pressLength: {
    backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  cartView: {
    backgroundColor: "white",
    marginVertical: 10,
    borderBottomColor: "#F0F0F0",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  cartPress: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 6,
  },
  pressQuantity: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  viewQuantity: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  pressDelete: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  deleteItem: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
  pressLater: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  viewLater: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
  moreInfo: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
});
