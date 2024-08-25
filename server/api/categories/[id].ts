/* trunk-ignore-all(prettier) */
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {

   const data = [
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
        },
        {
          "id": 4,
          "author": "Marcus Aurelius",
          "text": "The happiness of your life depends upon the quality of your thoughts."
        },
        {
          "id": 5,
          "author": "Ralph Waldo Emerson",
          "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
        },
        {
          "id": 6,
          "author": "Søren Kierkegaard",
          "text": "Life can only be understood backwards; but it must be lived forwards."
        },
        {
          "id": 7,
          "author": "Aristotle",
          "text": "The energy of the mind is the essence of life."
        },
        {
          "id": 8,
          "author": "John Lennon",
          "text": "Life is what happens when you're busy making other plans."
        },
        {
          "id": 9,
          "author": "Steve Jobs",
          "text": "Your time is limited, don't waste it living someone else's life."
        },
        {
          "id": 10,
          "author": "Buddha",
          "text": "The mind is everything. What you think you become."
        },
        {
          "id": 11,
          "author": "Oscar Wilde",
          "text": "To live is the rarest thing in the world. Most people exist, that is all."
        },
        {
          "id": 12,
          "author": "Friedrich Nietzsche",
          "text": "He who has a why to live can bear almost any how."
        },
        {
          "id": 13,
          "author": "Henry David Thoreau",
          "text": "Go confidently in the direction of your dreams! Live the life you've imagined."
        },
        {
          "id": 14,
          "author": "Mahatma Gandhi",
          "text": "Live as if you were to die tomorrow. Learn as if you were to live forever."
        },
        {
          "id": 15,
          "author": "Confucius",
          "text": "Life is really simple, but we insist on making it complicated."
        },
        {
          "id": 16,
          "author": "Maya Angelou",
          "text": "My mission in life is not merely to survive, but to thrive."
        },
        {
          "id": 17,
          "author": "Eleanor Roosevelt",
          "text": "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience."
        },
        {
          "id": 18,
          "author": "Winston Churchill",
          "text": "We make a living by what we get, but we make a life by what we give."
        },
        {
          "id": 19,
          "author": "Bob Marley",
          "text": "Love the life you live. Live the life you love."
        },
        {
          "id": 20,
          "author": "Socrates",
          "text": "The unexamined life is not worth living."
        }
      ]
    },
    {
      "id": 2,
      "name": "Knowledge",
      "image": "https://www.sciencekids.co.nz/images/pictures/scientists/isaacnewton.jpg",
      "quotes": [
        {
          "id": 1,
          "author": "Isaac Newton",
          "text": "If I have seen further it is by standing on the shoulders of Giants."
        },
        {
          "id": 2,
          "author": "Isaac Newton",
          "text": "What we know is a drop, what we don't know is an ocean."
        },
        {
          "id": 3,
          "author": "Albert Einstein",
          "text": "The more I learn, the more I realize how much I don't know."
        },
        {
          "id": 4,
          "author": "Francis Bacon",
          "text": "Knowledge is power."
        },
        {
          "id": 5,
          "author": "Socrates",
          "text": "The only true wisdom is in knowing you know nothing."
        },
        {
          "id": 6,
          "author": "Confucius",
          "text": "Real knowledge is to know the extent of one's ignorance."
        },
        {
          "id": 7,
          "author": "Plato",
          "text": "Knowledge which is acquired under compulsion obtains no hold on the mind."
        },
        {
          "id": 8,
          "author": "Leonardo da Vinci",
          "text": "Learning never exhausts the mind."
        },
        {
          "id": 9,
          "author": "Albert Einstein",
          "text": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
        },
        {
          "id": 10,
          "author": "Benjamin Franklin",
          "text": "An investment in knowledge pays the best interest."
        },
        {
          "id": 11,
          "author": "Ralph Waldo Emerson",
          "text": "Knowledge is the antidote to fear."
        },
        {
          "id": 12,
          "author": "Mark Twain",
          "text": "The secret of getting ahead is getting started."
        },
        {
          "id": 13,
          "author": "Mahatma Gandhi",
          "text": "Live as if you were to die tomorrow. Learn as if you were to live forever."
        },
        {
          "id": 14,
          "author": "J.K. Rowling",
          "text": "Anything's possible if you've got enough nerve."
        },
        {
          "id": 15,
          "author": "Nelson Mandela",
          "text": "Education is the most powerful weapon which you can use to change the world."
        },
        {
          "id": 16,
          "author": "Aristotle",
          "text": "The more you know, the more you realize you don't know."
        },
        {
          "id": 17,
          "author": "Kahlil Gibran",
          "text": "A little knowledge that acts is worth infinitely more than much knowledge that is idle."
        },
        {
          "id": 18,
          "author": "Thomas Jefferson",
          "text": "He who knows best knows how little he knows."
        },
        {
          "id": 19,
          "author": "Confucius",
          "text": "To know what you know and what you do not know, that is true knowledge."
        },
        {
          "id": 20,
          "author": "Rene Descartes",
          "text": "The reading of all good books is like a conversation with the finest minds of past centuries."
        }
      ]
      },
      {
        "id": 3,
        "name": "Science",
        "image": "https://example.com/curie.jpg",
        "quotes": [
          {
            "id": 1,
            "author": "Marie Curie",
            "text": "Nothing in life is to be feared; it is only to be understood."
          },
          {
            "id": 2,
            "author": "Isaac Newton",
            "text": "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion."
          },
          {
            "id": 3,
            "author": "Carl Sagan",
            "text": "Somewhere, something incredible is waiting to be known."
          },
          {
            "id": 4,
            "author": "Albert Einstein",
            "text": "Science without religion is lame, religion without science is blind."
          },
          {
            "id": 5,
            "author": "Stephen Hawking",
            "text": "Intelligence is the ability to adapt to change."
          },
          {
            "id": 6,
            "author": "Richard Feynman",
            "text": "Science is the belief in the ignorance of experts."
          },
          {
            "id": 7,
            "author": "Galileo Galilei",
            "text": "You cannot teach a man anything; you can only help him find it within himself."
          },
          {
            "id": 8,
            "author": "Charles Darwin",
            "text": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."
          },
          {
            "id": 9,
            "author": "Niels Bohr",
            "text": "An expert is a man who has made all the mistakes which can be made in a very narrow field."
          },
          {
            "id": 10,
            "author": "Thomas Edison",
            "text": "I have not failed. I've just found 10,000 ways that won't work."
          },
          {
            "id": 11,
            "author": "Nikola Tesla",
            "text": "The scientists of today think deeply instead of clearly."
          },
          {
            "id": 12,
            "author": "Neil deGrasse Tyson",
            "text": "The good thing about science is that it's true whether or not you believe in it."
          },
          {
            "id": 13,
            "author": "Carl Sagan",
            "text": "The cosmos is within us. We are made of star-stuff."
          },
          {
            "id": 14,
            "author": "Johannes Kepler",
            "text": "Nature uses as little as possible of anything."
          },
          {
            "id": 15,
            "author": "Michael Faraday",
            "text": "Nothing is too wonderful to be true, if it be consistent with the laws of nature."
          },
          {
            "id": 16,
            "author": "Albert Einstein",
            "text": "The important thing is not to stop questioning. Curiosity has its own reason for existing."
          },
          {
            "id": 17,
            "author": "Marie Curie",
            "text": "Be less curious about people and more curious about ideas."
          },
          {
            "id": 18,
            "author": "Leonardo da Vinci",
            "text": "In science, the greatest advantage is that there are no human authorities."
          },
          {
            "id": 19,
            "author": "Galileo Galilei",
            "text": "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual."
          },
          {
            "id": 20,
            "author": "Isaac Asimov",
            "text": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."
          }
        ]
      },
      {
        "id": 4,
        "name": "Change",
        "image": "https://example.com/gandhi.jpg",
        "quotes": [
          {
            "id": 1,
            "author": "Mahatma Gandhi",
            "text": "Be the change that you wish to see in the world."
          },
          {
            "id": 2,
            "author": "Nelson Mandela",
            "text": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
          },
          {
            "id": 3,
            "author": "Leo Tolstoy",
            "text": "Everyone thinks of changing the world, but no one thinks of changing himself."
          },
          {
            "id": 4,
            "author": "Heraclitus",
            "text": "The only constant in life is change."
          },
          {
            "id": 5,
            "author": "Maya Angelou",
            "text": "If you don't like something, change it. If you can't change it, change your attitude."
          },
          {
            "id": 6,
            "author": "Barack Obama",
            "text": "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for."
          },
          {
            "id": 7,
            "author": "Winston Churchill",
            "text": "To improve is to change; to be perfect is to change often."
          },
          {
            "id": 8,
            "author": "John F. Kennedy",
            "text": "Change is the law of life. And those who look only to the past or present are certain to miss the future."
          },
          {
            "id": 9,
            "author": "Charles Darwin",
            "text": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."
          },
          {
            "id": 10,
            "author": "Steve Jobs",
            "text": "Innovation distinguishes between a leader and a follower."
          },
          {
            "id": 11,
            "author": "Margaret Mead",
            "text": "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
          },
          {
            "id": 12,
            "author": "George Bernard Shaw",
            "text": "Progress is impossible without change, and those who cannot change their minds cannot change anything."
          },
          {
            "id": 13,
            "author": "Martin Luther King Jr.",
            "text": "Change does not roll in on the wheels of inevitability, but comes through continuous struggle."
          },
          {
            "id": 14,
            "author": "Eleanor Roosevelt",
            "text": "You must do the things you think you cannot do."
          },
          {
            "id": 15,
            "author": "Confucius",
            "text": "When we see men of a contrary character, we should turn inwards and examine ourselves."
          },
          {
            "id": 16,
            "author": "Viktor E. Frankl",
            "text": "When we are no longer able to change a situation, we are challenged to change ourselves."
          },
          {
            "id": 17,
            "author": "Malcolm X",
            "text": "The future belongs to those who prepare for it today."
          },
          {
            "id": 18,
            "author": "John C. Maxwell",
            "text": "Change is inevitable. Growth is optional."
          },
          {
            "id": 19,
            "author": "Gloria Steinem",
            "text": "The first problem for all of us, men and women, is not to learn, but to unlearn."
          },
          {
            "id": 20,
            "author": "Mahatma Gandhi",
            "text": "You must be the change you want to see in the world."
          }
        ]
      },      
      {
        "id": 5,
        "name": "Perseverance",
        "image": "https://media.gettyimages.com/id/171532260/photo/state-president-of-south-africa-nelson-mandela-smiles-on-may-22-bonn-germany.jpg?s=612x612&w=0&k=20&c=MVfUPkooJjQuTmOJHwZsK7ZRGAUmwaOrVNMOK8fX8ps=",
        "quotes": [
          {
            "id": 1,
            "author": "Nelson Mandela",
            "text": "It always seems impossible until it's done."
          },
          {
            "id": 2,
            "author": "Confucius",
            "text": "It does not matter how slowly you go as long as you do not stop."
          },
          {
            "id": 3,
            "author": "Thomas Edison",
            "text": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."
          },
          {
            "id": 4,
            "author": "Winston Churchill",
            "text": "If you're going through hell, keep going."
          },
          {
            "id": 5,
            "author": "Vince Lombardi",
            "text": "It's not whether you get knocked down, it's whether you get up."
          },
          {
            "id": 6,
            "author": "Albert Einstein",
            "text": "It's not that I'm so smart, it's just that I stay with problems longer."
          },
          {
            "id": 7,
            "author": "Mahatma Gandhi",
            "text": "First they ignore you, then they laugh at you, then they fight you, then you win."
          },
          {
            "id": 8,
            "author": "Henry Ford",
            "text": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
          },
          {
            "id": 9,
            "author": "A.A. Milne",
            "text": "You are braver than you believe, stronger than you seem, and smarter than you think."
          },
          {
            "id": 10,
            "author": "Theodore Roosevelt",
            "text": "Believe you can and you're halfway there."
          },
          {
            "id": 11,
            "author": "Helen Keller",
            "text": "We can do anything we want to if we stick to it long enough."
          },
          {
            "id": 12,
            "author": "Albert Camus",
            "text": "In the depth of winter, I finally learned that within me there lay an invincible summer."
          },
          {
            "id": 13,
            "author": "Booker T. Washington",
            "text": "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome."
          },
          {
            "id": 14,
            "author": "Henry Wadsworth Longfellow",
            "text": "The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night."
          },
          {
            "id": 15,
            "author": "Maya Angelou",
            "text": "You may encounter many defeats, but you must not be defeated."
          },
          {
            "id": 16,
            "author": "Franklin D. Roosevelt",
            "text": "When you reach the end of your rope, tie a knot in it and hang on."
          },
          {
            "id": 17,
            "author": "Louisa May Alcott",
            "text": "I am not afraid of storms, for I am learning how to sail my ship."
          },
          {
            "id": 18,
            "author": "Thomas Carlyle",
            "text": "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."
          },
          {
            "id": 19,
            "author": "Robert H. Schuller",
            "text": "Tough times never last, but tough people do."
          },
          {
            "id": 20,
            "author": "Harriet Beecher Stowe",
            "text": "When you get into a tight place and everything goes against you, till it seems as though you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn."
          }
        ]
      },
      {
        "id": 6,
        "name": "Motivation",
        "image": "https://hips.hearstapps.com/hmg-prod/images/mark-twain-and-ulysses-s-grant.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "quotes": [
          {
            "id": 1,
            "author": "Mark Twain",
            "text": "The secret of getting ahead is getting started."
          },
          {
            "id": 2,
            "author": "Walt Disney",
            "text": "The way to get started is to quit talking and begin doing."
          },
          {
            "id": 3,
            "author": "Vince Lombardi",
            "text": "The only place success comes before work is in the dictionary."
          },
          {
            "id": 4,
            "author": "Zig Ziglar",
            "text": "People often say that motivation doesn't last. Well, neither does bathing—that's why we recommend it daily."
          },
          {
            "id": 5,
            "author": "Napoleon Hill",
            "text": "Whatever the mind of man can conceive and believe, it can achieve."
          },
          {
            "id": 6,
            "author": "Tony Robbins",
            "text": "The only limit to your impact is your imagination and commitment."
          },
          {
            "id": 7,
            "author": "Jim Rohn",
            "text": "Either you run the day or the day runs you."
          },
          {
            "id": 8,
            "author": "Les Brown",
            "text": "Shoot for the moon. Even if you miss, you'll land among the stars."
          },
          {
            "id": 9,
            "author": "Henry Ford",
            "text": "Whether you think you can or you think you can't, you're right."
          },
          {
            "id": 10,
            "author": "Dale Carnegie",
            "text": "People rarely succeed unless they have fun in what they are doing."
          },
          {
            "id": 11,
            "author": "Robert Frost",
            "text": "The best way out is always through."
          },
          {
            "id": 12,
            "author": "Wayne Gretzky",
            "text": "You miss 100% of the shots you don't take."
          },
          {
            "id": 13,
            "author": "Eleanor Roosevelt",
            "text": "With the new day comes new strength and new thoughts."
          },
          {
            "id": 14,
            "author": "Martin Luther King Jr.",
            "text": "If you can't fly, then run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward."
          },
          {
            "id": 15,
            "author": "Oprah Winfrey",
            "text": "The more you praise and celebrate your life, the more there is in life to celebrate."
          },
          {
            "id": 16,
            "author": "Ayn Rand",
            "text": "The question isn't who is going to let me; it's who is going to stop me."
          },
          {
            "id": 17,
            "author": "Will Rogers",
            "text": "Even if you are on the right track, you’ll get run over if you just sit there."
          },
          {
            "id": 18,
            "author": "Michael Jordan",
            "text": "I've failed over and over and over again in my life and that is why I succeed."
          },
          {
            "id": 19,
            "author": "Helen Keller",
            "text": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."
          },
          {
            "id": 20,
            "author": "George S. Patton",
            "text": "Success is how high you bounce when you hit bottom."
          }
        ]
      },
      {
        "id": 7,
        "name": "Philosophy",
        "image": "https://hips.hearstapps.com/hmg-prod/images/william-shakespeare-194895-1-402.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "quotes": [
          {
            "id": 1,
            "author": "William Shakespeare",
            "text": "To be, or not to be, that is the question."
          },
          {
            "id": 2,
            "author": "Plato",
            "text": "The unexamined life is not worth living."
          },
          {
            "id": 3,
            "author": "Socrates",
            "text": "Know thyself."
          },
          {
            "id": 4,
            "author": "Aristotle",
            "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it."
          },
          {
            "id": 5,
            "author": "René Descartes",
            "text": "I think, therefore I am."
          },
          {
            "id": 6,
            "author": "Immanuel Kant",
            "text": "Science is organized knowledge. Wisdom is organized life."
          },
          {
            "id": 7,
            "author": "Friedrich Nietzsche",
            "text": "He who has a why to live can bear almost any how."
          },
          {
            "id": 8,
            "author": "Jean-Paul Sartre",
            "text": "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does."
          },
          {
            "id": 9,
            "author": "Marcus Aurelius",
            "text": "The happiness of your life depends upon the quality of your thoughts."
          },
          {
            "id": 10,
            "author": "Epictetus",
            "text": "It's not what happens to you, but how you react to it that matters."
          },
          {
            "id": 11,
            "author": "Albert Camus",
            "text": "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
          },
          {
            "id": 12,
            "author": "Simone de Beauvoir",
            "text": "One is not born, but rather becomes, a woman."
          },
          {
            "id": 13,
            "author": "Lao Tzu",
            "text": "The journey of a thousand miles begins with one step."
          },
          {
            "id": 14,
            "author": "Arthur Schopenhauer",
            "text": "Talent hits a target no one else can hit; Genius hits a target no one else can see."
          },
          {
            "id": 15,
            "author": "Ralph Waldo Emerson",
            "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
          },
          {
            "id": 16,
            "author": "John Stuart Mill",
            "text": "One person with a belief is equal to ninety-nine who have only interests."
          },
          {
            "id": 17,
            "author": "Bertrand Russell",
            "text": "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts."
          },
          {
            "id": 18,
            "author": "Baruch Spinoza",
            "text": "The highest activity a human being can attain is learning for understanding, because to understand is to be free."
          },
          {
            "id": 19,
            "author": "Seneca",
            "text": "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."
          },
          {
            "id": 20,
            "author": "Michel de Montaigne",
            "text": "He who fears he shall suffer, already suffers what he fears."
          }
        ]
      },
      {
        "id": 8,
        "name": "Art",
        "image": "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg?w=1000",
        "quotes": [
          {
            "id": 1,
            "author": "Leonardo da Vinci",
            "text": "Simplicity is the ultimate sophistication."
          },
          {
            "id": 2,
            "author": "Pablo Picasso",
            "text": "Every child is an artist. The problem is how to remain an artist once we grow up."
          },
          {
            "id": 3,
            "author": "Vincent Van Gogh",
            "text": "I dream my painting and I paint my dream."
          },
          {
            "id": 4,
            "author": "Edgar Degas",
            "text": "Art is not what you see, but what you make others see."
          },
          {
            "id": 5,
            "author": "Claude Monet",
            "text": "Everyone discusses my art and pretends to understand, as if it were necessary to understand, when it is simply necessary to love."
          },
          {
            "id": 6,
            "author": "Pablo Picasso",
            "text": "Art washes away from the soul the dust of everyday life."
          },
          {
            "id": 7,
            "author": "Georgia O'Keeffe",
            "text": "I found I could say things with color and shapes that I couldn't say any other way—things I had no words for."
          },
          {
            "id": 8,
            "author": "Michelangelo",
            "text": "Every block of stone has a statue inside it and it is the task of the sculptor to discover it."
          },
          {
            "id": 9,
            "author": "Henri Matisse",
            "text": "Creativity takes courage."
          },
          {
            "id": 10,
            "author": "Oscar Wilde",
            "text": "Life imitates art far more than art imitates life."
          },
          {
            "id": 11,
            "author": "Gustav Klimt",
            "text": "Art is a line around your thoughts."
          },
          {
            "id": 12,
            "author": "Salvador Dalí",
            "text": "A true artist is not one who is inspired, but one who inspires others."
          },
          {
            "id": 13,
            "author": "Johann Wolfgang von Goethe",
            "text": "A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul."
          },
          {
            "id": 14,
            "author": "Frida Kahlo",
            "text": "I paint flowers so they will not die."
          },
          {
            "id": 15,
            "author": "Vincent Van Gogh",
            "text": "The only time I feel alive is when I'm painting."
          },
          {
            "id": 16,
            "author": "Auguste Rodin",
            "text": "The artist must create a spark before he can make a fire and before art is born, the artist must be ready to be consumed by the fire of his own creation."
          },
          {
            "id": 17,
            "author": "Paul Gauguin",
            "text": "Art is either plagiarism or revolution."
          },
          {
            "id": 18,
            "author": "Leonardo da Vinci",
            "text": "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen."
          },
          {
            "id": 19,
            "author": "Marcel Duchamp",
            "text": "Art is not about itself but the attention we bring to it."
          },
          {
            "id": 20,
            "author": "Andy Warhol",
            "text": "Art is what you can get away with."
          }
        ]
      },
      {
        "id": 9,
        "name": "Wisdom",
        "image": "https://media.gettyimages.com/id/1204441047/photo/plato-greek-philosopher-student-of-socrates-founder-of-the-academy-watercolor.jpg?s=612x612&w=0&k=20&c=rv51GCukK54jNory-KnJI10x8sC-xtkGeyXmbcD-ACs=",
        "quotes": [
          {
            "id": 1,
            "author": "Plato",
            "text": "The greatest wealth is to live content with little."
          },
          {
            "id": 2,
            "author": "Plato",
            "text": "Wise men speak because they have something to say; fools because they have to say something."
          },
          {
            "id": 3,
            "author": "Confucius",
            "text": "Real knowledge is to know the extent of one's ignorance."
          },
          {
            "id": 4,
            "author": "Socrates",
            "text": "The only true wisdom is in knowing you know nothing."
          },
          {
            "id": 5,
            "author": "Lao Tzu",
            "text": "He who knows others is wise; he who knows himself is enlightened."
          },
          {
            "id": 6,
            "author": "Aristotle",
            "text": "Knowing yourself is the beginning of all wisdom."
          },
          {
            "id": 7,
            "author": "Albert Einstein",
            "text": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."
          },
          {
            "id": 8,
            "author": "Buddha",
            "text": "The mind is everything. What you think you become."
          },
          {
            "id": 9,
            "author": "Rumi",
            "text": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself."
          },
          {
            "id": 10,
            "author": "Seneca",
            "text": "It is not the man who has too little, but the man who craves more, that is poor."
          },
          {
            "id": 11,
            "author": "Khalil Gibran",
            "text": "Wisdom ceases to be wisdom when it becomes too proud to weep, too grave to laugh, and too selfish to seek other than itself."
          },
          {
            "id": 12,
            "author": "Benjamin Franklin",
            "text": "Early to bed and early to rise makes a man healthy, wealthy, and wise."
          },
          {
            "id": 13,
            "author": "Socrates",
            "text": "Be as you wish to seem."
          },
          {
            "id": 14,
            "author": "Albert Camus",
            "text": "In the depth of winter, I finally learned that within me there lay an invincible summer."
          },
          {
            "id": 15,
            "author": "Confucius",
            "text": "When we see men of a contrary character, we should turn inwards and examine ourselves."
          },
          {
            "id": 16,
            "author": "H. Jackson Brown Jr.",
            "text": "The best preparation for tomorrow is doing your best today."
          },
          {
            "id": 17,
            "author": "King Solomon",
            "text": "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding."
          },
          {
            "id": 18,
            "author": "Voltaire",
            "text": "The more I read, the more I acquire, the more certain I am that I know nothing."
          },
          {
            "id": 19,
            "author": "Confucius",
            "text": "When you see a good person, think of becoming like her/him. When you see someone not so good, reflect on your own weak points."
          },
          {
            "id": 20,
            "author": "Albert Einstein",
            "text": "The difference between stupidity and genius is that genius has its limits."
          }
        ]
      },
      {
        "id": 10,
        "name": "Self",
        "image": "https://media.istockphoto.com/id/1217329642/photo/aristotle-on-black.jpg?s=612x612&w=0&k=20&c=es3XbbTHduvXFfqCQ9HjF73eQMxB541J0vcqKL7NgH8=",
        "quotes": [
          {
            "id": 1,
            "author": "Aristotle",
            "text": "Knowing yourself is the beginning of all wisdom."
          },
          {
            "id": 2,
            "author": "Ralph Waldo Emerson",
            "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
          },
          {
            "id": 3,
            "author": "Socrates",
            "text": "He who knows himself is wise."
          },
          {
            "id": 4,
            "author": "Oscar Wilde",
            "text": "Be yourself; everyone else is already taken."
          },
          {
            "id": 5,
            "author": "Carl Jung",
            "text": "The privilege of a lifetime is to become who you truly are."
          },
          {
            "id": 6,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 7,
            "author": "Lao Tzu",
            "text": "When I let go of what I am, I become what I might be."
          },
          {
            "id": 8,
            "author": "Rumi",
            "text": "Do not be satisfied with the stories that come before you. Unfold your own myth."
          },
          {
            "id": 9,
            "author": "Buddha",
            "text": "You yourself, as much as anybody in the entire universe, deserve your love and affection."
          },
          {
            "id": 10,
            "author": "Steve Jobs",
            "text": "Your time is limited, don't waste it living someone else's life."
          },
          {
            "id": 11,
            "author": "Nelson Mandela",
            "text": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
          },
          {
            "id": 12,
            "author": "Albert Einstein",
            "text": "A person who never made a mistake never tried anything new."
          },
          {
            "id": 13,
            "author": "James Baldwin",
            "text": "You have to decide who you are and force the world to deal with you, not with its idea of you."
          },
          {
            "id": 14,
            "author": "Maya Angelou",
            "text": "You may not control all the events that happen to you, but you can decide not to be reduced by them."
          },
          {
            "id": 15,
            "author": "Viktor E. Frankl",
            "text": "When we are no longer able to change a situation, we are challenged to change ourselves."
          },
          {
            "id": 16,
            "author": "Helen Keller",
            "text": "What I am looking for is not out there, it is in me."
          },
          {
            "id": 17,
            "author": "Friedrich Nietzsche",
            "text": "Become who you are!"
          },
          {
            "id": 18,
            "author": "Confucius",
            "text": "The man who moves a mountain begins by carrying away small stones."
          },
          {
            "id": 19,
            "author": "Henry David Thoreau",
            "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
          },
          {
            "id": 20,
            "author": "Epictetus",
            "text": "First say to yourself what you would be; and then do what you have to do."
          }
        ]
      /* trunk-ignore(git-diff-check/error) */
      },     
      {
        "id": 11,
        "name": "Adventure",
        "image": "https://hips.hearstapps.com/hmg-prod/images/ralph-waldo-emerson-9287153-1-402.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "quotes": [
          {
            "id": 1,
            "author": "Ralph Waldo Emerson",
            "text": "Do not go where the path may lead, go instead where there is no path and leave a trail."
          },
          {
            "id": 2,
            "author": "Helen Keller",
            "text": "Life is either a daring adventure or nothing at all."
          },
          {
            "id": 3,
            "author": "Mark Twain",
            "text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
          },
          {
            "id": 4,
            "author": "Amelia Earhart",
            "text": "Adventure is worthwhile in itself."
          },
          {
            "id": 5,
            "author": "J.R.R. Tolkien",
            "text": "Not all those who wander are lost."
          },
          {
            "id": 6,
            "author": "Antoine de Saint-Exupéry",
            "text": "The time for action is now. It's never too late to do something."
          },
          {
            "id": 7,
            "author": "Robert Louis Stevenson",
            "text": "To travel hopefully is a better thing than to arrive."
          },
          {
            "id": 8,
            "author": "Jack London",
            "text": "The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time."
          },
          {
            "id": 9,
            "author": "T.S. Eliot",
            "text": "Only those who will risk going too far can possibly find out how far one can go."
          },
          {
            "id": 10,
            "author": "Andre Gide",
            "text": "Man cannot discover new oceans unless he has the courage to lose sight of the shore."
          },
          {
            "id": 11,
            "author": "Christopher McCandless",
            "text": "The joy of life comes from our encounters with new experiences."
          },
          {
            "id": 12,
            "author": "Henry David Thoreau",
            "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
          },
          {
            "id": 13,
            "author": "Lewis Carroll",
            "text": "In the end, we only regret the chances we didn’t take."
          },
          {
            "id": 14,
            "author": "Yvon Chouinard",
            "text": "It’s not an adventure until something goes wrong."
          },
          {
            "id": 15,
            "author": "Joseph Campbell",
            "text": "The cave you fear to enter holds the treasure you seek."
          },
          {
            "id": 16,
            "author": "Rumi",
            "text": "Run from what’s comfortable. Forget safety. Live where you fear to live."
          },
          {
            "id": 17,
            "author": "Freya Stark",
            "text": "To awaken quite alone in a strange town is one of the pleasantest sensations in the world."
          },
          {
            "id": 18,
            "author": "Charles Lindbergh",
            "text": "Life without risks is not worth living."
          },
          {
            "id": 19,
            "author": "Aesop",
            "text": "Adventure is a path. Real adventure—self-determined, self-motivated, often risky—forces you to have firsthand encounters with the world."
          },
          {
            "id": 20,
            "author": "John Muir",
            "text": "The mountains are calling and I must go."
          }
        ]
      },
      {
        "id": 12,
        "name": "Innovation",
        "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-615312634.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "quotes": [
          {
            "id": 1,
            "author": "Thomas Edison",
            "text": "I have not failed. I've just found 10,000 ways that won't work."
          },
          {
            "id": 2,
            "author": "Albert Einstein",
            "text": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
          },
          {
            "id": 3,
            "author": "Steve Jobs",
            "text": "Innovation distinguishes between a leader and a follower."
          },
          {
            "id": 4,
            "author": "Elon Musk",
            "text": "The first step is to establish that something is possible; then probability will occur."
          },
          {
            "id": 5,
            "author": "Bill Gates",
            "text": "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself."
          },
          {
            "id": 6,
            "author": "Mark Zuckerberg",
            "text": "The biggest risk is not taking any risk."
          },
          {
            "id": 7,
            "author": "Nikola Tesla",
            "text": "The present is theirs; the future, for which I really worked, is mine."
          },
          {
            "id": 8,
            "author": "Jeff Bezos",
            "text": "If you double the number of experiments you do per year, you’re going to double your inventiveness."
          },
          {
            "id": 9,
            "author": "Larry Page",
            "text": "You don’t need to have a 100-person company to develop that idea."
          },
          {
            "id": 10,
            "author": "Henry Ford",
            "text": "If I had asked people what they wanted, they would have said faster horses."
          },
          {
            "id": 11,
            "author": "Arthur C. Clarke",
            "text": "The only way of discovering the limits of the possible is to venture a little way past them into the impossible."
          },
          {
            "id": 12,
            "author": "Walt Disney",
            "text": "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths."
          },
          {
            "id": 13,
            "author": "Charles Kettering",
            "text": "Believe and act as if it were impossible to fail."
          },
          {
            "id": 14,
            "author": "Steve Jobs",
            "text": "The people who are crazy enough to think they can change the world are the ones who do."
          },
          {
            "id": 15,
            "author": "Albert Einstein",
            "text": "If you can’t explain it to a six-year-old, you don’t understand it yourself."
          },
          {
            "id": 16,
            "author": "J.K. Rowling",
            "text": "It is our choices that show what we truly are, far more than our abilities."
          },
          {
            "id": 17,
            "author": "Sheryl Sandberg",
            "text": "What would you do if you weren’t afraid?"
          },
          {
            "id": 18,
            "author": "Reed Hastings",
            "text": "Don’t focus on the competition, they’ll never give you money."
          },
          {
            "id": 19,
            "author": "Albert Einstein",
            "text": "The measure of intelligence is the ability to change."
          },
          {
            "id": 20,
            "author": "Peter Drucker",
            "text": "The best way to predict the future is to create it."
          }
        ]
      },
      {
        "id": 13,
        "name": "Vision",
        "image": "https://media.gettyimages.com/id/515219692/photo/american-writer-and-educator-helen-keller.jpg?s=612x612&w=0&k=20&c=q2Mvt4eg0EWI0o7KurBK8QOc2c8BKKOpjlhM4-DD83g=",
        "quotes": [
          {
            "id": 1,
            "author": "Helen Keller",
            "text": "The only thing worse than being blind is having sight but no vision."
          },
          {
            "id": 2,
            "author": "Steve Jobs",
            "text": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
          },
          {
            "id": 3,
            "author": "Albert Einstein",
            "text": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
          },
          {
            "id": 4,
            "author": "Ralph Waldo Emerson",
            "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
          },
          {
            "id": 5,
            "author": "Walt Disney",
            "text": "All our dreams can come true, if we have the courage to pursue them."
          },
          {
            "id": 6,
            "author": "Mahatma Gandhi",
            "text": "Live as if you were to die tomorrow. Learn as if you were to live forever."
          },
          {
            "id": 7,
            "author": "Nelson Mandela",
            "text": "It always seems impossible until it's done."
          },
          {
            "id": 8,
            "author": "Martin Luther King Jr.",
            "text": "I have a dream that one day this nation will rise up and live out the true meaning of its creed."
          },
          {
            "id": 9,
            "author": "Eleanor Roosevelt",
            "text": "The future belongs to those who believe in the beauty of their dreams."
          },
          {
            "id": 10,
            "author": "Pablo Picasso",
            "text": "Everything you can imagine is real."
          },
          {
            "id": 11,
            "author": "Oprah Winfrey",
            "text": "Create the highest, grandest vision possible for your life, because you become what you believe."
          },
          {
            "id": 12,
            "author": "Antoine de Saint-Exupéry",
            "text": "A goal without a plan is just a wish."
          },
          {
            "id": 13,
            "author": "Henry David Thoreau",
            "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
          },
          {
            "id": 14,
            "author": "Richard Branson",
            "text": "If your dreams don’t scare you, they are too small."
          },
          {
            "id": 15,
            "author": "Michael Jordan",
            "text": "You must expect great things of yourself before you can do them."
          },
          {
            "id": 16,
            "author": "Frank Lloyd Wright",
            "text": "The thing always happens that you really believe in; and the belief in a thing makes it happen."
          },
          {
            "id": 17,
            "author": "Lewis Carroll",
            "text": "In the end, we only regret the chances we didn’t take."
          },
          {
            "id": 18,
            "author": "Peter Drucker",
            "text": "The best way to predict the future is to create it."
          },
          {
            "id": 19,
            "author": "Yoda",
            "text": "Do or do not. There is no try."
          },
          {
            "id": 20,
            "author": "Napoleon Hill",
            "text": "Whatever the mind of man can conceive and believe, it can achieve."
          }
        ]
      },
      {
        "id": 14,
        "name": "Curiosity",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Walt_Disney_Snow_white_1937_trailer_screenshot_(13).jpg",
        "quotes": [
          {
            "id": 1,
            "author": "Marie Curie",
            "text": "Be less curious about people and more curious about ideas."
          },
          {
            "id": 2,
            "author": "Albert Einstein",
            "text": "I have no special talents. I am only passionately curious."
          },
          {
            "id": 3,
            "author": "Walt Disney",
            "text": "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths."
          },
          {
            "id": 4,
            "author": "Eleanor Roosevelt",
            "text": "The future belongs to those who believe in the beauty of their dreams."
          },
          {
            "id": 5,
            "author": "Stephen Hawking",
            "text": "Remember to look up at the stars and not down at your feet. Be curious."
          },
          {
            "id": 6,
            "author": "Richard Feynman",
            "text": "I would rather have questions that can't be answered than answers that can't be questioned."
          },
          {
            "id": 7,
            "author": "Isaac Newton",
            "text": "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore."
          },
          {
            "id": 8,
            "author": "Leonardo da Vinci",
            "text": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
          },
          {
            "id": 9,
            "author": "Albert Einstein",
            "text": "The important thing is not to stop questioning. Curiosity has its own reason for existing."
          },
          {
            "id": 10,
            "author": "Neil deGrasse Tyson",
            "text": "Curious that we spend more time congratulating people who have succeeded than encouraging people who have not."
          },
          {
            "id": 11,
            "author": "Carl Sagan",
            "text": "Somewhere, something incredible is waiting to be known."
          },
          {
            "id": 12,
            "author": "Richard Feynman",
            "text": "The pleasure of finding things out is the greatest pleasure."
          },
          {
            "id": 13,
            "author": "Socrates",
            "text": "The only true wisdom is in knowing you know nothing."
          },
          {
            "id": 14,
            "author": "Mahatma Gandhi",
            "text": "Live as if you were to die tomorrow. Learn as if you were to live forever."
          },
          {
            "id": 15,
            "author": "Jane Goodall",
            "text": "What you do makes a difference, and you have to decide what kind of difference you want to make."
          },
          {
            "id": 16,
            "author": "Confucius",
            "text": "Real knowledge is to know the extent of one's ignorance."
          },
          {
            "id": 17,
            "author": "Plato",
            "text": "The greatest wealth is to live content with little."
          },
          {
            "id": 18,
            "author": "T.S. Eliot",
            "text": "Only those who will risk going too far can possibly find out how far one can go."
          },
          {
            "id": 19,
            "author": "Aristotle",
            "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it."
          },
          {
            "id": 20,
            "author": "Yoda",
            "text": "Much to learn, you still have."
          }
        ]
      },
      {
        "id": 15,
        "name": "Service",
        "image": "https://m.media-amazon.com/images/M/MV5BMWUyZTExODYtMTNmNi00OTFmLTkwZjQtYmI2MjViNTI0ZjQwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@.jpg",
        "quotes": [
          {
            "id": 1,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 2,
            "author": "Martin Luther King Jr.",
            "text": "Life's most persistent and urgent question is, 'What are you doing for others?'"
          },
          {
            "id": 3,
            "author": "Mother Teresa",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 4,
            "author": "Albert Schweitzer",
            "text": "The purpose of human life is to serve, and to show compassion and the will to help others."
          },
          {
            "id": 5,
            "author": "Dalai Lama",
            "text": "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them."
          },
          {
            "id": 6,
            "author": "Albert Einstein",
            "text": "Only a life lived for others is a life worthwhile."
          },
          {
            "id": 7,
            "author": "Helen Keller",
            "text": "Alone we can do so little; together we can do so much."
          },
          {
            "id": 8,
            "author": "John F. Kennedy",
            "text": "Ask not what your country can do for you; ask what you can do for your country."
          },
          {
            "id": 9,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 10,
            "author": "Albert Einstein",
            "text": "Strive not to be a success, but rather to be of value."
          },
          {
            "id": 11,
            "author": "Princess Diana",
            "text": "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you."
          },
          {
            "id": 12,
            "author": "Mahatma Gandhi",
            "text": "The best way to find yourself is to lose yourself in the service of others."
          },
          {
            "id": 13,
            "author": "Winston Churchill",
            "text": "We make a living by what we get. We make a life by what we give."
          },
          {
            "id": 14,
            "author": "Helen Keller",
            "text": "Life is an exciting business, and most exciting when it is lived for others."
          },
          {
            "id": 15,
            "author": "Booker T. Washington",
            "text": "Those who are happiest are those who do the most for others."
          },
          {
            "id": 16,
            "author": "Mother Teresa",
            "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier."
          },
          {
            "id": 17,
            "author": "Maya Angelou",
            "text": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
          },
          {
            "id": 18,
            "author": "Anne Frank",
            "text": "No one has ever become poor by giving."
          },
          {
            "id": 19,
            "author": "John Wesley",
            "text": "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can."
          },
          {
            "id": 20,
            "author": "Dalai Lama",
            "text": "If you want others to be happy, practice compassion. If you want to be happy, practice compassion."
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

    const { id } = event.context.params

    const quote = data.find(dataId => dataId.id === parseInt(id, 10));

  if (quote) {
    return {
      status: 200,
      data: quote,
    }
  } else {
    return {
      status: 404,
      data: { message: 'Quote Id not found' }
    }
  }
 });