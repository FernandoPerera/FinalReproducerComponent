import { React, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native"

const SongElement = ({ id, songName, albumName, authorName, imageIde }) => {

    const [show, setShow] = useState(false)

    const putImage = (imageStyle) => {

        switch (imageIde) {
            case 1:
                return <Image style={imageStyle} source={require('../../assets/albums/canser.png')} />
            case 2:
                return <Image style={imageStyle} source={require('../../assets/albums/canserGuia.png')} />
            case 3:
                return <Image style={imageStyle} source={require('../../assets/albums/foyoneJaula.png')} />
            case 4:
                return <Image style={imageStyle} source={require('../../assets/albums/claro.png')} />
            case 5:
                return <Image style={imageStyle} source={require('../../assets/albums/santiago.png')} />
            case 6:
                return <Image style={imageStyle} source={require('../../assets/albums/norick.png')} />
            case 7:
                return <Image style={imageStyle} source={require('../../assets/albums/europeo.png')} />
            case 8:
                return <Image style={imageStyle} source={require('../../assets/albums/serio.png')} />
            case 9:
                return <Image style={imageStyle} source={require('../../assets/albums/akapellah.png')} />
        }
    }

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <View>

            <Pressable style={styles.elementContainer} onPress={showModal}>
                {putImage(styles.bigImage)}

                <View>

                    <Text style={{ color: 'white', marginLeft: '5%' }}>{songName}</Text>
                    <Text style={{ color: '#6B6D72', marginLeft: '5%' }}>{authorName} · {albumName}</Text>

                </View>

            </Pressable>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.borders}>
                    <Text> </Text>
                </View>
            </View>

            <Modal
                animationType='fade'
                transparent={true}
                visible={show}>

                <Pressable style={styles.elementInPlay} onPress={hideModal}>

                    {putImage(styles.smallImage)}

                    <View style={{ flex: 3, marginLeft: '5%', marginRight: '10%' }}>
                        <Text style={{ color: 'white' }}>{songName}</Text>
                        <Text style={{ color: '#6B6D72' }}>{authorName}</Text>
                    </View>

                    <Image style={styles.songOptions} source={require('../../assets/icons/previous.png')} />

                    <Image style={styles.songOptions} source={require('../../assets/icons/pause.png')} />

                    <Image style={styles.songOptions} source={require('../../assets/icons/play-button.png')} />

                </Pressable>

            </Modal>

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
        width: '20%',
        height: '200%',
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

export default SongElement