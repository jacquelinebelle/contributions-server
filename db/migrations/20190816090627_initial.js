
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('congressMembers', function(table) {
          table.increments('id').primary();
          table.string('firstName');
          table.string('lastName');
          table.string('party');
    
          table.timestamps(true, true);
        }),
    
        knex.schema.createTable('contributions', function(table) {
          table.increments('id').primary();
          table.string('note');
          table.integer('member_id').unsigned()
          table.foreign('member_id')
            .references('congressMembers.id');
    
          table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('footnotes'),
        knex.schema.dropTable('papers')
      ]);
};
