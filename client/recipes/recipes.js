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
