const meera = {
  id: "meera",
  character: "Meera",
  icon: "🚉",
  title: "The Last Train at 11:47",

  genre: [
    "Murder Mystery",
    "Suspense",
    "Drama"
  ],

  shortDescription:
    "One train. One dead passenger. And one missing minute.",

  chapters: [

        {
            id: 1,
            title: "The Station",

            scenes: [
            {
                type: "narration",
                text:
                "It was 11:21 PM when Meera reached the old railway station . The station was almost empty . A cold wind moved through the platform, carrying the smell of rain and old iron . Meera checked the ticket in her hand . "
            },

            {
                type: "mystery",
                title: "11:47 PM",
                text:
                "Her train was supposed to arrive in twenty-six minutes."
            },

            {
                type: "narration",
                text:
                "She sat on a wooden bench near Platform 3 , there were only four other people waiting . An old man reading a newspaper , A woman holding a small black suitcase , a young man standing near the edge of the platform and a railway employee who kept looking at the station clock . "
            },

            {
                type: "clock",
                time: "11:31 PM"
            },

            {
                type: "dialogue",
                character: "Railway Employee",
                text:
                "You're waiting for the 11:47?"
            },

            {
                type: "dialogue",
                character: "Meera",
                text:
                "Yes."
            },

            {
                type: "narration",
                text:
                "The employee looked at her ticket."
            },

            {
                type: "dialogue",
                character: "Railway Employee",
                text:
                "Keep your ticket with you."
            },

            {
                type: "dialogue",
                character: "Meera",
                text:
                "Why?"
            },

            {
                type: "narration",
                text:
                "The employee hesitated."
            },

            {
                type: "dialogue",
                character: "Railway Employee",
                text:
                "Just... don't lose it."
            },

            {
                type: "narration",
                text:
                "Before Meera could ask anything else, he walked away."
            },

            {
                type: "narration",
                text:
                "She looked towards the station clock again."
            },

            {
                type: "clock",
                time: "11:38 PM"
            },

            {
                type: "narration",
                text:
                "The young man near the platform edge suddenly turned and looked directly at her , then he looked at the clock."
            },

            {
                type: "narration",
                text:
                "11:38 PM."
            },

            {
                type: "narration",
                text:
                "For some reason, Meera felt that everyone at the station was waiting for the same thing."
            },

            {
                type: "narration",
                text:
                "Not the train , something else ..."
            },
        ]
    },

    // next ->

    {
        id: 2,
        title: "11:47",

        scenes: [
            {
            type: "narration",
            text:
                "At exactly 11:47 PM, the sound of a train echoed through the station."
            },

            {
            type: "clock",
            time: "11:47 PM"
            },

            {
            type: "narration",
            text:
                "The train slowly entered Platform 3."
            },

            {
            type: "narration",
            text:
                "Its headlights cut through the fog, lighting up the empty platform for a brief moment."
            },

            {
            type: "narration",
            text:
                "Meera stood up and picked up her bag."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "You're going to Delhi?"
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Yes. How did you know?"
            },

            {
            type: "narration",
            text:
                "The old man pointed towards the ticket in her hand."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "You were holding it upside down."
            },

            {
            type: "narration",
            text:
                "Meera looked down at her ticket and realized he was right . The woman with the black suitcase boarded the train first , the young man followed her then Meera entered the same compartment . The railway employee was standing near the door . "
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "Coach C. Seat 27."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Thank you."
            },

            {
            type: "narration",
            text:
                "As Meera walked towards her seat, she noticed something strange."
            },

            {
            type: "mystery",
            title: "Seat 28",
            text:
                "The seat directly opposite hers was empty, but someone's bag was already there."
            },

            {
            type: "narration",
            text:
                "Meera looked around the compartment."
            },

            {
            type: "narration",
            text:
                "Nobody seemed to be looking for it."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Excuse me... is this yours?"
            },

            {
            type: "narration",
            text:
                "Nobody answered . The train began moving . Meera sat down slowly  then  , she noticed something written on the window beside her ..."
            },

            {
            type: "mystery",
            title: "11:47",
            text:
                "Someone had written the same time on the fogged glass."
            },

            {
            type: "narration",
            text:
                "Meera wiped the glass with her hand."
            },

            {
            type: "narration",
            text:
                "The writing disappeared."
            },

            {
            type: "narration",
            text:
                "But underneath it was another message."
            },

            {
            type: "whisper",
            text:
                "Don't trust anyone in this compartment."
            }
        ]
    },

    //next ->

    {
        id: 3,
        title: "The Body",

        scenes: [
            {
            type: "narration",
            text:
                "The train had been moving for almost ten minutes when it suddenly slowed down then it stopped . The lights inside the compartment flickered once ."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "What happened?"
            },

            {
            type: "narration",
            text:
                "Nobody answered."
            },

            {
            type: "narration",
            text:
                "The railway employee hurried into the compartment."
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "Everyone stay where you are."
            },

            {
            type: "narration",
            text:
                "He looked towards the end of the compartment then his face went pale . Meera followed his gaze ."
            },

            {
            type: "mystery",
            title: "Seat 28",
            text:
                "A man was lying motionless beside the window."
            },

            {
            type: "narration",
            text:
                "For a moment, nobody moved."
            },

            {
            type: "dialogue",
            character: "Woman",
            text:
                "Oh my God..."
            },

            {
            type: "narration",
            text:
                "The railway employee rushed towards him and checked his pulse."
            },

            {
            type: "narration",
            text:
                "He slowly stood up."
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "He's dead."
            },

            {
            type: "narration",
            text:
                "Silence filled the compartment."
            },

            {
            type: "narration",
            text:
                "Meera looked at the clock above the door."
            },

            {
            type: "clock",
            time: "11:59 PM"
            },

            {
            type: "narration",
            text:
                "But something immediately bothered her."
            },

            {
            type: "narration",
            text:
                "The man was sitting beside the same bag she had noticed earlier."
            },

            {
            type: "mystery",
            title: "The Black Bag",
            text:
                "Nobody admitted that the bag belonged to the dead man."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "I saw him get on the train."
            },

            {
            type: "dialogue",
            character: "Young Man",
            text:
                "No. He was already sitting here when we boarded."
            },

            {
            type: "narration",
            text:
                "Meera looked from one person to another."
            },

            {
            type: "narration",
            text:
                "Their stories didn't match."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "When did the train stop?"
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "Around 11:52."
            },

            {
            type: "narration",
            text:
                "Meera looked at the clock again."
            },

            {
            type: "clock",
            time: "11:59 PM"
            },

            {
            type: "narration",
            text:
                "Seven minutes."
            },

            {
            type: "narration",
            text:
                "Seven minutes when nobody could clearly explain what they had been doing."
            },

            {
            type: "whisper",
            text:
                "Don't trust anyone in this compartment."
            },

            {
            type: "narration",
            text:
                "Meera looked at the message on the window."
            },

            {
            type: "narration",
            text:
                "The warning suddenly felt much less mysterious."
            }
        ]
    },

    //next -> 

    {
        id: 4,
        title: "The Missing Minute",

        scenes: [
            {
            type: "narration",
            text:
                "The police had not arrived yet."
            },

            {
            type: "narration",
            text:
                "The railway employee took Meera to the small control room at the end of the platform."
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "The cameras cover almost everything."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Almost?"
            },

            {
            type: "narration",
            text:
                "He didn't answer."
            },

            {
            type: "cctv",
            time: "11:46 PM",
            text:
                "Camera 4 shows the passengers sitting inside the compartment."
            },

            {
            type: "narration",
            text:
                "The old man was reading."
            },

            {
            type: "narration",
            text:
                "The woman was holding her black suitcase."
            },

            {
            type: "narration",
            text:
                "The young man was standing near the door."
            },

            {
            type: "cctv",
            time: "11:47 PM",
            text:
                "The screen suddenly turns black."
            },

            {
            type: "narration",
            text:
                "Meera stared at the monitor."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Why did it stop?"
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "Technical problem."
            },

            {
            type: "narration",
            text:
                "Meera looked at him."
            },

            {
            type: "narration",
            text:
                "He looked nervous."
            },

            {
            type: "cctv",
            time: "11:48 PM",
            text:
                "The footage suddenly returns. Everyone is back in their seats."
            },

            {
            type: "narration",
            text:
                "But something had changed."
            },

            {
            type: "narration",
            text:
                "The young man was no longer standing near the door."
            },

            {
            type: "narration",
            text:
                "He was sitting beside the dead passenger."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Stop."
            },

            {
            type: "narration",
            text:
                "She pointed at the screen."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "He said he never went near that seat."
            },

            {
            type: "narration",
            text:
                "The railway employee slowly looked away."
            },

            {
            type: "cctv",
            time: "11:47 PM",
            text:
                "One minute of footage is missing."
            },

            {
            type: "narration",
            text:
                "Exactly sixty seconds."
            },

            {
            type: "narration",
            text:
                "The same minute in which the murder must have happened."
            },

            {
            type: "narration",
            text:
                "Meera suddenly remembered the message written on the window."
            },

            {
            type: "whisper",
            text:
                "Don't trust anyone in this compartment."
            },

            {
            type: "narration",
            text:
                "She looked back at the CCTV screen."
            },

            {
            type: "narration",
            text:
                "The black bag was visible beside Seat 28."
            },

            {
            type: "narration",
            text:
                "But when the footage returned..."
            },

            {
            type: "mystery",
            title: "The Missing Bag",
            text:
                "The black bag was gone."
            },

            {
            type: "narration",
            text:
                "Someone had moved it during the missing minute."
            }
        ]
    }, 

    //next -> 

    {
        id: 5,
        title: "Everyone Has a Secret",

        scenes: [
            {
            type: "narration",
            text:
                "Meera returned to the compartment ,  police were still on their way . Until they arrived, nobody was allowed to leave , Meera looked at the three passengers again ."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "I think someone here knows what happened."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "Everyone knows something."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "What do you mean?"
            },

            {
            type: "narration",
            text:
                "The old man folded his newspaper."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "I saw the dead man before tonight."
            },

            {
            type: "narration",
            text:
                "Meera stared at him."
            },

            {
            type: "dialogue",
            character: "Old Man",
            text:
                "He was at this station last week."
            },

            {
            type: "narration",
            text:
                "The woman with the black suitcase suddenly spoke."
            },

            {
            type: "dialogue",
            character: "Woman",
            text:
                "He wasn't alone."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Who was with him?"
            },

            {
            type: "narration",
            text:
                "The woman looked towards the young man."
            },

            {
            type: "narration",
            text:
                "The young man immediately stood up."
            },

            {
            type: "dialogue",
            character: "Young Man",
            text:
                "I don't know what you're talking about."
            },

            {
            type: "narration",
            text:
                "Meera noticed his hands were shaking."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "You told us you never went near Seat 28."
            },

            {
            type: "dialogue",
            character: "Young Man",
            text:
                "I didn't."
            },

            {
            type: "narration",
            text:
                "Meera pointed towards the CCTV monitor."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Then why were you sitting beside him when the footage returned?"
            },

            {
            type: "narration",
            text:
                "The young man went silent."
            },

            {
            type: "narration",
            text:
                "The railway employee suddenly interrupted."
            },

            {
            type: "dialogue",
            character: "Railway Employee",
            text:
                "Enough. Let the police handle this."
            },

            {
            type: "narration",
            text:
                "Meera looked at him."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "You knew about the missing footage."
            },

            {
            type: "narration",
            text:
                "He didn't respond . Meera looked at the empty space where the black bag had been then ,  she noticed a small piece of black fabric caught underneath Seat 28 ."
            },

            {
            type: "mystery",
            title: "The Hidden Clue",
            text:
                "A torn piece of fabric from the missing black bag."
            },

            {
            type: "narration",
            text:
                "Meera picked it up."
            },

            {
            type: "narration",
            text:
                "There was something written on the inside."
            },

            {
            type: "whisper",
            text:
                "11:47 — Don't let him reach the station."
            },

            {
            type: "narration",
            text:
                "Meera's eyes widened."
            },

            {
            type: "narration",
            text:
                "The victim hadn't boarded this train by accident."
            },

            {
            type: "narration",
            text:
                "He had been coming here to meet someone."
            },

            {
            type: "narration",
            text:
                "And someone had been waiting for him."
            }
        ]
    },

    //next -> 
    
    {
        id: 6,
        title: "The Truth",
        scenes: [

            {
            type: "narration",
            text:
                "Meera looked at the window again."
            },

            {
            type: "narration",
            text:
                "The message had disappeared."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Who has been leaving these clues?"
            },

            {
            type: "narration",
            text:
                "The lights inside the compartment suddenly flickered , the dead man's seat was empty . Meera slowly turned towards it ."
            },

            {
            type: "whisper",
            text:
                "You were looking  for the wrong person."
            },

            {
            type: "narration",
            text:
                "A figure appeared faintly in the reflection of the window."
            },

            {
            type: "narration",
            text:
                "It was the man who had been found dead in Seat 28."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "You..."
            },

            {
            type: "whisper",
            text:
                "I tried to warn them before they killed me."
            },

            {
            type: "narration",
            text:
                "Meera couldn't move."
            },

            {
            type: "whisper",
            text:
                "The message on the window was mine."
            },

            {
            type: "whisper",
            text:
                "The clues in the bag were mine."
            },

            {
            type: "whisper",
            text:
                "And the call you never received..."
            },

            {
            type: "whisper",
            text:
                "was meant for you."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "Why me?"
            },

            {
            type: "whisper",
            text:
                "Because you were the only person who noticed."
            },

            {
            type: "narration",
            text:
                "Meera looked at the CCTV monitor."
            },

            {
            type: "narration",
            text:
                "The missing minute was playing again."
            },

            {
            type: "cctv",
            time: "11:47 PM",
            text:
                "The victim is seen entering the compartment alone."
            },

            {
            type: "narration",
            text:
                "Then the railway employee entered , the screen went black when the footage returned, the victim was dead . The truth was finally clear ."
            },

            {
            type: "narration",
            text:
                "The railway employee had killed him because he had discovered the disappearances . The victim had hidden the evidence inside the black bag before his death and after his murder, his spirit had spent the entire night guiding Meera towards it ."
            },

            {
            type: "dialogue",
            character: "Meera",
            text:
                "What was your name?"
            },

            {
            type: "whisper",
            text:
                "Kabir."
            },

            {
            type: "narration",
            text:
                "The figure slowly disappeared from the window."
            },

            {
            type: "whisper",
            text:
                "Thank you, Meera."
            },

            {
            type: "narration",
            text:
                "The clock changed."
            },

            {
            type: "clock",
            time: "12:13 AM"
            },

            {
            type: "narration",
            text:
                "The train became completely silent  this time ... "
            },

            {
            type: "narration",
            text:
                " there was no warning , no message , no footsteps ..."
            },

            {
            type: "narration",
            text:
                "Kabir was finally gone."
            }
        ]
    }
],

  quiz: [
        {
            question: "At what time did the train arrive at Platform 3?",
            options: [
            "11:21 PM",
            "11:31 PM",
            "11:47 PM",
            "11:59 PM"
            ],
            correctAnswer: 2
        },

        {
            question: "What was unusual about Seat 28?",
            options: [
            "It was completely broken.",
            "A bag was there but nobody claimed it.",
            "It was occupied by the railway employee.",
            "It had Meera's name written on it."
            ],
            correctAnswer: 1
        },

        {
            question: "What happened to the CCTV footage at 11:47 PM?",
            options: [
            "The entire station lost power.",
            "The camera was moved.",
            "The footage went black for exactly one minute.",
            "The recording showed the murderer clearly."
            ],
            correctAnswer: 2
        },

        {
            question: "What important clue was found under Seat 28?",
            options: [
            "A train ticket.",
            "A piece of black fabric.",
            "A hotel key.",
            "A photograph."
            ],
            correctAnswer: 1
        },

        {
            question: "What message was found on the piece of fabric?",
            options: [
            "Don't trust anyone in this compartment.",
            "Meet me at midnight.",
            "11:47 — Don't let him reach the station.",
            "Room 306 is waiting."
            ],
            correctAnswer: 2
        },

        {
            question: "Why had the victim come to the station?",
            options: [
            "He was travelling to Delhi.",
            "He was meeting someone and investigating disappearances.",
            "He worked at the railway station.",
            "He was looking for his missing suitcase."
            ],
            correctAnswer: 1
        },

        {
            question: "Who had access to the CCTV controls?",
            options: [
            "The old man.",
            "The woman with the suitcase.",
            "The young man.",
            "The railway employee."
            ],
            correctAnswer: 3
        },

        {
            question: "Why did the railway employee switch off the CCTV?",
            options: [
            "He wanted to hide a technical problem.",
            "He wanted to hide the murder.",
            "He was trying to protect Meera.",
            "He wanted to hide the black bag."
            ],
            correctAnswer: 1
        },

        {
            question: "Who was secretly giving Meera the clues throughout the night?",
            options: [
            "The railway employee.",
            "The old man.",
            "The murdered passenger, Kabir.",
            "The woman with the suitcase."
            ],
            correctAnswer: 2
        },

        {
            question: "Why was Kabir giving Meera clues after his death?",
            options: [
            "He wanted revenge on Meera.",
            "He wanted Meera to expose the truth.",
            "He wanted Meera to leave the station.",
            "He wanted to hide the evidence."
            ],
            correctAnswer: 1
        },

        {
            question: "What happened after Meera uncovered the truth?",
            options: [
            "The railway employee was arrested and old cases were reopened.",
            "The train disappeared from the station.",
            "Meera became the railway employee.",
            "The evidence was destroyed."
            ],
            correctAnswer: 0
        }
    ]
};

export default meera;