import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyleButton from '../StyleButton/StyleButton';
import styles from './styles';

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    {" "}
                    <Text style={styles.tagLineCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyleButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was clicked");
                    }}
                />
                <StyleButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was clicked");
                    }}
                />
            </View>

        </View>
    )
}

export default CarItem
