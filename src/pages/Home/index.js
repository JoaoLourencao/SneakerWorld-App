import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Post} from './style';

export default function Home() {
  const [feed, setFeed] = useState([]);

  useEffect(() => { 
    async function loadFeed(){
      const response = await fetch('http://localhost:3000/feed?_expand=author'); 
      
      const data = await response.json();

      setFeed(data);

    }
  },[]);

  return (
    <View>
      <FlatList data={feed} keyExtractor={post => String(post.id)} renderItem={({item})=> (
        <Post>

        </Post>
      )}>

      </FlatList>
    </View>
  );
}
