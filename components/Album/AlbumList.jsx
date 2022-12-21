import { useState } from 'react'
import { View, FlatList } from 'react-native'
import { v4 as uuidv4 } from 'uuid'

import AlbumElement from './AlbumElement'

const AlbumsList = ({ albums }) => {

  const [musicList, setMusicList] = useState(albums)

  return (
    <View style={{ height: '85%' }}>
      <FlatList style={{ width: '100%', marginVertical: '5%' }}
        data={musicList}
        renderItem={(renderItem) => {
          const { id = uuidv4(), name, author, imageId } = renderItem.item
          return (
            <AlbumElement
              key={id}
              id={id}
              albumName={name}
              authorName={author}
              imageIde={imageId}
            />
          )
        }
        } />

    </View>
  )
}

export default AlbumsList
