import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { product } from '../types/types'



const ProductItem: React.FC<product> = ({ image, title, price, rating }) => {
  return (
    <Pressable style={styles.product}>
        <Image 
          source={{ uri: image}}
          style={styles.img}
        />
        <Text numberOfLines={1} style={styles.productTitle}>
        {title}
      </Text>
      <View
        style={styles.productView}
      >
        <Text style={styles.view}>₦{price}</Text>
        <Text style={styles.rating}>
          {rating?.rate} ratings
        </Text>
      </View>
      <Pressable
        // onPress={() => addItemToCart(item)}
        style={styles.cartItem}
      >
        {/* {addedToCart ? ( */}
          {/* <View>
            <Text>Added to Cart</Text>
          </View>
        ) : ( */}
          <Text>Add to Cart</Text>
        {/* )} */}
      </Pressable>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  product: {
    marginHorizontal:20,
    marginVertical: 25
  },
  img: { 
    width: 150, 
    height: 150, 
    resizeMode: "contain" 
  },
  productTitle: { 
    width: 150, 
    marginTop: 10 
  },
  productView: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view: { 
    fontSize: 15, 
    fontWeight: "bold"
 }, 
 rating: { 
  color: "#FFC72C", 
  fontWeight: "bold" 
},
cartItem: {
  backgroundColor: "#FFC72C",
  padding: 10,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 10,
  marginTop: 10,
}
})