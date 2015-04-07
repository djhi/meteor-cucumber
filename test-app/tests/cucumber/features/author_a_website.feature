Feature: Author a Website

  As a web page author
  I want to set the heading of my page
  So that I can create the simplest website in the world

  Scenario: Author using the Meteor settings file
    Given I have authored the site title as "Meteor Cucumber by Xolv.io"
    When  I navigate to "/"
    Then  I should see the heading "Meteor Cucumber by Xolv.io"