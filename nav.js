"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $storiesContainer.hide()
  $userProfile.show();
  $storiesContainer.show()
}

$navUserProfile.on("click", navProfileClick);

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $storiesContainer.hide();
  $loginForm.show();
  $signupForm.show();
  
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  $storiesContainer.show();
  hidePageComponents();
  $submitForm.show();
}

$navSubmitStory.on("click", navSubmitClick);

function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  $storiesContainer.show();
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

function navMyStories(evt) {
  console.debug("navMyStories", evt);
  $storiesContainer.show()
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", navMyStories);

function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $storiesContainer.hide()
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);

function navHomeClick(evt) {
  console.debug("navHomeClick", evt);
  $storiesContainer.show()
  putUserStoriesOnPage()
}

$navHome.on("click", navHomeClick);