import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FurnitureScreen({ navigation }) {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const toggleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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

          {/* Project Image */}
          <Image source={require('../assets/furnite.png')} style={styles.projectImage} />

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis non deserunt enim velit mollit. Do Exercitation veniam min...
              <Text style={styles.seeDetailsText}> See Details</Text>
            </Text>
          </View>

          {/* Team Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionRow}>
              <Ionicons name="people-outline" size={24} color="#333" />
              <Text style={styles.sectionLabel}>Team</Text>
            </View>
            <Image source={require('../assets/team.png')} style={styles.teamImage} />
          </View>

          {/* Leader Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionRow}>
              <Ionicons name="person-circle-outline" size={24} color="#333" />
              <Text style={styles.sectionLabel}>Leader</Text>
            </View>
            <View style={styles.leaderInfo}>
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
              <Text style={styles.addAttachmentText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* Custom Selection Button */}
          <TouchableOpacity style={styles.customSelectionButton} accessibilityLabel="Custom Selection">
            <Text style={styles.customSelectionText}>Custom Selection</Text>
          </TouchableOpacity>

          {/* Subtasks */}
          <View style={styles.subtasksContainer}>
            <Text style={styles.customSectionButtonText}>Sub Tasks (3)</Text>
            {/* Existing Subtasks */}
            {['Define Problem with Client', 'Create Wireframe and User Flow', 'Project Setup & Brief'].map((task, index) => (
              <TouchableOpacity key={index} style={styles.subtaskItem} onPress={() => toggleCheck(index)}>
                {checkedItems[index] ? (
                  <Ionicons name="checkmark-circle-outline" size={20} color="green" />
                ) : (
                  <Ionicons name="checkmark-circle-outline" size={20} color="#ccc" />
                )}
                <Text style={[styles.subtaskText, { textDecorationLine: checkedItems[index] ? 'line-through' : 'none' }]}>{task}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addSubtaskButton} accessibilityLabel="Subtasks">
              <Ionicons name="add-outline" size={20} color="#fff" />
              <Text style={styles.addSubtaskText}>Add New Subtask</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 80, // Ensure content is scrollable above potential bottom bar
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute', // Fix the header position
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    zIndex: 1000,
    backgroundColor: '#fff', // Ensure header has background color
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
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
  sectionContainer: {
    marginBottom: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  teamImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 34, // Align with the icon and label
  },
  leaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  leaderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  leaderName: {
    fontSize: 14,
    color: '#333',
  },
  statusDueDateContainer: {
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  addAttachmentText: {
    fontSize: 14,
    color: '#1e90ff',
    marginLeft: 5,
  },
  customSelectionButton: {
    backgroundColor: '#d0e8ff', // Light blue color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  customSelectionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtasksContainer: {
    marginBottom: 20,
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
    backgroundColor: '#1e90ff', // Blue color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addSubtaskText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
