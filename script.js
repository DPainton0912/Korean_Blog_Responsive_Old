window.onload = function() {
  var questionArea = document.getElementsByClassName('questions')[0],
    answerArea = document.getElementsByClassName('answers')[0],
    checker = document.getElementsByClassName('checker')[0],
    current = 0,

    allQuestions = {
      "The Korean Peninsula is surrounded by numerous bodies of water. Which body of water lies to the west?": ["East China Sea", "Yellow Sea", "Korea Strait", "Sea of Japan", 1],
      "The Korean Peninsula is bordered to the north by which two large countries?": ["Mongolia and Kazakhstan", "Iran and Turkey", "India and Pakistan", "China and Russia", 3],
      "Many tourists flock to this beautiful island on the south coast of Korea every year. It is often called the 'Hawaii of Korea.' Its capital city is Jeju. Can you name this island?": ["Kimchido", "Juijitsu", "Jejudo", "Hokkaido", 2],
      "What colour is line 2 on the Seoul Subway map?": ["Green", "Blue", "Red", "Pink", 0],
      "How many 'gu'(boroughs) are there within metropolitan Seoul?": ["24", "22", "26", "25", 3],
      "The 'three Kims' era refers to the period when South Korean politics was dominated by Kim Dae-jung and which two others?": ["Kim Young-sam and Kim Jong-il", "Kim Min-jong and Kim Seung-kee", "Kim Jong-pil and Kim Min-jong", "Kim Young-sam and Kim Jong-pil", 3],
      "Some scholars have compared Korea's shape (including both North and South) to which animal, sans tail?": ["Elephant", "Rabbit", "Cat", "Panda", 1],
      "What is the most popular traditional sport in Korea?": ["Ssirum", "T'aekwondo", "Soccer", "Soccer", 1],
      "Which landlocked Asian country is similar in size to the Korean peninsula?": ["Cambodia", "Vietnam", "Laos", "Thailand", 2],
      "One of the more prominent features of this island is called Hawk Rock. It is perhaps better known for the 'Miracle of Moses' phenomenon. What is the name of this west coast island?": ["Jebudo", "Jido", "Silmido", "Mido", 0],
      "Pyongyang is the capital of North Korea and the seat of its government. Near which coast of North Korea is Pyongyang situated?": ["North", "South", "East", "West", 3],
      "What is the formal way of saying "Hello" in Korean?": ["Anyang-Keseyo", "Anyang-Haseyo", "Anyangi-Keseyo", "Anyang", 1],
      "What is the only other metropolis (gwangyokshi) physically touching metropolitan Seoul?": ["Bucheon (Pucheon)", "Daejeon (Taejon)", "Suwon", "Incheon", 3],
      "Which Korean city hosted the Asian Games in 2002?": ["Seoul", "Seogwipo", "Ulsan", "Busan", 3],
      "The northern border of Korea is created almost entirely by two rivers. The most well known river is the Yalu, but what is the other river that makes up much of the northeast border called?": ["Kum", "Nakton", "Tumen", "Han", 2],
      "At the beginning of the 21st century what percentage of Koreans were under the age of 25?": ["25%", "50%", "15%", "40%", 1],
      "What is the name of the traditional Korean costume?": ["Kimono", "Dragon Robe", "Sari", "Hanbok", 3],
      "With its origins in the Taebaek Mountains and flowing through Busan before emptying in the Korean Strait, is which Korean river?": ["Shinano", "Nakdong", "Sakarya", "Mekong", 1],
      "This lonely pair of rocks located in the East Sea is controlled by South Korea, but the ownership is contested, albeit mildly, by Japan. The Japanese name of this place is 'Takeshima'.": ["Manhattan", "Dokdo", "Okinawa", "Gumido", 1],
      "The highest point of North Korea lies to the north, at the border with China. It is known as Baekdu-San Mountain. To what does this name translate?": ["Holy Smoky Mountain", "Mountain of the Holy Ancestors", "Holy Mountain of Youth", "White Mountain", 3],
      "Which piece of classical music plays when the train has to stop to be cleaned (and therefore the passengers have to get off and wait for the next train)?": ["Mozart's Eine Kleine Nachtmusik", "Boccherini's Minuet in E", "Beethoven's Fur Elise", "Chopin's Nocturne in F", 1],
      "In the United States, the number 13 is notorious for its superstitious overtones. What number is the equivalent to the number 13 in South Korea?": ["13", "4", "11", "7", 1],
      "What is the tallest peak in the Korean peninsula? (both north and south)": ["Mt. Baekdu (Paekdu)", "Mt. Hanla (Halla)", "Nampotaesan", "Mt. Seorak (Seolak)", 0],
      " Which city in North Korea can be seen from the demilitarised zone that separates the two Koreas?": ["Pyongyang", "Dandong", "Chongjin", "Kaesong", 3],
      "Which country, outside of the two Koreas, contains the largest population of ethnic Koreans?": ["Australia", "Japan", "China", "United States", 2],
      "What year did the so-called "Kwangju Massacre" take place in which hundreds of street protesters were gunned down by the military in the southern city of Kwangju?": ["1989", "1980", "1984", "1990", 1],
      "The Tripitaka Koreana, is a creation of the most complete collection of Buddhist scriptures in the world. This collection was carved on wood blocks in Chinese characters. How many wood blocks went into this creation?": ["81,340", "41,312", "14,229", "96,796", 0],
      "Which mountain on the border of China and North Korea, the highest peak in either Korean state, is mentioned in both national anthems?": ["Kangchenjunga", "Paektu", "Narodnaya", "Qash-Mastan", 1],
      "This island is an increasingly popular tourist destination. It is known as Dagelet Island to the original European cartographers.": ["Zhokov Island", "Fantasy Island", "Ulleungdo", "Island of Dr. Moreau", 2],
      "What is the largest river in North Korea?": ["The Amnok River", "The Hoang Ho River", "The Amur River", "The Mekong River", 0],
    };

  function loadQuestion(curr) {
    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = "";
    questionArea.innerHTML = question;
  }

  function loadAnswers(curr) {
    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = '';

    for (var i = 0; i < answers.length - 1; i += 1) {
      var createDiv = document.createElement('div'),
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
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }

    };
  }

  function addChecker(bool) {
    var createDiv = document.createElement('div'),
      txt = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

    if (bool) {
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    }
    else {
      createDiv.className += 'false';
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