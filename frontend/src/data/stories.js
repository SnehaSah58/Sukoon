const stories = [
  {
    id: "aanya",
    character: "Aanya",
    icon: "🌧️",

    title: "The Girl Who Waited for Rain",
    genre: ["Emotional", "Romance", "Mystery"],
    shortDescription:
      "Some memories return with the rain.",

    chapters: [
      {
        id: 1,
        title: "6:17 PM",

        scenes: [
          {
            type: "narration",
            text:
              "The rain had started just before sunset. Aanya stood beside her bedroom window, watching the tiny drops race down the glass."
          },

          {
            type: "narration",
            text:
              "She had always loved rainy evenings. They made the city quieter, softer, almost like the world had finally decided to slow down."
          },

          {
            type: "clock",
            time: "6:17 PM"
          },

          {
            type: "narration",
            text:
              "Every rainy evening, at exactly 6:17 PM, Aanya looked across the street."
          },

          {
            type: "narration",
            text:
              "She never knew why she did it. Or perhaps, somewhere deep inside, she did."
          },

          {
            type: "mystery",
            title: "Someone was there.",
            text:
              "Across the road, beneath the old streetlight, stood a boy."
          },

          {
            type: "narration",
            text:
              "He wasn't looking at his phone. He wasn't waiting for a cab. He was simply standing there, looking directly at Aanya's window."
          },

          {
            type: "narration",
            text:
              "For a moment, neither of them moved."
          },

          {
            type: "narration",
            text:
              "Then the boy turned around and disappeared into the rain."
          }
        ]
      }
    ],

    quiz: [
      {
        question: "At what time did Aanya look outside every rainy evening?",
        options: [
          "5:17 PM",
          "6:17 PM",
          "7:17 PM",
          "8:17 PM"
        ],
        correctAnswer: 1
      },

      {
        question: "Where was the boy standing?",
        options: [
          "Inside a cafe",
          "At a bus stop",
          "Under a streetlight",
          "Outside Aanya's house"
        ],
        correctAnswer: 2
      }
    ]
  }
];

export default stories;