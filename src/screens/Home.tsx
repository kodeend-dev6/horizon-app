import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import bannerImg from '../assets/banner.jpeg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We provide web development services',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'We provide mobile development services',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'We provide UI/UX design services',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    description: 'We provide quality assurance services',
  },
];

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const handleServicePress = (service: any) => {
    navigation.navigate('ServiceDetails', {
      title: service.title,
      description: service.description,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={bannerImg} style={styles.bannerImg} />
      <Text style={styles.normalText}>
        Horizon Solutions is a software service platform
      </Text>

      <Text style={styles.headingText}>Our Services</Text>

      <View style={styles.serviceContainer}>
        <FlatList
          numColumns={2}
          data={services}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleServicePress(item)}
              style={styles.service}>
              <Text style={styles.serviceTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bannerImg: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  normalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    marginTop: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    alignSelf: 'center',
    marginTop: 20,
  },
  serviceContainer: {
    flex: 1,
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  service: {
    width: '45%',
    height: 100,
    padding: 10,
    marginBottom: 10, // Add marginBottom to create vertical gap
    marginHorizontal: 5, // Add marginHorizontal to create horizontal gap
    backgroundColor: '#000245',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: {width: 0, height: 2}, // For shadow on iOS
    shadowOpacity: 0.2, // For shadow on iOS
    shadowRadius: 2, // For shadow on iOS
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Home;
