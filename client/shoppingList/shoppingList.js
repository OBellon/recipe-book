Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});﻿

Template.ShoppingList.helpers({
  shoppingList: _ => {
    return Recipes.find({ inMenu: true });
  }
});
