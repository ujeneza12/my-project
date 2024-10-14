import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function FurnitureScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
            <Ionicons name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NFT Landing Page</Text>
        
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} accessibilityLabel="Home">
            <Ionicons name="home-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Download pressed")} accessibilityLabel="Download" style={styles.iconButton}>
            <Ionicons name="download-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("More options pressed")} accessibilityLabel="More Options" style={styles.iconButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        </View>

    
        <Image source={require('../assets/game.png')} style={styles.projectImage} className="mt-[10px]" />

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis non deserunt enim velit mollit. Do Exercitation veniam min...
            <Text style={styles.seeDetailsText}> See Details</Text>
          </Text>
        </View>

        {/* Team and Leader Section */}
        <View style={styles.teamLeaderContainer}>
          {/* Team Section */}
          <View style={styles.teamSection}>
            <Ionicons name="people-outline" size={24} color="#333" />
            <Image source={require('../assets/team.png')} style={styles.teamImage} />
            <Text style={styles.sectionLabel}>Team</Text>
          </View>

          {/* Leader Section */}
          <View style={styles.leaderSection}>
            <Ionicons name="person-circle-outline" size={24} color="#333" />
            <Image source={require('../assets/rafi.png')} style={styles.leaderImage} />
            <Text style={styles.leaderName}>Rafi Islam Apon (you)</Text>
          </View>
        </View>

        {/* Status and Due Date */}
        <View style={styles.statusDueDateContainer}>
          {/* Status */}
          <View style={styles.statusContainer}>
            <Ionicons name="flag-outline" size={24} color="#ff69b4" />
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusButtonText}>To Do</Text>
            </TouchableOpacity>
          </View>

          {/* Due Date */}
          <View style={styles.dueDateContainer}>
            <Ionicons name="calendar-outline" size={24} color="#333" />
            <Text style={styles.dueDateText}>Due Date: Dec 27, 2024</Text>
          </View>
        </View>

        {/* Attachments */}
        <View style={styles.attachmentsContainer}>
          <Ionicons name="attach-outline" size={24} color="#333" />
          <TouchableOpacity style={styles.attachmentItem} onPress={() => console.log("Attachment pressed")} accessibilityLabel="Attachment">
            <Ionicons name="document-text-outline" size={20} color="#333" />
            <Text style={styles.attachmentText}>References.pdf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addAttachmentButton} onPress={() => console.log("Add Attachment pressed")} accessibilityLabel="Add Attachment">
            <Ionicons name="add-circle-outline" size={24} color="#1e90ff" />
          </TouchableOpacity>
        </View>

        {/* Subtasks */}
        <View style={styles.subtasksContainer}>
          <TouchableOpacity style={styles.customSectionButton} accessibilityLabel="Subtasks">
            <Text style={styles.customSectionButtonText}>Sub Tasks (3)</Text>
          </TouchableOpacity>

          {/* Existing Subtasks */}
          <View style={styles.subtaskItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="green" />
            <Text style={styles.subtaskText}>Define Problem with Client</Text>
          </View>
          <View style={styles.subtaskItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="green" />
            <Text style={styles.subtaskText}>Create Wireframe and User Flow</Text>
          </View>
          <View style={styles.subtaskItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="green" />
            <Text style={styles.subtaskText}>Project Setup & Brief</Text>
          </View>

          {/* Add New Subtask */}
          <TouchableOpacity style={styles.addSubtaskButton} onPress={() => console.log("Add Subtask pressed")} accessibilityLabel="Add New Subtask">
            <Ionicons name="add-outline" size={20} color="#1e90ff" />
            <Text style={styles.addSubtaskText}>Add New Subtask</Text>
          </TouchableOpacity>
        </View>

       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 20, // To prevent content from being hidden behind bottom bar
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  iconButton: {
    marginLeft: 15,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  seeDetailsText: {
    color: '#1e90ff',
  },
  teamLeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  teamSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  leaderSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  leaderName: {
    fontSize: 14,
    color: '#333',
  },
  statusDueDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusButton: {
    backgroundColor: '#ff69b4', // Pink color
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 10,
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueDateText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  attachmentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  attachmentText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  addAttachmentButton: {
    marginLeft: 15,
  },
  subtasksContainer: {
    marginBottom: 20,
  },
  customSectionButton: {
    backgroundColor: '#d0e8ff', // Light blue color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  customSectionButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  subtaskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  subtaskText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  addSubtaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addSubtaskText: {
    fontSize: 14,
    color: '#1e90ff',
    marginLeft: 5,
  },
});
