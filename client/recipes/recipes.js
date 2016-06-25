Meteor.subscribe('recipes');

Template.Recipes.helpers({
  recipes: _ => {
    return Recipes.find({});
  }
});
