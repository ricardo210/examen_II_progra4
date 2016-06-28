import { Router } from "meteor/iron:router"
import { Recipies2 } from '../api/recipies.js';
import { Ingredients2 } from '../api/ingredients.js';
import "../ui/layout/layout.js";
import "../ui/navbar/navbar.js";
import "../ui/listRecipies/listRecipies.js";
import "../ui/register/register.js";
import "../ui/home/home.js";
import "../ui/login/login.js";

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("home");
});

Router.route('/recipies',function(){
    this.render("listRecipies");
});

Router.route('/register',function(){
    this.render("register");
});

Router.route('/login',function(){
    this.render("login");
});
