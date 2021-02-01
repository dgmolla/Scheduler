import React, { useContext, useState, useEffect } from 'react';
import CourseEditScreen from './courseEditScreen';
import {firebase} from '../firebase.js'
import CourseList from '../components/courseList';
import UserContext from '../userContext.js';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

const db = firebase.database().ref();

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role == 'admin';

  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  //const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title}/>
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  },
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ScheduleScreen;
