import Course from './course';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const CourseList = ({courses}) => (
  <ScrollView contentContainerStyle={styles.courseList}>
    {courses.map(course => <Course key={course.id} course={course} />)}
  </ScrollView>
);

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default CourseList;
