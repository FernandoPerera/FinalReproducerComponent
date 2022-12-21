import {useState} from 'react'
import { View, FlatList } from 'react-native'

import SongElement from './SongElement'

import {v4 as uuidv4} from 'uuid'

const SongsList = ({ songs }) => {

    const [musicList, setMusicList] = useState(songs)
    
    return (
      <View style={{height: '85%'}}>
       <FlatList style={{width: '100%', marginVertical: '5%' }}
          data={musicList}
          renderItem={( renderItem ) => {
            const { id = uuidv4(), name , album, author , imageId } = renderItem.item
            return(
              <SongElement
                  key={id}
                  id={id}
                  songName={name}
                  albumName={album}
                  authorName={author}
                  imageIde={imageId}
              />
            )
        }
       }/>
      </View>
    )
}

export default SongsList
