Template.Menu.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});﻿

Template.Menu.helpers({
  recipes: _ => {
    return Recipes.find({ inMenu: true });
  }
});
