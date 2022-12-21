import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native"

const ArtistsElement = ({ id, artistName }) => {

    const putImage = () => {

        switch (artistName) {
            case 'Canserbero':
                return <Image style={styles.bigImage} source={require('../../assets/artists/canserArtists.png')} />
            case 'Foyone':
                return <Image style={styles.bigImage} source={require('../../assets/artists/foyoneArtists.png')} />
            case 'Lil Supa':
                return <Image style={styles.bigImage} source={require('../../assets/artists/LilSupaArtists.png')} />
            case 'Santiago Insane':
                return <Image style={styles.bigImage} source={require('../../assets/artists/santiagoInsane.png')} />
            case 'Norick':
                return <Image style={styles.bigImage} source={require('../../assets/artists/NorickArtists.png')} />
            case 'Akapellah':
                return <Image style={styles.bigImage} source={require('../../assets/artists/akapellahArtists.png')} />
        }
    }

    return (
        <View>

            <Pressable style={styles.elementContainer}>
                {putImage(styles.bigImage)}

                <View>

                    <Text style={{ color: 'white', marginLeft: '10%' }}>{artistName}</Text>

                </View>

            </Pressable>

            <View style={{ alignItems: 'center' }}>
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
        width: '25%',
        height: '350%',
        marginLeft: '2%'
    },
    smallImage: {
        width: '20%',
        height: '80%',
        marginLeft: '5%'
    },
    songOptions: {
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

export default ArtistsElement