exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trails').del()
    .then(function() {
      // Inserts seed entries
      return knex('trails').insert([{
        id: 1,
        name: "McKenzie River Trail (MRT)",
        summary: "Rivers, bridges, lush terrain, waterfalls, blue pools, and technical riding.",
        difficulty: "blueBlack",
        stars: 4.6,
        url: "https://www.mtbproject.com/trail/212960/mckenzie-river-trail-mrt",
        location: "McKenzie Bridge, Oregon",
        mtbproject_id: 212960,
        img_medium: "https://cdn-files.apstatic.com/mtb/6305831_smallMed_1412281921.jpg",
        length: 25.4,
        ascent: 488,
        descent: -2197,
        high: 3147,
        low: 1430,
        longitude: 122.0015,
        longitude: 44.3936,
      }, {
        id: 2,
        mtbproject_id: 7015406,
        name: "Johnson Pass Trail",
        summary: "A great through-trail through classic Kenai Peninsula singletrack.",
        difficulty: "blueBlack",
        stars: 4.6,
        stars: 7,
        location: "Girdwood, Alaska",
        url: "https:\/\/www.mtbproject.com\/trail\/7015406\/johnson-pass-trail",
        img_medium: "https:\/\/cdn-files.apstatic.com\/mtb\/7012288_medium_1470613458.jpg",
        length: 23.7,
        ascent: 2094,
        descent: -2247,
        high: 1517,
        low: 518,
        longitude: -149.2776,
        latitude: 60.7243,
      }])
    })
}
