import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView,Image,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container} className="bg-sky-600">
      
      <View style={styles.header} className="mt-[35px] p-4">
        <View style={styles.profileGroup}>
          <Image
            source={require('../assets/jenn.png')}
            style={styles.profileImage}
          />
          <View style={styles.greetingContainer}>
            <Text className="font-bold text-[13px] text-white ml-[10px]">Jennifer Lyine</Text>
            <Text className="font-thin text-[13px] text-white ml-[10px]"> Hi Jennifer, Good Morning</Text>
          </View>
        </View>

        <TouchableOpacity className="ml-[50px]">
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity >
          <Ionicons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer} className="mt-[10px] w-[80%] ml-[20px] border border-gray-400 ">
        <Ionicons name="search" size={20} color="white" style={styles.searchIcon}   />
        <TextInput
          placeholder="Find your task"
          placeholderTextColor="white"
          style={styles.searchInput}
          className="font-thin"
        />
      </View>

      <View style={styles.projectsSection} className="w-full rounded-t-lg " >
        <View style={styles.projectsHeader}>
          <Text style={styles.projectsText}>Recent Projects</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText} className="text-gray-400 font-bold">View All</Text>
          </TouchableOpacity>
        </View>
      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
 
  }, profileGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 44,
    height: 45,
    borderRadius: 20, 
  
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,

  },
  searchIcon: {
    marginRight: 10, 
  },
  searchInput: {
    flex: 1, 
    fontSize: 13,
    color: '#000',
  },
  projectsSection: {
    backgroundColor: '#fff',
    flex: 1,  
    marginTop: 30,
    padding: 15,
    width: '100%',  
    alignSelf: 'stretch',  
  },
  projectsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  projectsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 16,
   
  },
});
