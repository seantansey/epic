exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trails').del()
    .then(function() {
      // Inserts seed entries
      return knex('trails').insert([{
          id: 1,
          name: "McKenzie River Trail (MRT)",
          summary:"Rivers, bridges, lush terrain, waterfalls, blue pools, and technical riding.",
          difficulty: "blueBlack",
          stars: 4.6,
          url: "https://www.mtbproject.com/trail/212960/mckenzie-river-trail-mrt",
          location:"McKenzie Bridge, Oregon",
          mtbproject_id:212960,
          img_med:"https://cdn-files.apstatic.com/mtb/6305831_smallMed_1412281921.jpg",
          length:25.4,
          ascent:488,
          descent:-2197,
          high:3147,
          low:1430,
          longitude:122.0015,
          longitude:44.3936,
        },
        {
          id: 2,
          name: ,
          summary:,
          difficulty:,
          stars:,
          url:,
          location:,
          mtbproject_id:,
          img_med:,
          length:,
          ascent:,
          descent:,
          high:,
          low:,
          longitude:,
        },
        {
          id: 3,
          name: ,
          summary:,
          difficulty:,
          stars:,
          url:,
          location:,
          mtbproject_id:,
          img_med:,
          length:,
          ascent:,
          descent:,
          high:,
          low:,
          longitude:,
        }
      ]);
    });
};
