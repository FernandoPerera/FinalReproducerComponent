import { useState } from "react"
import { View, FlatList } from "react-native"
import FolderElements from "./FolderElement"
import {v4 as uuidv4} from 'uuid'

export const folders =  [
    { name: 'chill', songsNumber: 3},
    { name: 'party', songsNumber: 3},
    { name: 'car', songsNumber: 4},
    { name: 'night', songsNumber: 2}
  ]

const FoldersList = () => {
    const [folderList, setFolderList] = useState(folders)
  return (
    <View style={{ height: '85%' }}>

        <FlatList style={{width: '100%', marginVertical: '10%'}}
          data={folderList}
          renderItem={( renderItem ) => {
            const { id = uuidv4(), name, songsNumber } = renderItem.item
            return(
              <FolderElements 
                  key={id}
                  id={id}
                  songName={name}
                  numberOfSongs={songsNumber}
              />
            )
        }
       }/>

    </View>
  )
}

export default FoldersList