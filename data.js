/**
 * This is the source for all the questions.
 * 
 * It is defined as an array of objects.
 * 
 * Criterion for difficulty:
 *  - Try and stick within known subjects. [history, sports, science]
 *  - For history questions: easy: 2015-now, medium: 2000-2015, hard: before 2000
 *  - Popular science: maybe not
 *  - Sports: hard: technical details about sport, easy: events & people, medium: people/event + technical detail
 * 
 * 1: Easy
 * 2: medium
 * 3: hard
 * 
 * https://www.quizbreaker.com/trivia-questions#animal-trivia-questions
 * https://www.scarymommy.com/lifestyle/best-trivia-questions-answers
 * https://thepleasantconversation.com/fun-trivia-questions/
 */

// At least 20 questions
const easyQuestions = [
]

// At least 20 questions
const mediumDifficultyQuestions = [
    {
        title: "Which Vice President served for the shortest time in Kenya's history?",
        answers: {
            a: {
                name: "Joseph Kamotho",
                message: "In what world was he ever Vice President?"
            },
            b: {
                name: "George Saitoti",
                message: "He actually served the longest term."
            },
            c: {
                name: "Musalia Mudavadi",
                message: "Just like the DVD, no future here"
            }
        },
        correct_answer: "c",
        level: 2
    }
]

// At least 20 questions
const hardQuestions = [
]

const dictionary = [
   ...easyQuestions,
   ...mediumDifficultyQuestions,
   ...hardQuestions,
]