window.onload = function() {

  var questionArea = document.getElementsByClassName("questions")[0],
    answerArea = document.getElementsByClassName("answers")[0],
    checker = document.getElementsByClassName("checker")[0],
    current = 0,
    allQuestions = {
      "Which Korean city hosted the Asian Games in 2002?": ["Busan", "Ulsan", "Seoul", "Seogwipo", 0],

      "Which city in North Korea can be seen from the demilitarised zone that separates the two Koreas?": ["Chongjin", "Pyongyang", "Kaesong", "Dandong", 2],

      "Which city is found near the spot where General MacArthur led the landing of allied troops behind enemy lines, which changed the course of the Korean war?": ["Mokpo", "Incheon", "Pyongyang", "Ulsan", 1],

      "Which of these is NOT a common Korean surname?": ["Park", "Hong", "Tin", "Yoon", 2],

      "What is the Korean word for the South Korean national flag?": ["Taegukki", "Keungukki", "Minjuki", "Chunggukki", 0],

      "All of these words contain the syllable Han. In three, the meaning of Han is Korea. In one it is not. Which one?": ["Hangeul", "Taehan minguk", "Hanbok", "Hanja", 3],

      "Which of these is NOT a Korean company?": ["Samsung", "Nikon", "LG / Lucky Goldstar", "Hyundai", 1],

      "Which country, outside of the two Koreas, contains the largest population of ethnic Koreans ? ": ["Japan", "Australia", "United States", "China", 3],

      "What is the most popular traditional sport in Korea?": ["Taekwondo", "Soccer", "Ssirum", "Baseball", 0],

      "What is the name of the traditional Korean costume?": ["Kimono", "Dragon robes", "Sari", "Hanbok", 3],

      "The Tripitaka Koreana, is a creation of the most complete collection of Buddhist scriptures in the world. This collection was carved on wood blocks in Chinese characters. How many wood blocks went into this creation?": ["14,229", "96,796", "81,340", "41,312", 2],

      "What is a National Living Treasure?": ["A rare type of conifer in the north-west of Korea", "A performer or craftsman", "A black-billed magpie", "An occupant of the Korean National Zoo", 1],

      "Rice is the traditional main dish in Korea. Next to rice comes kimchi. What is kimchi?": ["Pieces of chicken with herbs", "A spicy vegetable dish", "A soup with seafood in it", "A curried lamb dish", 1],

      "There are many festivals and rituals in Korea, including the infant celebration of Tol. What is its significance?": ["It will be the last ceremony before the child turns ten years old", "It is a celebration that the baby has reached one year old without dying", "It is a time of sadness because the infant will soon be put up for adoption", "To ward off spirits that may cause blindness in infancy", 1],

      "When do Koreans celebrate their birthdays?": ["Lunar New Years Day", "Chilsok - Seventh day of the seventh month", "Taeborum - First full moon", "Chusok - Harvest Moon Festival", 0]
    };

  function loadQuestion(curr) {
    var question = Object.keys(allQuestions)[curr];
    questionArea.innerHTML = "";
    questionArea.innerHTML = question;
  }

  function loadAnswers(curr) {
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    answerArea.innerHTML = "";

    for (var i = 0; i < answers.length - 1; i += 1) {
      var createDiv = document.createElement("div"),
        text = document.createTextNode(answers[i]);
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));
      answerArea.appendChild(createDiv);
    }
  }

  function checkAnswer(i, arr) {
    return function() {
      var givenAnswer = i,
        correctAnswer = arr[arr.length - 1];

      if (givenAnswer === correctAnswer) {
        addChecker(true);
      }

      else {
        addChecker(false);
      }

      if (current < Object.keys(allQuestions).length - 1) {
        current += 1;
        loadQuestion(current);
        loadAnswers(current);
      }

      else {
        questionArea.innerHTML = "Done";
        answerArea.innerHTML = "";
      }

    };
  }

  function addChecker(bool) {
    var createDiv = document.createElement("div"),
      txt = document.createTextNode(current + 1);
    createDiv.appendChild(txt);

    if (bool) {
      createDiv.className += "correct";
      checker.appendChild(createDiv);
    }

    else {
      createDiv.className += "false";
      checker.appendChild(createDiv);
    }
  }

  loadQuestion(current);
  loadAnswers(current);

};


function showHideRecipe(id) {
  var r = document.getElementById(id);
  if (r.style.display === "block") {
    r.style.display = "none";
  } else {
    r.style.display = "block";
  }
}