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
      },


    {
      id: 2,
      title: "The Note",

      scenes: [
        {
          type: "narration",
          text:
            "The next evening, aanya was sleeping in her room then she hear some rainy sound from balcony, the rain returned just before sunset, she walked towards balcony and silently watching the beautiful rainy weather. Aanya almost forgot about the boy from the previous night."
        },
        {
          type: "narration",
          text:
            "Almost."
        },
        {
          type: "narration",
          text:
            "She was just about to close the window when something caught her attention. She got something ... a letter , she read it..... "
        },
        {
          type: "letter",
          text:
            "You still remember 6:17, don't you?"
        },
        {
          type: "narration",
          text:
            "Aanya froze."
        },
        {
          type: "narration",
          text:
            "The small piece of paper was folded neatly and placed on the balcony railing. There was no name on it."
        },
        {
          type: "narration",
          text:
            "She looked towards the street."
        },
        {
          type: "narration",
          text:
            "The street area was empty. She's still looking there , like..."
        },
        {
          type: "mystery",
          title: "Someone had been here.",
          text:
            "The paper was still dry, even though everything around it was soaked by the rain."
        },
        {
          type: "narration",
          text:
            "Aanya read the sentence again."
        },
        {
          type: "narration",
          text:
            "6:17."
        },

        {
          type: "narration",
          text:
            "She hadn't told anyone about that time. As if there's something that she just want to keep it to herself and like that was soo important for her... "
        }
      ]
    },


    {
      id: 3,
      title: "The Café",

      scenes: [
        {
          type: "narration",
          text:
            "The note stayed on Aanya's desk the entire night."
        },

        {
          type: "narration",
          text:
            "She tried to convince herself that it was a wrong delivery , or a bad prank . But the single sentence kept echoing against the walls of her mind."
        },

        {
          type: "narration",
          text:
            "You still remember 6:17, don't you?"
        },

        {
          type: "narration",
          text:
            "Aanya tries to sleep , but she can't ... She looks tensed and thinking about that letter only , suddenly she realizes it's already morning then she wake up from bed and gone to fresh n up . She makes breakfast for self and take a bath. "
        },

        {
          type: "narration",
          text:
            "In evening, Aanya walked to the little café near the old street."
        },

        {
          type: "narration",
          text:
            "She didn't know exactly what she was looking for."
        },

        {
          type: "narration",
          text:
            "Until she saw him."
        },

        {
          type: "mystery",
          title: "The boy from the streetlight.",
          text:
            "He was sitting alone near the window, quietly watching the rain."
        },

        {
          type: "dialogue",
          character: "Vihaan",
          text:
            "Tum mujhe pehchaan nahi rahi?"
        },

        {
          type: "dialogue",
          character: "Aanya",
          text:
            "Should I?"
        },

        {
          type: "dialogue",
          character: "Vihaan",
          text:
            "Maybe you forgot."
        },

        {
          type: "narration",
          text:
            "Aanya looked at him carefully."
        },

        {
          type: "narration",
          text:
            "There was something strangely familiar about his face."
        },

        {
          type: "narration",
          text:
            "And for the first time, Aanya wondered if the missing memories from three years ago were connected to him."
        }
      ]
    },
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