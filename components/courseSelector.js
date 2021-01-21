import React, { useState } from 'react';
import Course from './course';
import CourseList from './courseList';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';
import { View, StyleSheet } from 'react-native';


const CourseSelector = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggle = course => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return (
    <View style={styles.courseList}>
      {
        courses.map(course => (
          <Course key={course.id} course={course}
            select={toggle}
            isDisabled={hasConflict(course, selected)}
            isSelected={selected.includes(course)}
          />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CourseSelector;
