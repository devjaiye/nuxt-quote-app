import {defineEventHandler} from 'h3'

export default defineEventHandler(async (event)=>{
    const data = [
    {
      "id": 1,
      "author": "Albert Einstein",
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "category": "Life",
      "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOVMs0eukDlt0ASfgVxLcM-nWCAxWiV3c4kzjT2UVBBbWD6p0b"
    },
    {
      "id": 2,
      "author": "Isaac Newton",
      "quote": "If I have seen further it is by standing on the shoulders of Giants.",
      "category": "Knowledge",
      "image": "https://www.sciencekids.co.nz/images/pictures/scientists/isaacnewton.jpg"
    },
    {
      "id": 3,
      "author": "Marie Curie",
      "quote": "Nothing in life is to be feared; it is only to be understood.",
      "category": "Science",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 4,
      "author": "Mahatma Gandhi",
      "quote": "Be the change that you wish to see in the world.",
      "category": "Change",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 5,
      "author": "Nelson Mandela",
      "quote": "It always seems impossible until it's done.",
      "category": "Perseverance",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 6,
      "author": "Mark Twain",
      "quote": "The secret of getting ahead is getting started.",
      "category": "Motivation",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 7,
      "author": "William Shakespeare",
      "quote": "To be, or not to be, that is the question.",
      "category": "Philosophy",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 8,
      "author": "Leonardo da Vinci",
      "quote": "Simplicity is the ultimate sophistication.",
      "category": "Art",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 9,
      "author": "Plato",
      "quote": "The greatest wealth is to live content with little.",
      "category": "Wisdom",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 10,
      "author": "Aristotle",
      "quote": "Knowing yourself is the beginning of all wisdom.",
      "category": "Self",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 11,
      "author": "Confucius",
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "category": "Perseverance",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 12,
      "author": "Ralph Waldo Emerson",
      "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      "category": "Adventure",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 13,
      "author": "Thomas Edison",
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "category": "Innovation",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 14,
      "author": "Helen Keller",
      "quote": "The only thing worse than being blind is having sight but no vision.",
      "category": "Vision",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 15,
      "author": "Albert Einstein",
      "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "category": "Imagination",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 16,
      "author": "Isaac Newton",
      "quote": "What we know is a drop, what we don't know is an ocean.",
      "category": "Knowledge",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 17,
      "author": "Marie Curie",
      "quote": "Be less curious about people and more curious about ideas.",
      "category": "Curiosity",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 18,
      "author": "Mahatma Gandhi",
      "quote": "The best way to find yourself is to lose yourself in the service of others.",
      "category": "Service",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 19,
      "author": "Nelson Mandela",
      "quote": "Education is the most powerful weapon which you can use to change the world.",
      "category": "Education",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 20,
      "author": "Mark Twain",
      "quote": "The best way to cheer yourself is to try to cheer someone else up.",
      "category": "Kindness",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 21,
      "author": "William Shakespeare",
      "quote": "All the world's a stage, and all the men and women merely players.",
      "category": "Life",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 22,
      "author": "Leonardo da Vinci",
      "quote": "Learning never exhausts the mind.",
      "category": "Learning",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 23,
      "author": "Plato",
      "quote": "Wise men speak because they have something to say; fools because they have to say something.",
      "category": "Wisdom",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 24,
      "author": "Aristotle",
      "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
      "category": "Education",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 25,
      "author": "Confucius",
      "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
      "category": "Resilience",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 26,
      "author": "Ralph Waldo Emerson",
      "quote": "The only way to have a friend is to be one.",
      "category": "Friendship",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 27,
      "author": "Thomas Edison",
      "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      "category": "Opportunity",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 28,
      "author": "Helen Keller",
      "quote": "Keep your face to the sunshine and you cannot see a shadow.",
      "category": "Positivity",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 29,
      "author": "Albert Einstein",
      "quote": "Try not to become a man of success, but rather try to become a man of value.",
      "category": "Success",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 30,
      "author": "Isaac Newton",
      "quote": "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion.",
      "category": "Science",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 31,
      "author": "Marie Curie",
      "quote": "I was taught that the way of progress is neither swift nor easy.",
      "category": "Progress",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 32,
      "author": "Mahatma Gandhi",
      "quote": "An eye for an eye only ends up making the whole world blind.",
      "category": "Peace",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 33,
      "author": "Nelson Mandela",
      "quote": "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
      "category": "Passion",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 34,
      "author": "Mark Twain",
      "quote": "Courage is resistance to fear, mastery of fear - not absence of fear.",
      "category": "Courage",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 35,
      "author": "William Shakespeare",
      "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "category": "Wisdom",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 36,
      "author": "Leonardo da Vinci",
      "quote": "Art is never finished, only abandoned.",
      "category": "Art",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 37,
      "author": "Plato",
      "quote": "Courage is knowing what not to fear.",
      "category": "Courage",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 38,
      "author": "Aristotle",
      "quote": "Happiness depends upon ourselves.",
      "category": "Happiness",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 39,
      "author": "Confucius",
      "quote": "Real knowledge is to know the extent of one's ignorance.",
      "category": "Knowledge",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 40,
      "author": "Ralph Waldo Emerson",
      "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "category": "Self",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 41,
      "author": "Thomas Edison",
      "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "category": "Inspiration",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 42,
      "author": "Helen Keller",
      "quote": "Alone we can do so little; together we can do so much.",
      "category": "Teamwork",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 43,
      "author": "Albert Einstein",
      "quote": "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      "category": "Curiosity",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 44,
      "author": "Isaac Newton",
      "quote": "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",
      "category": "Truth",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 45,
      "author": "Marie Curie",
      "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      "category": "Belief",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 46,
      "author": "Mahatma Gandhi",
      "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
      "category": "Forgiveness",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 47,
      "author": "Nelson Mandela",
      "quote": "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
      "category": "Resilience",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 48,
      "author": "Mark Twain",
      "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
      "category": "Individuality",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 49,
      "author": "William Shakespeare",
      "quote": "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
      "category": "Greatness",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 50,
      "author": "Leonardo da Vinci",
      "quote": "Learning never exhausts the mind.",
      "category": "Learning",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 51,
      "author": "Plato",
      "quote": "Human behavior flows from three main sources: desire, emotion, and knowledge.",
      "category": "Philosophy",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 52,
      "author": "Aristotle",
      "quote": "The roots of education are bitter, but the fruit is sweet.",
      "category": "Education",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 53,
      "author": "Confucius",
      "quote": "Choose a job you love, and you will never have to work a day in your life.",
      "category": "Work",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 54,
      "author": "Ralph Waldo Emerson",
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "category": "Self",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 55,
      "author": "Thomas Edison",
      "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      "category": "Perseverance",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 56,
      "author": "Helen Keller",
      "quote": "The only thing worse than being blind is having sight but no vision.",
      "category": "Vision",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 57,
      "author": "Albert Einstein",
      "quote": "In the middle of difficulty lies opportunity.",
      "category": "Opportunity",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 58,
      "author": "Isaac Newton",
      "quote": "If I have done the public any service, it is due to my patient thought.",
      "category": "Patience",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 59,
      "author": "Marie Curie",
      "quote": "One never notices what has been done; one can only see what remains to be done.",
      "category": "Progress",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 60,
      "author": "Mahatma Gandhi",
      "quote": "In a gentle way, you can shake the world.",
      "category": "Peace",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 61,
      "author": "Nelson Mandela",
      "quote": "A winner is a dreamer who never gives up.",
      "category": "Success",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 62,
      "author": "Mark Twain",
      "quote": "Kindness is the language which the deaf can hear and the blind can see.",
      "category": "Kindness",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 63,
      "author": "William Shakespeare",
      "quote": "All that glitters is not gold.",
      "category": "Wisdom",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 64,
      "author": "Leonardo da Vinci",
      "quote": "He who loves practice without theory is like the sailor who boards ship without a rudder and compass and never knows where he may cast.",
      "category": "Knowledge",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 65,
      "author": "Plato",
      "quote": "At the touch of love everyone becomes a poet.",
      "category": "Love",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 66,
      "author": "Aristotle",
      "quote": "The energy of the mind is the essence of life.",
      "category": "Life",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 67,
      "author": "Confucius",
      "quote": "When we see men of a contrary character, we should turn inwards and examine ourselves.",
      "category": "Self",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 68,
      "author": "Ralph Waldo Emerson",
      "quote": "What you do speaks so loudly that I cannot hear what you say.",
      "category": "Integrity",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 69,
      "author": "Thomas Edison",
      "quote": "There is no substitute for hard work.",
      "category": "Work",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 70,
      "author": "Helen Keller",
      "quote": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      "category": "Optimism",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 71,
      "author": "Albert Einstein",
      "quote": "The true sign of intelligence is not knowledge but imagination.",
      "category": "Imagination",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 72,
      "author": "Isaac Newton",
      "quote": "No great discovery was ever made without a bold guess.",
      "category": "Discovery",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 73,
      "author": "Marie Curie",
      "quote": "I am among those who think that science has great beauty.",
      "category": "Science",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 74,
      "author": "Mahatma Gandhi",
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "category": "Learning",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 75,
      "author": "Nelson Mandela",
      "quote": "It always seems impossible until it is done.",
      "category": "Perseverance",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 76,
      "author": "Mark Twain",
      "quote": "The secret of getting ahead is getting started.",
      "category": "Motivation",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 77,
      "author": "William Shakespeare",
      "quote": "To be, or not to be, that is the question.",
      "category": "Philosophy",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 78,
      "author": "Leonardo da Vinci",
      "quote": "Simplicity is the ultimate sophistication.",
      "category": "Art",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 79,
      "author": "Plato",
      "quote": "The greatest wealth is to live content with little.",
      "category": "Wisdom",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 80,
      "author": "Aristotle",
      "quote": "Knowing yourself is the beginning of all wisdom.",
      "category": "Self",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 81,
      "author": "Confucius",
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "category": "Perseverance",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 82,
      "author": "Ralph Waldo Emerson",
      "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      "category": "Adventure",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 83,
      "author": "Thomas Edison",
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "category": "Innovation",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 84,
      "author": "Helen Keller",
      "quote": "The only thing worse than being blind is having sight but no vision.",
      "category": "Vision",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 85,
      "author": "Albert Einstein",
      "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "category": "Imagination",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 86,
      "author": "Isaac Newton",
      "quote": "What we know is a drop, what we don't know is an ocean.",
      "category": "Knowledge",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 87,
      "author": "Marie Curie",
      "quote": "Be less curious about people and more curious about ideas.",
      "category": "Curiosity",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 88,
      "author": "Mahatma Gandhi",
      "quote": "The best way to find yourself is to lose yourself in the service of others.",
      "category": "Service",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 89,
      "author": "Nelson Mandela",
      "quote": "Education is the most powerful weapon which you can use to change the world.",
      "category": "Education",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 90,
      "author": "Mark Twain",
      "quote": "The best way to cheer yourself is to try to cheer someone else up.",
      "category": "Kindness",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 91,
      "author": "William Shakespeare",
      "quote": "All the world's a stage, and all the men and women merely players.",
      "category": "Life",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 92,
      "author": "Leonardo da Vinci",
      "quote": "Learning never exhausts the mind.",
      "category": "Learning",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 93,
      "author": "Plato",
      "quote": "Wise men speak because they have something to say; fools because they have to say something.",
      "category": "Wisdom",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 94,
      "author": "Aristotle",
      "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
      "category": "Education",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 95,
      "author": "Confucius",
      "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
      "category": "Resilience",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 96,
      "author": "Ralph Waldo Emerson",
      "quote": "The only way to have a friend is to be one.",
      "category": "Friendship",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 97,
      "author": "Thomas Edison",
      "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      "category": "Opportunity",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 98,
      "author": "Helen Keller",
      "quote": "Keep your face to the sunshine and you cannot see a shadow.",
      "category": "Positivity",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 99,
      "author": "Albert Einstein",
      "quote": "Try not to become a man of success, but rather try to become a man of value.",
      "category": "Success",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 100,
      "author": "Isaac Newton",
      "quote": "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion.",
      "category": "Science",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 101,
      "author": "Marie Curie",
      "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      "category": "Fear",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 102,
      "author": "Mahatma Gandhi",
      "quote": "The future depends on what you do today.",
      "category": "Future",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 103,
      "author": "Nelson Mandela",
      "quote": "It is said that no one truly knows a nation until one has been inside its jails.",
      "category": "Justice",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 104,
      "author": "Mark Twain",
      "quote": "The two most important days in your life are the day you are born and the day you find out why.",
      "category": "Life",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 105,
      "author": "William Shakespeare",
      "quote": "Love all, trust a few, do wrong to none.",
      "category": "Love",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 106,
      "author": "Leonardo da Vinci",
      "quote": "The noblest pleasure is the joy of understanding.",
      "category": "Knowledge",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 107,
      "author": "Plato",
      "quote": "Be kind, for everyone you meet is fighting a harder battle.",
      "category": "Kindness",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 108,
      "author": "Aristotle",
      "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      "category": "Excellence",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 109,
      "author": "Confucius",
      "quote": "The man who moves a mountain begins by carrying away small stones.",
      "category": "Perseverance",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 110,
      "author": "Ralph Waldo Emerson",
      "quote": "The only person you are destined to become is the person you decide to be.",
      "category": "Destiny",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 111,
      "author": "Thomas Edison",
      "quote": "Your worth consists in what you are and not in what you have.",
      "category": "Worth",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 112,
      "author": "Helen Keller",
      "quote": "Although the world is full of suffering, it is full also of the overcoming of it.",
      "category": "Resilience",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 113,
      "author": "Albert Einstein",
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "category": "Life",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 114,
      "author": "Isaac Newton",
      "quote": "If I have seen further it is by standing on the shoulders of Giants.",
      "category": "Knowledge",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 115,
      "author": "Marie Curie",
      "quote": "We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      "category": "Confidence",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 116,
      "author": "Mahatma Gandhi",
      "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
      "category": "Strength",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 117,
      "author": "Nelson Mandela",
      "quote": "I learned that courage was not the absence of fear, but the triumph over it.",
      "category": "Courage",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 118,
      "author": "Mark Twain",
      "quote": "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      "category": "Life",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 119,
      "author": "William Shakespeare",
      "quote": "There is nothing either good or bad, but thinking makes it so.",
      "category": "Philosophy",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 120,
      "author": "Leonardo da Vinci",
      "quote": "The human foot is a masterpiece of engineering and a work of art.",
      "category": "Art",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 121,
      "author": "Plato",
      "quote": "Courage is knowing what not to fear.",
      "category": "Courage",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 122,
      "author": "Aristotle",
      "quote": "Patience is bitter, but its fruit is sweet.",
      "category": "Patience",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 123,
      "author": "Confucius",
      "quote": "Real knowledge is to know the extent of one's ignorance.",
      "category": "Wisdom",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 124,
      "author": "Ralph Waldo Emerson",
      "quote": "For every minute you are angry you lose sixty seconds of happiness.",
      "category": "Happiness",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 125,
      "author": "Thomas Edison",
      "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "category": "Genius",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 126,
      "author": "Helen Keller",
      "quote": "Walking with a friend in the dark is better than walking alone in the light.",
      "category": "Friendship",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 127,
      "author": "Albert Einstein",
      "quote": "Only a life lived for others is a life worthwhile.",
      "category": "Service",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 128,
      "author": "Isaac Newton",
      "quote": "Tact is the knack of making a point without making an enemy.",
      "category": "Tact",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 129,
      "author": "Marie Curie",
      "quote": "You cannot hope to build a better world without improving the individuals.",
      "category": "Improvement",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 130,
      "author": "Mahatma Gandhi",
      "quote": "An eye for an eye only ends up making the whole world blind.",
      "category": "Peace",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 131,
      "author": "Nelson Mandela",
      "quote": "After climbing a great hill, one only finds that there are many more hills to climb.",
      "category": "Perseverance",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 132,
      "author": "Mark Twain",
      "quote": "The more I learn about people, the more I like my dog.",
      "category": "Humor",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 133,
      "author": "William Shakespeare",
      "quote": "It is not in the stars to hold our destiny but in ourselves.",
      "category": "Destiny",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 134,
      "author": "Leonardo da Vinci",
      "quote": "The smallest feline is a masterpiece.",
      "category": "Animals",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 135,
      "author": "Plato",
      "quote": "The beginning is the most important part of the work.",
      "category": "Work",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 136,
      "author": "Aristotle",
      "quote": "Pleasure in the job puts perfection in the work.",
      "category": "Work",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 137,
      "author": "Confucius",
      "quote": "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
      "category": "Learning",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 138,
      "author": "Ralph Waldo Emerson",
      "quote": "The creation of a thousand forests is in one acorn.",
      "category": "Nature",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 139,
      "author": "Thomas Edison",
      "quote": "I never did a day's work in my life. It was all fun.",
      "category": "Work",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 140,
      "author": "Helen Keller",
      "quote": "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.",
      "category": "Beauty",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 141,
      "author": "Albert Einstein",
      "quote": "A person who never made a mistake never tried anything new.",
      "category": "Innovation",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 142,
      "author": "Isaac Newton",
      "quote": "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",
      "category": "Truth",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 143,
      "author": "Marie Curie",
      "quote": "One never notices what has been done; one can only see what remains to be done.",
      "category": "Humility",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 144,
      "author": "Mahatma Gandhi",
      "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
      "category": "Happiness",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 145,
      "author": "Nelson Mandela",
      "quote": "A winner is a dreamer who never gives up.",
      "category": "Determination",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 146,
      "author": "Mark Twain",
      "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
      "category": "Individuality",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 147,
      "author": "William Shakespeare",
      "quote": "The course of true love never did run smooth.",
      "category": "Love",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 148,
      "author": "Leonardo da Vinci",
      "quote": "He who wishes to be rich in a day will be hanged in a year.",
      "category": "Patience",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 149,
      "author": "Plato",
      "quote": "Music is the movement of sound to reach the soul for the education of its virtue.",
      "category": "Music",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 150,
      "author": "Aristotle",
      "quote": "Hope is a waking dream.",
      "category": "Hope",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 151,
      "author": "Confucius",
      "quote": "Before you embark on a journey of revenge, dig two graves.",
      "category": "Wisdom",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 152,
      "author": "Ralph Waldo Emerson",
      "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "category": "Individuality",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 153,
      "author": "Thomas Edison",
      "quote": "The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.",
      "category": "Health",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 154,
      "author": "Helen Keller",
      "quote": "Alone we can do so little; together we can do so much.",
      "category": "Teamwork",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 155,
      "author": "Albert Einstein",
      "quote": "Strive not to be a success, but rather to be of value.",
      "category": "Success",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 156,
      "author": "Isaac Newton",
      "quote": "What we know is a drop, what we don't know is an ocean.",
      "category": "Knowledge",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 157,
      "author": "Marie Curie",
      "quote": "I am among those who think that science has great beauty.",
      "category": "Science",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 158,
      "author": "Mahatma Gandhi",
      "quote": "The best way to find yourself is to lose yourself in the service of others.",
      "category": "Service",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 159,
      "author": "Nelson Mandela",
      "quote": "It always seems impossible until it's done.",
      "category": "Determination",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 160,
      "author": "Mark Twain",
      "quote": "The secret of getting ahead is getting started.",
      "category": "Motivation",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 161,
      "author": "William Shakespeare",
      "quote": "All the world's a stage, and all the men and women merely players.",
      "category": "Life",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 162,
      "author": "Leonardo da Vinci",
      "quote": "Simplicity is the ultimate sophistication.",
      "category": "Simplicity",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 163,
      "author": "Plato",
      "quote": "Human behavior flows from three main sources: desire, emotion, and knowledge.",
      "category": "Psychology",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 164,
      "author": "Aristotle",
      "quote": "Happiness depends upon ourselves.",
      "category": "Happiness",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 165,
      "author": "Confucius",
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "category": "Perseverance",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 166,
      "author": "Ralph Waldo Emerson",
      "quote": "Nothing great was ever achieved without enthusiasm.",
      "category": "Achievement",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 167,
      "author": "Thomas Edison",
      "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      "category": "Opportunity",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 168,
      "author": "Helen Keller",
      "quote": "Keep your face to the sunshine and you cannot see a shadow.",
      "category": "Positivity",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 169,
      "author": "Albert Einstein",
      "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "category": "Imagination",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 170,
      "author": "Isaac Newton",
      "quote": "If I am anything, which I highly doubt, I have made myself so by hard work.",
      "category": "Humility",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 171,
      "author": "Marie Curie",
      "quote": "Be less curious about people and more curious about ideas.",
      "category": "Curiosity",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 172,
      "author": "Mahatma Gandhi",
      "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
      "category": "Forgiveness",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 173,
      "author": "Nelson Mandela",
      "quote": "Education is the most powerful weapon which you can use to change the world.",
      "category": "Education",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 174,
      "author": "Mark Twain",
      "quote": "The man who does not read has no advantage over the man who cannot read.",
      "category": "Knowledge",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 175,
      "author": "William Shakespeare",
      "quote": "We know what we are, but know not what we may be.",
      "category": "Potential",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 176,
      "author": "Leonardo da Vinci",
      "quote": "The noblest pleasure is the joy of understanding.",
      "category": "Knowledge",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 177,
      "author": "Plato",
      "quote": "The greatest wealth is to live content with little.",
      "category": "Contentment",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 178,
      "author": "Aristotle",
      "quote": "He who has overcome his fears will truly be free.",
      "category": "Courage",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 179,
      "author": "Confucius",
      "quote": "When we see men of a contrary character, we should turn inwards and examine ourselves.",
      "category": "Reflection",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 180,
      "author": "Ralph Waldo Emerson",
      "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      "category": "Adventure",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 181,
      "author": "Thomas Edison",
      "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      "category": "Persistence",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 182,
      "author": "Helen Keller",
      "quote": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      "category": "Optimism",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 183,
      "author": "Albert Einstein",
      "quote": "Try not to become a man of success, but rather try to become a man of value.",
      "category": "Success",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 184,
      "author": "Isaac Newton",
      "quote": "Live your life as an exclamation rather than an explanation.",
      "category": "Life",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 185,
      "author": "Marie Curie",
      "quote": "I was taught that the way of progress was neither swift nor easy.",
      "category": "Progress",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 186,
      "author": "Mahatma Gandhi",
      "quote": "Earth provides enough to satisfy every man's needs, but not every man's greed.",
      "category": "Sustainability",
      "image": "https://example.com/gandhi.jpg"
    },
    {
      "id": 187,
      "author": "Nelson Mandela",
      "quote": "There is no passion to be found playing small—in settling for a life that is less than the one you are capable of living.",
      "category": "Potential",
      "image": "https://example.com/mandela.jpg"
    },
    {
      "id": 188,
      "author": "Mark Twain",
      "quote": "The two most important days in your life are the day you are born and the day you find out why.",
      "category": "Purpose",
      "image": "https://example.com/twain.jpg"
    },
    {
      "id": 189,
      "author": "William Shakespeare",
      "quote": "This above all: to thine own self be true.",
      "category": "Integrity",
      "image": "https://example.com/shakespeare.jpg"
    },
    {
      "id": 190,
      "author": "Leonardo da Vinci",
      "quote": "Art is never finished, only abandoned.",
      "category": "Art",
      "image": "https://example.com/davinci.jpg"
    },
    {
      "id": 191,
      "author": "Plato",
      "quote": "Wise men speak because they have something to say; fools because they have to say something.",
      "category": "Wisdom",
      "image": "https://example.com/plato.jpg"
    },
    {
      "id": 192,
      "author": "Aristotle",
      "quote": "The more you know, the more you realize you don't know.",
      "category": "Knowledge",
      "image": "https://example.com/aristotle.jpg"
    },
    {
      "id": 193,
      "author": "Confucius",
      "quote": "The man who moves a mountain begins by carrying away small stones.",
      "category": "Persistence",
      "image": "https://example.com/confucius.jpg"
    },
    {
      "id": 194,
      "author": "Ralph Waldo Emerson",
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "category": "Strength",
      "image": "https://example.com/emerson.jpg"
    },
    {
      "id": 195,
      "author": "Thomas Edison",
      "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      "category": "Persistence",
      "image": "https://example.com/edison.jpg"
    },
    {
      "id": 196,
      "author": "Helen Keller",
      "quote": "Life is either a daring adventure, or nothing at all.",
      "category": "Adventure",
      "image": "https://example.com/keller.jpg"
    },
    {
      "id": 197,
      "author": "Albert Einstein",
      "quote": "I have no special talent. I am only passionately curious.",
      "category": "Humility",
      "image": "https://example.com/einstein.jpg"
    },
    {
      "id": 198,
      "author": "Isaac Newton",
      "quote": "If others would think as hard as I did, then they would get similar results.",
      "category": "Work",
      "image": "https://example.com/newton.jpg"
    },
    {
      "id": 199,
      "author": "Marie Curie",
      "quote": "You must never be fearful of what you are doing when it is right.",
      "category": "Courage",
      "image": "https://example.com/curie.jpg"
    },
    {
      "id": 200,
      "author": "Socrates",
      "quote": "The only true wisdom is in knowing you know nothing.",
      "category": "Wisdom",
      "image": "https://example.com/socrates.jpg"
    }
]  

const { category } = event.context.params;

  if (!category) {
    return {
      status: 400,
      data: { message: 'Category parameter is required' },
    };
  }

  const quotes = data.filter((quote) => quote.category?.toLowerCase() === category.toLowerCase());

  if (quotes.length > 0) {
    return {
      status: 200,
      data: quotes,
    };
  } else {
    return {
      status: 404,
      data: { message: 'No quotes found for this category' },
    };
  }


})