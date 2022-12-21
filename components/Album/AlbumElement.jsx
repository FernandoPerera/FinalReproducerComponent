import { React, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable } from "react-native"


const AlbumElement = ( { id, albumName, authorName, imageIde } ) => {

    const putImage = (imageStyle) => {

        switch ( imageIde ) {
            case 1:
                return <Image style={imageStyle} source={require('../../assets/albums/canser.png')}/>
            case 2:
                return <Image style={imageStyle} source={require('../../assets/albums/canserGuia.png')}/>
            case 3:
                return <Image style={imageStyle} source={require('../../assets/albums/foyoneJaula.png')}/>
            case 4:
                return <Image style={imageStyle} source={require('../../assets/albums/claro.png')}/>
            case 5:
                return <Image style={imageStyle} source={require('../../assets/albums/santiago.png')}/>
            case 6:
                return <Image style={imageStyle} source={require('../../assets/albums/norick.png')}/>  
            case 7:
                return <Image style={imageStyle} source={require('../../assets/albums/europeo.png')}/>
            case 8:
                return <Image style={imageStyle} source={require('../../assets/albums/serio.png')}/>
            case 9:
                return <Image style={imageStyle} source={require('../../assets/albums/akapellah.png')}/>
        }
    }

  return (
    <View>
        
        <Pressable style={styles.elementContainer}>
            {putImage(styles.bigImage)}

            <View>

                <Text style={{color: 'white', marginLeft: 20}}>{albumName}</Text>
                
                <Text style={{color: '#6B6D72', marginLeft: 20}}>{authorName}</Text>

            </View>

        </Pressable>

        <View style={{alignItems:'center'}}>
            <View style={styles.borders}>
                <Text> </Text>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    elementContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        alignItems: 'center'
    },
    elementInPlay: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0D1E44',
        marginTop: '170%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bigImage: {
        width:'20%',
        height: '200%',
        marginLeft: '2%'
    },
    smallImage: {
        width: '20%',
        height: '80%',
        marginLeft: '5%'
    },
    songOptions : {
        flex: 1.5,
        height: '45%',
        marginHorizontal: '1.3%'
    },  
    borders: {
        borderBottomWidth: 1.5,
        borderColor: '#6B6D72',
        width: '90%',
        marginBottom: '5%'
    }

})

export default AlbumElement