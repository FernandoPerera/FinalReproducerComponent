import { StyleSheet, View, Text, Image } from "react-native"


const FolderElements = ( { id, songName, numberOfSongs } ) => {

  return (
    <View>

        <View style={styles.elementContainer}>
            <Image style={styles.bigImage} source={require('../../assets/icons/folder.png')}/>

            <View>

                <Text style={{color: 'white', textAlign: 'center'}}>{songName}</Text>
                <Text style={{color: '#6B6D72', textAlign: 'center'}}>Number of Songs : {numberOfSongs}</Text>

            </View>

        </View>

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
        flex: 1,
        marginVertical: '10%',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: '200%'
    },
    borders: {
        borderBottomWidth: 1.5,
        borderColor: '#6B6D72',
        width: '90%',
        marginBottom: '5%'
    }

})

export default FolderElements