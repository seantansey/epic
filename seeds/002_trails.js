exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trails').del()
    .then(function() {
      // Inserts seed entries
      return knex('trails').insert([{
          id: 1,
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
