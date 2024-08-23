import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  return {
    "data": [
      {
        "id": 1,
        "name": "Life",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOVMs0eukDlt0ASfgVxLcM-nWCAxWiV3c4kzjT2UVBBbWD6p0b",
        "quotes": [
          {
            "id": 1,
            "author": "Albert Einstein",
            "text": "Life is like riding a bicycle. To keep your balance, you must keep moving."
          },
          {
            "id": 2,
            "author": "William Shakespeare",
            "text": "All the world's a stage, and all the men and women merely players."
          },
          {
            "id": 3,
            "author": "Helen Keller",
            "text": "Life is either a daring adventure or nothing at all."
          }
        ]
      },
      {
        "id": 2,
        "name": "Knowledge",
        "image": "https://www.sciencekids.co.nz/images/pictures/scientists/isaacnewton.jpg",
        "quotes": [
          {
            "id": 4,
            "author": "Isaac Newton",
            "text": "If I have seen further it is by standing on the shoulders of Giants."
          },
          {
            "id": 5,
            "author": "Isaac Newton",
            "text": "What we know is a drop, what we don't know is an ocean."
          },
          {
            "id": 6,
            "author": "Albert Einstein",
            "text": "The more I learn, the more I realize how much I don't know."
          }
        ]
      },
      {
        "id": 3,
        "name": "Science",
        "image": "https://example.com/curie.jpg",
        "quotes": [
          {
            "id": 7,
            "author": "Marie Curie",
            "text": "Nothing in life is to be feared; it is only to be understood."
          },
          {
            "id": 8,
            "author": "Isaac Newton",
            "text": "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion."
          },
          {
            "id": 9,
            "author": "Carl Sagan",
            "text": "Somewhere, something incredible is waiting to be known."
          }
        ]
      },
      {
        "id": 4,
        "name": "Change",
        "image": "https://example.com/gandhi.jpg",
        "quotes": [
          {
            "id": 10,
            "author": "Mahatma Gandhi",
            "text": "Be the change that you wish to see in the world."
          },
          {
            "id": 11,
            "author": "Nelson Mandela",
            "text": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
          },
          {
            "id": 12,
            "author": "Leo Tolstoy",
            "text": "Everyone thinks of changing the world, but no one thinks of changing himself."
          }
        ]
      },
      {
        "id": 5,
        "name": "Perseverance",
        "image": "https://example.com/mandela.jpg",
        "quotes": [
          {
            "id": 13,
            "author": "Nelson Mandela",
            "text": "It always seems impossible until it's done."
          },
          {
            "id": 14,
            "author": "Confucius",
            "text": "It does not matter how slowly you go as long as you do not stop."
          },
          {
            "id": 15,
            "author": "Thomas Edison",
            "text": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."
          }
        ]
      },
      {
        "id": 6,
        "name": "Motivation",
        "image": "https://example.com/twain.jpg",
        "quotes": [
          {
            "id": 16,
            "author": "Mark Twain",
            "text": "The secret of getting ahead is getting started."
          },
          {
            "id": 17,
            "author": "Walt Disney",
            "text": "The way to get started is to quit talking and begin doing."
          },
          {
            "id": 18,
            "author": "Vince Lombardi",
            "text": "The only place success comes before work is in the dictionary."
          }
        ]
      },
      {
        "id": 7,
        "name": "Philosophy",
        "image": "https://example.com/shakespeare.jpg",
        "quotes": [
          {
            "id": 19,
            "author": "William Shakespeare",
            "text": "To be, or not to be, that is the question."
          },
          {
            "id": 20,
            "author": "Plato",
            "text": "The unexamined life is not worth living."
          },
          {
            "id": 21,
            "author": "Socrates",
            "text": "Know thyself."
          }
        ]
      },
      {
        "id": 8,
        "name": "Art",
        "image": "https://example.com/davinci.jpg",
        "quotes": [
          {
            "id": 22,
            "author": "Leonardo da Vinci",
            "text": "Simplicity is the ultimate sophistication."
          },
          {
            "id": 23,
            "author": "Pablo Picasso",
            "text": "Every child is an artist. The problem is how to remain an artist once we grow up."
          },
          {
            "id": 24,
            "author": "Vincent Van Gogh",
            "text": "I dream my painting and I paint my dream."
          }
        ]
      },
      {
        "id": 9,
        "name": "Wisdom",
        "image": "https://example.com/plato.jpg",
        "quotes": [
          {
            "id": 25,
            "author": "Plato",
            "text": "The greatest wealth is to live content with little."
          },
          {
            "id": 26,
            "author": "Plato",
            "text": "Wise men speak because they have something to say; fools because they have to say something."
          },
          {
            "id": 27,
            "author": "Confucius",
            "text": "Real knowledge is to know the extent of one's ignorance."
          }
        ]
      },
      {
        "id": 10,
        "name": "Self",
        "image": "https://example.com/aristotle.jpg",
        "quotes": [
          {
            "id": 28,
            "author": "Aristotle",
            "text": "Knowing yourself is the beginning of all wisdom."
          },
          {
            "id": 29,
            "author": "Ralph Waldo Emerson",
            "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
          },
          {
            "id": 30,
            "author": "Socrates",
            "text": "He who knows himself is wise."
          }
        ]
      },
      {
        "id": 11,
        "name": "Adventure",
        "image": "https://example.com/emerson.jpg",
        "quotes": [
          {
            "id": 31,
            "author": "Ralph Waldo Emerson",
            "text": "Do not go where the path may lead, go instead where there is no path and leave a trail."
          },
          {
            "id": 32,
            "author": "Helen Keller",
            "text": "Life is either a daring adventure or nothing at all."
          },
          {
            "id": 33,
            "author": "Mark Twain",
            "text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
          }
        ]
      },
      {
        "id": 12,
        "name": "Innovation",
        "image": "https://example.com/edison.jpg",
        "quotes": [
          {
            "id": 34,
            "author": "Thomas Edison",
            "text": "I have not failed. I've just found 10,000 ways that won't work."
          },
          {
            "id": 35,
            "author": "Albert Einstein",
            "text": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
          },
          {
            "id": 36,
            "author": "Steve Jobs",
            "text": "Innovation distinguishes between a leader and a follower."
          }
        ]
      },
      {
        "id": 13,
        "name": "Vision",
        "image": "https://example.com/keller.jpg",
        "quotes": [
          {
            "id": 37,
            "author": "Helen Keller",
            "text": "The only thing worse than being blind is having sight but no vision."
          },
          {
            "id": 38,
            "author": "Steve Jobs",
            "text": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
          },
          {
            "id": 39,
            "author": "Albert Einstein",
            "text": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
          }
        ]
      },
      {
        "id": 14,
        "name": "Curiosity",
        "image": "https://example.com/curie.jpg",
        "quotes": [
          {
            "id": 40,
            "author": "Marie Curie",
            "text": "Be less curious about people and more curious about ideas."
          },
          {
            "id": 41,
            "author": "Albert Einstein",
            "text": "I have no special talents. I am only passionately curious."
          },
          {
            "id": 42,
            "author": "Walt Disney",
            "text": "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths."
          }
        ]
      },
      {
        "id": 15,
        "name": "Service",
        "image": "https://example.com/gandhi.jpg",
        "quotes": [
          {
            "id": 43,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 44,
            "author": "Martin Luther King Jr.",
            "text": "Life's most persistent and urgent question is, 'What are you doing for others?'"
          },
          {
            "id": 45,
            "author": "Mother Teresa",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          }
        ]
      },
      {
        "id": 16,
        "name": "Education",
        "image": "https://example.com/mandela.jpg",
        "quotes": [
          {
            "id": 46,
            "author": "Nelson Mandela",
            "text": "Education is the most powerful weapon which you can use to change the world."
          },
          {
            "id": 47,
            "author": "Aristotle",
            "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it."
          },
          {
            "id": 48,
            "author": "Malcolm X",
            "text": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          }
        ]
      },
      {
        "id": 17,
        "name": "Kindness",
        "image": "https://example.com/twain.jpg",
        "quotes": [
          {
            "id": 49,
            "author": "Mark Twain",
            "text": "The best way to cheer yourself is to try to cheer someone else up."
          },
          {
            "id": 50,
            "author": "Mother Teresa",
            "text": "Kind words can be short and easy to speak, but their echoes are truly endless."
          },
          {
            "id": 51,
            "author": "Dalai Lama",
            "text": "Be kind whenever possible. It is always possible."
          }
        ]
      },
      {
        "id": 18,
        "name": "Progress",
        "image": "https://example.com/curie.jpg",
        "quotes": [
          {
            "id": 52,
            "author": "Marie Curie",
            "text": "I was taught that the way of progress is neither swift nor easy."
          },
          {
            "id": 53,
            "author": "Martin Luther King Jr.",
            "text": "If you can't fly, then run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward."
          },
          {
            "id": 54,
            "author": "Winston Churchill",
            "text": "To improve is to change; to be perfect is to change often."
          }
        ]
      },
      {
        "id": 19,
        "name": "Peace",
        "image": "https://example.com/gandhi.jpg",
        "quotes": [
          {
            "id": 55,
            "author": "Mahatma Gandhi",
            "text": "An eye for an eye only ends up making the whole world blind."
          },
          {
            "id": 56,
            "author": "Dalai Lama",
            "text": "Do not let the behavior of others destroy your inner peace."
          },
          {
            "id": 57,
            "author": "Martin Luther King Jr.",
            "text": "Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal."
          }
        ]
      },
      {
        "id": 20,
        "name": "Resilience",
        "image": "https://example.com/confucius.jpg",
        "quotes": [
          {
            "id": 58,
            "author": "Confucius",
            "text": "Our greatest glory is not in never falling, but in rising every time we fall."
          },
          {
            "id": 59,
            "author": "Nelson Mandela",
            "text": "The greatest glory in living lies not in never falling, but in rising every time we fall."
          },
          {
            "id": 60,
            "author": "Winston Churchill",
            "text": "Success is not final, failure is not fatal: It is the courage to continue that counts."
          }
        ]
      },
      {
        "id": 21,
        "name": "Friendship",
        "image": "https://example.com/emerson.jpg",
        "quotes": [
          {
            "id": 61,
            "author": "Ralph Waldo Emerson",
            "text": "The only way to have a friend is to be one."
          },
          {
            "id": 62,
            "author": "Aristotle",
            "text": "Friendship is a single soul dwelling in two bodies."
          },
          {
            "id": 63,
            "author": "Helen Keller",
            "text": "Walking with a friend in the dark is better than walking alone in the light."
          }
        ]
      },
      {
        "id": 22,
        "name": "Opportunity",
        "image": "https://example.com/edison.jpg",
        "quotes": [
          {
            "id": 64,
            "author": "Thomas Edison",
            "text": "Opportunity is missed by most people because it is dressed in overalls and looks like work."
          },
          {
            "id": 65,
            "author": "Sun Tzu",
            "text": "In the midst of chaos, there is also opportunity."
          },
          {
            "id": 66,
            "author": "Milton Berle",
            "text": "If opportunity doesn't knock, build a door."
          }
        ]
      },
      {
        "id": 23,
        "name": "Positivity",
        "image": "https://example.com/keller.jpg",
        "quotes": [
          {
            "id": 67,
            "author": "Helen Keller",
            "text": "Keep your face to the sunshine and you cannot see a shadow."
          },
          {
            "id": 68,
            "author": "Walt Whitman",
            "text": "Keep your face always toward the sunshine—and shadows will fall behind you."
          },
          {
            "id": 69,
            "author": "Dalai Lama",
            "text": "In order to carry a positive action we must develop here a positive vision."
          }
        ]
      },
      {
        "id": 24,
        "name": "Success",
        "image": "https://example.com/einstein.jpg",
        "quotes": [
          {
            "id": 70,
            "author": "Albert Einstein",
            "text": "Try not to become a man of success, but rather try to become a man of value."
          },
          {
            "id": 71,
            "author": "Winston Churchill",
            "text": "Success is not final, failure is not fatal: It is the courage to continue that counts."
          },
          {
            "id": 72,
            "author": "Vince Lombardi",
            "text": "Success is not in never falling, but in rising every time we fall."
          }
        ]
      },
      {
        "id": 25,
        "name": "Learning",
        "image": "https://example.com/davinci.jpg",
        "quotes": [
          {
            "id": 73,
            "author": "Leonardo da Vinci",
            "text": "Learning never exhausts the mind."
          },
          {
            "id": 74,
            "author": "Albert Einstein",
            "text": "Intellectual growth should commence at birth and cease only at death."
          },
          {
            "id": 75,
            "author": "Socrates",
            "text": "Education is the kindling of a flame, not the filling of a vessel."
          }
        ]
      },
      {
        "id": 26,
        "name": "Mindfulness",
        "image": "https://example.com/dalai.jpg",
        "quotes": [
          {
            "id": 76,
            "author": "Dalai Lama",
            "text": "Be kind whenever possible. It is always possible."
          },
          {
            "id": 77,
            "author": "Marcus Aurelius",
            "text": "The happiness of your life depends upon the quality of your thoughts."
          },
          {
            "id": 78,
            "author": "Thich Nhat Hanh",
            "text": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor."
          }
        ]
      },
      {
        "id": 27,
        "name": "Creativity",
        "image": "https://example.com/van.jpg",
        "quotes": [
          {
            "id": 79,
            "author": "Vincent Van Gogh",
            "text": "I dream my painting and I paint my dream."
          },
          {
            "id": 80,
            "author": "Pablo Picasso",
            "text": "Everything you can imagine is real."
          },
          {
            "id": 81,
            "author": "Albert Einstein",
            "text": "Creativity is intelligence having fun."
          }
        ]
      },
      {
        "id": 28,
        "name": "Gratitude",
        "image": "https://example.com/teresa.jpg",
        "quotes": [
          {
            "id": 82,
            "author": "Mother Teresa",
            "text": "Gratitude is the fairest blossom which springs from the soul."
          },
          {
            "id": 83,
            "author": "Maya Angelou",
            "text": "Let gratitude be the pillow upon which you kneel to say your nightly prayer."
          },
          {
            "id": 84,
            "author": "Oprah Winfrey",
            "text": "Be thankful for what you have; you'll end up having more."
          }
        ]
      },
      {
        "id": 29,
        "name": "Humor",
        "image": "https://example.com/twain.jpg",
        "quotes": [
          {
            "id": 85,
            "author": "Mark Twain",
            "text": "Against the assault of laughter, nothing can stand."
          },
          {
            "id": 86,
            "author": "Groucho Marx",
            "text": "I refuse to join any club that would have me as a member."
          },
          {
            "id": 87,
            "author": "Oscar Wilde",
            "text": "Be yourself; everyone else is already taken."
          }
        ]
      },
      {
        "id": 30,
        "name": "Faith",
        "image": "https://example.com/king.jpg",
        "quotes": [
          {
            "id": 88,
            "author": "Martin Luther King Jr.",
            "text": "Faith is taking the first step even when you don't see the whole staircase."
          },
          {
            "id": 89,
            "author": "Mother Teresa",
            "text": "Faith in action is love, and love in action is service."
          },
          {
            "id": 90,
            "author": "Helen Keller",
            "text": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."
          }
        ]
      },
      {
        "id": 31,
        "name": "Determination",
        "image": "https://example.com/mandela.jpg",
        "quotes": [
          {
            "id": 91,
            "author": "Nelson Mandela",
            "text": "It always seems impossible until it’s done."
          },
          {
            "id": 92,
            "author": "Vince Lombardi",
            "text": "Winners never quit and quitters never win."
          },
          {
            "id": 93,
            "author": "Walt Disney",
            "text": "The difference in winning and losing is most often not quitting."
          }
        ]
      },
      {
        "id": 32,
        "name": "Leadership",
        "image": "https://example.com/jobs.jpg",
        "quotes": [
          {
            "id": 94,
            "author": "Steve Jobs",
            "text": "Innovation distinguishes between a leader and a follower."
          },
          {
            "id": 95,
            "author": "John Maxwell",
            "text": "A leader is one who knows the way, goes the way, and shows the way."
          },
          {
            "id": 96,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          }
        ]
      }
    ]
  }
});
