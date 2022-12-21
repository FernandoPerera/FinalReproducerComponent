import { React, useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

import FoldersList from "./Folders/FoldersList"
import SongsList from "./Songs/SongsList"
import AlbumsList from "./Album/AlbumList"
import ArtistsList from "./Artists/ArtistsList"

import { songs, folders, albums, artists } from '../data/elementsInfo'

const Header = () => {

    const [menu, setMenu] = useState(<FoldersList />)

    return (
        <View>
            <View style={styles.headerContainer}>
                <Pressable style={styles.element} onPress={() => { setMenu(<FoldersList folders={folders} />) }}>
                    <Text style={styles.textColor}>
                        Folders
                    </Text>
                </Pressable>
                <Pressable style={styles.element} onPress={() => { setMenu(<SongsList songs={songs} />) }}>
                    <Text style={styles.textColor}>
                        Songs
                    </Text>
                </Pressable>
                <Pressable style={styles.element} onPress={() => { setMenu(<AlbumsList albums={albums} />) }}>
                    <Text style={styles.textColor}>
                        Albums
                    </Text>
                </Pressable>
                <Pressable style={styles.element} onPress={() => { setMenu(<ArtistsList artists={artists} />) }}>
                    <Text style={styles.textColor}>
                        Artists
                    </Text>
                </Pressable>
            </View>
            {menu}
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        backgroundColor: "#030F2C",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "95%",
        height: 30,
        marginTop: '30%',
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        height: "80%",
    },
    element: {
        alignSelf: "center",
        width: "20%",
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 2,
    },
    textColor: {
        textAlign: "center",
        color: "#FFFFFF",
    }


})

export default Header