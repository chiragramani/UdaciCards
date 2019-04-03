import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { blue, white, red, green } from "../utils/colors";

class Quiz extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    showResult: false,
    showAnswer: false
  };

  handleAnswer = isCorrect => {
    const { deck } = this.props;
    const { questions } = deck;
    const { questionIndex } = this.state;
    const totalQuestions = questions.length;
    if (questionIndex === totalQuestions - 1) {
      /// Current is the last question
      this.setState(previousState => ({
        score: isCorrect ? previousState.score + 1 : previousState.score,
        showResult: true
      }));
    } else {
      /// Move to next question...
      this.setState(previousState => ({
        questionIndex: previousState.questionIndex + 1,
        score: isCorrect ? previousState.score + 1 : previousState.score,
        showResult: false,
        showAnswer: false
      }));
    }
  };

  toggleQuestionAnswer = () => {
    this.setState(previousState => ({
      showAnswer: !previousState.showAnswer
    }));
  };

  render() {
    const { deck } = this.props;
    const { questions } = deck;
    const { questionIndex, showAnswer, showResult, score } = this.state;
    const currentDisplayableIndex = questionIndex + 1;
    const totalQuestions = questions.length;
    const { question, answer } = questions[questionIndex];
    const percentageScore = ((score / totalQuestions) * 100).toFixed(2) + "%";
    return (
      <ScrollView style={styles.container}>
        {questions.length === 0 && (
          <Text style={styles.text}>
            Sorry you cannot take this quiz since there are no cards in the
            deck.
          </Text>
        )}

        {showResult == true && (
            <View>
              <Text style={styles.text}>
                Congratulations on completing the quiz.
              </Text>
              <Text style={styles.text}>
                Percentage score: {percentageScore}
              </Text>
            </View>
          )}

        {showResult == false && questions.length > 0 && (
          <View>
            <Text style={[styles.text, { textAlign: "left" }]}>
              {currentDisplayableIndex} / {totalQuestions}
            </Text>
            <Text style={styles.text}>
              {showAnswer === true ? answer : question}
            </Text>

            <TouchableOpacity
              onPress={this.toggleQuestionAnswer}
              style={[styles.button, { backgroundColor: blue }]}
            >
              <Text style={[styles.buttonText, styles.text]}>
                {showAnswer === true ? "View Question" : "View Answer"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.handleAnswer(true)}
              style={styles.button}
            >
              <Text style={[styles.buttonText, styles.text]}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleAnswer(false)}
              style={[styles.button, styles.incorrectButton]}
            >
              <Text style={[styles.buttonText, styles.text]}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: green,
    borderRadius: 6,
    marginTop: 32
  },
  buttonText: {
    color: white
  },
  incorrectButton: {
    backgroundColor: red
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const deckTitle = navigation.getParam("title");
  const deck = decks[deckTitle];
  return {
    deck
  };
}

export default connect(mapStateToProps)(Quiz);
