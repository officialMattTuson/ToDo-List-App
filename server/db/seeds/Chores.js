exports.seed = async function(knex) {
   
  await knex('Chores').del()
  await knex('Chores').insert([
    {id: 1, name: 'Vacuuming', instruction: 'Weekend', completed: false},
    {id: 2, name: 'Clean Bathroom', instruction: 'Weekend', completed: false},
    {id: 3, name: 'Fix Shower', instruction: 'Wednesday', completed: false},
    {id: 4, name: 'Shopping', instruction: 'Monday', completed: false},
    {id: 5, name: 'Washing', instruction: 'Saturday', completed: false}
  ]);
};
