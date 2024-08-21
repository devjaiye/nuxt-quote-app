import {defineEventHandler} from 'h3'

export default defineEventHandler(async (event)=>{
            const data =  [
              {
                "id": 1,
                "quote": "The only limit to our realization of tomorrow is our doubts of today.",
                "author": "Franklin D. Roosevelt"
              },
              {
                "id": 2,
                "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
                "author": "Martin Luther King Jr."
              },
              {
                "id": 3,
                "quote": "The purpose of our lives is to be happy.",
                "author": "Dalai Lama"
              },
              {
                "id": 4,
                "quote": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon"
              },
              {
                "id": 5,
                "quote": "Get busy living or get busy dying.",
                "author": "Stephen King"
              },
              {
                "id": 6,
                "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
                "author": "Brian Tracy"
              },
              {
                "id": 7,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 8,
                "quote": "The only impossible journey is the one you never begin.",
                "author": "Tony Robbins"
              },
              {
                "id": 9,
                "quote": "The best way to predict your future is to create it.",
                "author": "Peter Drucker"
              },
              {
                "id": 10,
                "quote": "Your time is limited, so don't waste it living someone else's life.",
                "author": "Steve Jobs"
              },
              {
                "id": 11,
                "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "author": "Nelson Mandela"
              },
              {
                "id": 12,
                "quote": "Success usually comes to those who are too busy to be looking for it.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 13,
                "quote": "If life were predictable it would cease to be life, and be without flavor.",
                "author": "Eleanor Roosevelt"
              },
              {
                "id": 14,
                "quote": "In three words I can sum up everything I've learned about life: it goes on.",
                "author": "Robert Frost"
              },
              {
                "id": 15,
                "quote": "Live in the sunshine, swim the sea, drink the wild air.",
                "author": "Ralph Waldo Emerson"
              },
              {
                "id": 16,
                "quote": "The future belongs to those who believe in the beauty of their dreams.",
                "author": "Eleanor Roosevelt"
              },
              {
                "id": 17,
                "quote": "It is our choices that show what we truly are, far more than our abilities.",
                "author": "J.K. Rowling"
              },
              {
                "id": 18,
                "quote": "Life is really simple, but we insist on making it complicated.",
                "author": "Confucius"
              },
              {
                "id": 19,
                "quote": "May you live all the days of your life.",
                "author": "Jonathan Swift"
              },
              {
                "id": 20,
                "quote": "Life itself is the most wonderful fairy tale.",
                "author": "Hans Christian Andersen"
              },
              {
                "id": 21,
                "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
                "author": "Ralph Waldo Emerson"
              },
              {
                "id": 22,
                "quote": "It is during our darkest moments that we must focus to see the light.",
                "author": "Aristotle"
              },
              {
                "id": 23,
                "quote": "Whoever is happy will make others happy too.",
                "author": "Anne Frank"
              },
              {
                "id": 24,
                "quote": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
                "author": "Benjamin Franklin"
              },
              {
                "id": 25,
                "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
                "author": "Helen Keller"
              },
              {
                "id": 26,
                "quote": "It is never too late to be what you might have been.",
                "author": "George Eliot"
              },
              {
                "id": 27,
                "quote": "Everything you’ve ever wanted is on the other side of fear.",
                "author": "George Addair"
              },
              {
                "id": 28,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 29,
                "quote": "Hardships often prepare ordinary people for an extraordinary destiny.",
                "author": "C.S. Lewis"
              },
              {
                "id": 30,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 31,
                "quote": "It does not matter how slowly you go as long as you do not stop.",
                "author": "Confucius"
              },
              {
                "id": 32,
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
              },
              {
                "id": 33,
                "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
                "author": "Jordan Belfort"
              },
              {
                "id": 34,
                "quote": "Everything has beauty, but not everyone sees it.",
                "author": "Confucius"
              },
              {
                "id": 35,
                "quote": "The best way to predict the future is to invent it.",
                "author": "Alan Kay"
              },
              {
                "id": 36,
                "quote": "Dream big and dare to fail.",
                "author": "Norman Vaughan"
              },
              {
                "id": 37,
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
              },
              {
                "id": 38,
                "quote": "I have not failed. I've just found 10,000 ways that won't work.",
                "author": "Thomas Edison"
              },
              {
                "id": 39,
                "quote": "The only limit to our realization of tomorrow is our doubts of today.",
                "author": "Franklin D. Roosevelt"
              },
              {
                "id": 40,
                "quote": "A person who never made a mistake never tried anything new.",
                "author": "Albert Einstein"
              },
              {
                "id": 41,
                "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                "author": "Ralph Waldo Emerson"
              },
              {
                "id": 42,
                "quote": "The only thing we have to fear is fear itself.",
                "author": "Franklin D. Roosevelt"
              },
              {
                "id": 43,
                "quote": "If you want to lift yourself up, lift up someone else.",
                "author": "Booker T. Washington"
              },
              {
                "id": 44,
                "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
                "author": "Amelia Earhart"
              },
              {
                "id": 45,
                "quote": "You become what you believe.",
                "author": "Oprah Winfrey"
              },
              {
                "id": 46,
                "quote": "I would rather die of passion than of boredom.",
                "author": "Vincent van Gogh"
              },
              {
                "id": 47,
                "quote": "It's not the years in your life that count. It's the life in your years.",
                "author": "Abraham Lincoln"
              },
              {
                "id": 48,
                "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
                "author": "Helen Keller"
              },
              {
                "id": 49,
                "quote": "The only person you are destined to become is the person you decide to be.",
                "author": "Ralph Waldo Emerson"
              },
              {
                "id": 50,
                "quote": "Go confidently in the direction of your dreams. Live the life you have imagined.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 51,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 52,
                "quote": "Act as if what you do makes a difference. It does.",
                "author": "William James"
              },
              {
                "id": 53,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 54,
                "quote": "Everything you’ve ever wanted is on the other side of fear.",
                "author": "George Addair"
              },
              {
                "id": 55,
                "quote": "It does not matter how slowly you go as long as you do not stop.",
                "author": "Confucius"
              },
              {
                "id": 56,
                "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
                "author": "Confucius"
              },
              {
                "id": 57,
                "quote": "The best way to predict your future is to create it.",
                "author": "Peter Drucker"
              },
              {
                "id": 58,
                "quote": "Success is not in what you have, but who you are.",
                "author": "Bo Bennett"
              },
              {
                "id": 59,
                "quote": "Act as if what you do makes a difference. It does.",
                "author": "William James"
              },
              {
                "id": 60,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 61,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 62,
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
              },
              {
                "id": 63,
                "quote": "I have not failed. I've just found 10,000 ways that won't work.",
                "author": "Thomas Edison"
              },
              {
                "id": 64,
                "quote": "Success usually comes to those who are too busy to be looking for it.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 65,
                "quote": "The best way to predict your future is to create it.",
                "author": "Peter Drucker"
              },
              {
                "id": 66,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 67,
                "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
                "author": "Jim Rohn"
              },
              {
                "id": 68,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 69,
                "quote": "Opportunities don't happen. You create them.",
                "author": "Chris Grosser"
              },
              {
                "id": 70,
                "quote": "Success is not in what you have, but who you are.",
                "author": "Bo Bennett"
              },
              {
                "id": 71,
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
              },
              {
                "id": 72,
                "quote": "You become what you believe.",
                "author": "Oprah Winfrey"
              },
              {
                "id": 73,
                "quote": "To succeed in life, you need two things: ignorance and confidence.",
                "author": "Mark Twain"
              },
              {
                "id": 74,
                "quote": "Don't be afraid to give up the good to go for the great.",
                "author": "John D. Rockefeller"
              },
              {
                "id": 75,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 76,
                "quote": "Success usually comes to those who are too busy to be looking for it.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 77,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 78,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 79,
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
              },
              {
                "id": 80,
                "quote": "Don't watch the clock; do what it does. Keep going.",
                "author": "Sam Levenson"
              },
              {
                "id": 81,
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "author": "Albert Schweitzer"
              },
              {
                "id": 82,
                "quote": "Act as if what you do makes a difference. It does.",
                "author": "William James"
              },
              {
                "id": 83,
                "quote": "Success is how high you bounce when you hit bottom.",
                "author": "George S. Patton"
              },
              {
                "id": 84,
                "quote": "Your time is limited, so don't waste it living someone else's life.",
                "author": "Steve Jobs"
              },
              {
                "id": 85,
                "quote": "Don't be afraid to give up the good to go for the great.",
                "author": "John D. Rockefeller"
              },
              {
                "id": 86,
                "quote": "I find that the harder I work, the more luck I seem to have.",
                "author": "Thomas Jefferson"
              },
              {
                "id": 87,
                "quote": "The best revenge is massive success.",
                "author": "Frank Sinatra"
              },
              {
                "id": 88,
                "quote": "Opportunities don't happen. You create them.",
                "author": "Chris Grosser"
              },
              {
                "id": 89,
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "author": "Albert Schweitzer"
              },
              {
                "id": 90,
                "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
                "author": "Winston Churchill"
              },
              {
                "id": 91,
                "quote": "All our dreams can come true if we have the courage to pursue them.",
                "author": "Walt Disney"
              },
              {
                "id": 92,
                "quote": "Don't watch the clock; do what it does. Keep going.",
                "author": "Sam Levenson"
              },
              {
                "id": 93,
                "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.",
                "author": "Walt Whitman"
              },
              {
                "id": 94,
                "quote": "The best way to predict your future is to create it.",
                "author": "Peter Drucker"
              },
              {
                "id": 95,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 96,
                "quote": "Success is not in what you have, but who you are.",
                "author": "Bo Bennett"
              },
              {
                "id": 97,
                "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                "author": "Ralph Waldo Emerson"
              },
              {
                "id": 98,
                "quote": "It does not matter how slowly you go as long as you do not stop.",
                "author": "Confucius"
              },
              {
                "id": 99,
                "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
                "author": "Aristotle"
              },
              {
                "id": 100,
                "quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
                "author": "Anatole France"
              },
              {
                "id": 101,
                "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
                "author": "Vince Lombardi"
              },
              {
                "id": 102,
                "quote": "The only limit to our realization of tomorrow is our doubts of today.",
                "author": "Franklin D. Roosevelt"
              },
              {
                "id": 103,
                "quote": "Don't let yesterday take up too much of today.",
                "author": "Will Rogers"
              },
              {
                "id": 104,
                "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
                "author": "William Butler Yeats"
              },
              {
                "id": 105,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 106,
                "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
                "author": "Jim Rohn"
              },
              {
                "id": 107,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 108,
                "quote": "Opportunities don't happen. You create them.",
                "author": "Chris Grosser"
              },
              {
                "id": 109,
                "quote": "Success is not in what you have, but who you are.",
                "author": "Bo Bennett"
              },
              {
                "id": 110,
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
              },
              {
                "id": 111,
                "quote": "You become what you believe.",
                "author": "Oprah Winfrey"
              },
              {
                "id": 112,
                "quote": "To succeed in life, you need two things: ignorance and confidence.",
                "author": "Mark Twain"
              },
              {
                "id": 113,
                "quote": "Don't be afraid to give up the good to go for the great.",
                "author": "John D. Rockefeller"
              },
              {
                "id": 114,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 115,
                "quote": "Success usually comes to those who are too busy to be looking for it.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 116,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 117,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 118,
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
              },
              {
                "id": 119,
                "quote": "Don't watch the clock; do what it does. Keep going.",
                "author": "Sam Levenson"
              },
              {
                "id": 120,
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "author": "Albert Schweitzer"
              },
              {
                "id": 121,
                "quote": "Act as if what you do makes a difference. It does.",
                "author": "William James"
              },
              {
                "id": 122,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 123,
                "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
                "author": "Jim Rohn"
              },
              {
                "id": 124,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 125,
                "quote": "Opportunities don't happen. You create them.",
                "author": "Chris Grosser"
              },
              {
                "id": 126,
                "quote": "Success is not in what you have, but who you are.",
                "author": "Bo Bennett"
              },
              {
                "id": 127,
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
              },
              {
                "id": 128,
                "quote": "You become what you believe.",
                "author": "Oprah Winfrey"
              },
              {
                "id": 129,
                "quote": "To succeed in life, you need two things: ignorance and confidence.",
                "author": "Mark Twain"
              },
              {
                "id": 130,
                "quote": "Don't be afraid to give up the good to go for the great.",
                "author": "John D. Rockefeller"
              },
              {
                "id": 131,
                "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
                "author": "Robert Collier"
              },
              {
                "id": 132,
                "quote": "Success usually comes to those who are too busy to be looking for it.",
                "author": "Henry David Thoreau"
              },
              {
                "id": 133,
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
              },
              {
                "id": 134,
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill"
              },
              {
                "id": 135,
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
              },
              {
                "id": 136,
                "quote": "Don't watch the clock; do what it does. Keep going.",
                "author": "Sam Levenson"
              },
              {
                "id": 137,
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "author": "Albert Schweitzer"
              },
              {
                "id": 138,
                "quote": "Act as if what you do makes a difference. It does.",
                "author": "William James"
              }
            ]
            
            const randomQuote = data[Math.floor(Math.random() * data.length)]

            return {
                data: randomQuote
              }
})


