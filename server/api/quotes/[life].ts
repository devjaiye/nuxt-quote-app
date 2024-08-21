
export default defineEventHandler(async (event)=>{
  return {
        "category": "Life",
        "quotes": [
          {
            "id": 1,
            "author": "Albert Einstein",
            "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            "image": "https://example.com/einstein.jpg"
          },
          {
            "id": 141,
            "author": "William Shakespeare",
            "quote": "All the world's a stage, and all the men and women merely players.",
            "image": "https://example.com/shakespeare.jpg"
          },
          {
            "id": 184,
            "author": "Isaac Newton",
            "quote": "Live your life as an exclamation rather than an explanation.",
            "image": "https://example.com/newton.jpg"
          }
        ]
      }
})