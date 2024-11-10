import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function HabitsPage() {
  const [answers, setAnswers] = useState({
    addiction: '',
    habits: '',
    triggers: '',
    motivations: '',
    stressLevel: '',
    supportSystem: '',
    copingMechanisms: '',
    relapseFrequency: '',
    goals: '',
    exerciseHabits: '',
    sleepPatterns: '',
    diet: '',
    dailyRoutine: '',
    professionalHelp: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Habits form submitted:', answers);
  };

  const questions = [
    { question: 'What is your addiction?', placeholder: 'e.g., Gambling', field: 'addiction' },
    { question: 'Describe your habits related to this addiction.', placeholder: 'e.g., Frequency, context', field: 'habits' },
    { question: 'What are your known triggers?', placeholder: 'e.g., Situations, emotions', field: 'triggers' },
    { question: 'What motivates you to overcome this addiction?', placeholder: 'e.g., Family, health, goals', field: 'motivations' },
    { question: 'How often do you experience stress related to your addiction?', placeholder: 'e.g., Daily, Weekly', field: 'stressLevel' },
    { question: 'Who is part of your support system?', placeholder: 'e.g., Family, Friends', field: 'supportSystem' },
    { question: 'What coping mechanisms do you use?', placeholder: 'e.g., Meditation, Exercise', field: 'copingMechanisms' },
    { question: 'How often do you experience relapses?', placeholder: 'e.g., Rarely, Often', field: 'relapseFrequency' },
    { question: 'What are your goals for overcoming this addiction?', placeholder: 'e.g., Staying sober for 6 months', field: 'goals' },
    { question: 'How often do you exercise?', placeholder: 'e.g., Daily, Weekly', field: 'exerciseHabits' },
    { question: 'Describe your sleep patterns.', placeholder: 'e.g., 7-8 hours per night', field: 'sleepPatterns' },
    { question: 'How would you describe your diet?', placeholder: 'e.g., Balanced, Junk food', field: 'diet' },
    { question: 'Describe your daily routine.', placeholder: 'e.g., Work, Leisure activities', field: 'dailyRoutine' },
    { question: 'Are you receiving any professional help?', placeholder: 'e.g., Therapist, Support groups', field: 'professionalHelp' },
  ];

  return (
    <ScrollView style={styles.container}>
      {questions.map((item, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{item.question}</Text>
          <TextInput
            style={styles.input}
            placeholder={item.placeholder}
            value={answers[item.field]}
            onChangeText={(value) => handleInputChange(item.field, value)}
          />
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} style={styles.submitButton} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});
