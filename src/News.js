import React, { useEffect, useState } from 'react';
import { FlatList, Text, View , ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
 
const News = () => {
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);


  useEffect(() => {
    setTimeout(async() => {
    fetch('http://pp-api.wooshelf.com/news/post_api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, 8000);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView source={require('./62961-loading.json')} autoPlay loop duration={5000}/>
      </View>
    )
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}
    </View>
    )
}

export default News;
