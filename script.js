function showHideRecipe(id) {
  var recipeArea = document.getElementById(id);
  if (recipeArea.style.display == "block") {
    recipeArea.style.display = "none";
  } else {
    recipeArea.style.display = "block";
  }
}




window.onload = function loadPage() {
  var questionArea = document.getElementsByClassName("questions")[0],
    answerArea = document.getElementsByClassName("answers")[0],
    checker = document.getElementsByClassName("checkerdiv")[0],
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

    for (var i = 0; i < answers.length - 1; i++) {
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
      text = document.createTextNode(current + 1);
    createDiv.appendChild(text);

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




var userInputs = { ac1: "", ac2: "", ac3: "", ac4: "", ac5: "", ac6: "", ac7: "", ac8: "", ac9: "", ac10: "", ac11: "", ac12: "", ac13: "", ac14: "", ac15: "", ac16: "", ac17: "", ac18: "", ac19: "", ac20: "" };

const alreadyCompleted = { ac1: "enchanting", ac2: "journalists", ac3: "magic", ac4: "incheon", ac5: "scandalous", ac6: "newspapers", ac7: "tranquil", ac8: "manage", ac9: "youths", ac10: "guides", ac11: "captivate", ac12: "lively", ac13: "entertainments", ac14: "college", ac15: "coherent", ac16: "advertising", ac17: "wealthy", ac18: "reason", ac19: "contribution", ac20: "odds" };

const completedstory = "<h2>Completed Story</h2><p>South Korea is still very much <span id=\"output1\"></span>. Quite a few <span id=\"output2\"></span> get to the <span id=\"output3\"></span>, Seoul, usually enroute to <span id=\"output4\"></span>, and a few <span id=\"output5\"></span> <span id=\"output6\"></span> make it to Kyong-ju and the <span id=\"output7\"></span> province of Cheju-do, but hardly anyone seems to take the time to <span id=\"output8\"></span> the other <span id=\"output9\"></span> of the country. Undoubtedly the <span id=\"output10\"></span> of Japan and China serve to <span id=\"output11\"></span> most peoples attention, yet Korea is one of the most <span id=\"output12\"></span> <span id=\"output13\"></span> of the Far East. Its <span id=\"output14\"></span> is one of the worlds most <span id=\"output15\"></span> <span id=\"output16\"></span> of a <span id=\"output17\"></span> nations <span id=\"output18\"></span> for <span id=\"output19\"></span> against almost insurmountable <span id=\"output20\"></span>.</p>";

function submitInputs() {
  userInputs.ac1 = document.getElementById("input1").value;
  userInputs.ac2 = document.getElementById("input2").value;
  userInputs.ac3 = document.getElementById("input3").value;
  userInputs.ac4 = document.getElementById("input4").value.charAt(0).toUpperCase() + document.getElementById("input4").value.slice(1); userInputs.ac5 = document.getElementById("input5").value;
  userInputs.ac6 = document.getElementById("input6").value;
  userInputs.ac7 = document.getElementById("input7").value;
  userInputs.ac8 = document.getElementById("input8").value;
  userInputs.ac9 = document.getElementById("input9").value;
  userInputs.ac10 = document.getElementById("input10").value;
  userInputs.ac11 = document.getElementById("input11").value;
  userInputs.ac12 = document.getElementById("input12").value;
  userInputs.ac13 = document.getElementById("input13").value;
  userInputs.ac14 = document.getElementById("input14").value;
  userInputs.ac15 = document.getElementById("input15").value;
  userInputs.ac16 = document.getElementById("input16").value;
  userInputs.ac17 = document.getElementById("input17").value;
  userInputs.ac18 = document.getElementById("input18").value;
  userInputs.ac19 = document.getElementById("input19").value;
  userInputs.ac20 = document.getElementById("input20").value;

  createMadLibs();
}

function autoFill() {
  if (document.getElementById("input1").value == "") {
    userInputs.ac1 = alreadyCompleted.ac1;
    document.getElementById("input1").value = userInputs.ac1;
  }

  if (document.getElementById("input2").value == "") {
    userInputs.ac2 = alreadyCompleted.ac2;
    document.getElementById("input2").value = userInputs.ac2;
  }

  if (document.getElementById("input3").value == "") {
    userInputs.ac3 = alreadyCompleted.ac3;
    document.getElementById("input3").value = userInputs.ac3;
  }

  if (document.getElementById("input4").value == "") { //Converts surname to uppercase.
    userInputs.ac4 = alreadyCompleted.ac4;
    document.getElementById("input4").value = userInputs.ac4;
  }

  if (document.getElementById("input5").value == "") {
    userInputs.ac5 = alreadyCompleted.ac5;
    document.getElementById("input5").value = userInputs.ac5;
  }

  if (document.getElementById("input6").value == "") {
    userInputs.ac6 = alreadyCompleted.ac6;
    document.getElementById("input6").value = userInputs.ac6;
  }

  if (document.getElementById("input7").value == "") {
    userInputs.ac7 = alreadyCompleted.ac7;
    document.getElementById("input7").value = userInputs.ac7;
  }

  if (document.getElementById("input8").value == "") {
    userInputs.ac8 = alreadyCompleted.ac8;
    document.getElementById("input8").value = userInputs.ac8;
  }

  if (document.getElementById("input9").value == "") {
    userInputs.ac9 = alreadyCompleted.ac9;
    document.getElementById("input9").value = userInputs.ac9;
  }

  if (document.getElementById("input10").value == "") {
    userInputs.ac10 = alreadyCompleted.ac10;
    document.getElementById("input10").value = userInputs.ac10;
  }

  if (document.getElementById("input11").value == "") {
    userInputs.ac11 = alreadyCompleted.ac11;
    document.getElementById("input11").value = userInputs.ac11;
  }

  if (document.getElementById("input12").value == "") {
    userInputs.ac12 = alreadyCompleted.ac12;
    document.getElementById("input12").value = userInputs.ac12;
  }

  if (document.getElementById("input13").value == "") {
    userInputs.ac13 = alreadyCompleted.ac13; document.getElementById("input13").value = userInputs.ac13;
  }

  if (document.getElementById("input14").value == "") {
    userInputs.ac14 = alreadyCompleted.ac14;
    document.getElementById("input14").value = userInputs.ac14;
  }

  if (document.getElementById("input15").value == "") {
    userInputs.ac15 = alreadyCompleted.ac15;
    document.getElementById("input15").value = userInputs.ac15;
  }

  if (document.getElementById("input16").value == "") {
    userInputs.ac16 = alreadyCompleted.ac16;
    document.getElementById("input16").value = userInputs.ac16;
  }

  if (document.getElementById("input17").value == "") {
    userInputs.ac17 = alreadyCompleted.ac17;
    document.getElementById("input17").value = userInputs.ac17;
  }

  if (document.getElementById("input18").value == "") {
    userInputs.ac18 = alreadyCompleted.ac18;
    document.getElementById("input18").value = userInputs.ac18;
  }

  if (document.getElementById("input19").value == "") {
    userInputs.ac19 = alreadyCompleted.ac19;
    document.getElementById("input19").value = userInputs.ac19;
  }

  if (document.getElementById("input20").value == "") {
    userInputs.ac20 = alreadyCompleted.ac20;
    document.getElementById("input20").value = userInputs.ac20;
  }

  submitInputs(); //Collects any data from the form.
}

function clearForm() { //Clears the user values and the form.
  var userInputs = { ac1: "", ac2: "", ac3: "", ac4: "", ac5: "", ac6: "", ac7: "", ac8: "", ac9: "", ac10: "", ac11: "", ac12: "", ac13: "", ac14: "", ac15: "", ac16: "", ac17: "", ac18: "", ac19: "", ac20: "" };
  document.getElementById("completedstory").innerHTML = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("input5").value = "";
  document.getElementById("input6").value = "";
  document.getElementById("input7").value = "";
  document.getElementById("input8").value = "";
  document.getElementById("input9").value = "";
  document.getElementById("input10").value = "";
  document.getElementById("input11").value = "";
  document.getElementById("input12").value = "";
  document.getElementById("input13").value = "";
  document.getElementById("input14").value = "";
  document.getElementById("input15").value = "";
  document.getElementById("input16").value = "";
  document.getElementById("input17").value = "";
  document.getElementById("input18").value = "";
  document.getElementById("input19").value = "";
  document.getElementById("input20").value = "";
}

function createMadLibs() {
  document.getElementById("completedstory").innerHTML = completedstory;
  document.getElementById("output1").innerHTML = userInputs.ac1;
  document.getElementById("output2").innerHTML = userInputs.ac2;
  document.getElementById("output3").innerHTML = userInputs.ac3;
  document.getElementById("output4").innerHTML = userInputs.ac4;
  document.getElementById("output5").innerHTML = userInputs.ac5;
  document.getElementById("output6").innerHTML = userInputs.ac6;
  document.getElementById("output7").innerHTML = userInputs.ac7;
  document.getElementById("output8").innerHTML = userInputs.ac8;
  document.getElementById("output9").innerHTML = userInputs.ac9;
  document.getElementById("output10").innerHTML = userInputs.ac10;
  document.getElementById("output11").innerHTML = userInputs.ac11;
  document.getElementById("output12").innerHTML = userInputs.ac12;
  document.getElementById("output13").innerHTML = userInputs.ac13;
  document.getElementById("output14").innerHTML = userInputs.ac14;
  document.getElementById("output15").innerHTML = userInputs.ac15;
  document.getElementById("output16").innerHTML = userInputs.ac16;
  document.getElementById("output17").innerHTML = userInputs.ac17;
  document.getElementById("output18").innerHTML = userInputs.ac18;
  document.getElementById("output19").innerHTML = userInputs.ac19;
  document.getElementById("output20").innerHTML = userInputs.ac20;
}