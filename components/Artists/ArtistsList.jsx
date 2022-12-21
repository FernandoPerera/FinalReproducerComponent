import {useState} from 'react'
import { View, FlatList } from 'react-native'

import ArtistsElement from './ArtistsElement'

import {v4 as uuidv4} from 'uuid'

const ArtistsList = ({ artists }) => {
    const [artistList, setArtistList] = useState(artists)
    return (
      <View style={{ height: '85%' }}>
       <FlatList style={{ width: '100%', marginVertical: '5%' }}
          data={artistList}
          renderItem={( renderItem ) => {
            const { id = uuidv4(), name  } = renderItem.item
            return(
              <ArtistsElement
                  key={id}
                  id={id}
                  artistName={ name }
              />
            )
        }
       }/>
      </View>
    )
}

export default ArtistsList