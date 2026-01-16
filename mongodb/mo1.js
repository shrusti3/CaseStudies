db.watchHistory.aggregate([
  // movies released in 2024
  { $match: { "year": 2024 } },

  // 2. Group by genre ,average rating and total views
  { 
    $group: { 
      "_id": "$genre", 
      "avgRating": { "$avg": "$rating" }, 
      "totalViews": { "$sum": "$views" } 
    } 
  },

  // <10,000 views
  { $match: { "totalViews": { "$gt": 10000 } } },

  // 4. Formating the output
  { 
    $project: { 
      "_id": 0, 
      "genre": "$_id", 
      "avgRating": { "$round": ["$avgRating", 1] }, 
      "totalViews": 1 
    } 
  }
])