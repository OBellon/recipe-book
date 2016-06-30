Template.Recipes.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});﻿

Template.Recipes.helpers({
  recipes: _ => {
    return Recipes.find({});
  }
});

Template.Recipes.events({
  'click .new-recipe': function() {
    Session.set('newRecipe', true);
  }
})
