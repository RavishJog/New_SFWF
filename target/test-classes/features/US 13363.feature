#User Story 13363 -Farmers Protection Scheme
#User Story 14928 - Workflow

@Main_feature @US13363_14829 @FPS
Feature: User Story 13361 and 14829 -Form - Fertiliser Subsidy Scheme (FSS) and workflow

   #Scenario1
  @Application_for_FPS
  Scenario Outline: Application for Farmers Protection Scheme

    Given I am on SFWF Front Office Home Page GOC "<Browser>"
    When I Input Registered Maupass User's Username "<Username>" and Password "<FPassword>"
    And I Click on Sign In button in Maupass
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on Programmes
    And I Click on New Programmes
    And I Verify Programme Type Page
    And I Click to Apply for Farmers Protection Scheme (FPS)
    And I Input Type of Farmer "<Farmer_Type>"
    And I Click on Save and Continue
    And I Verify Damage Declaration Tab
    And I Click on Add Damage
    And I Verify Display of Damage Declaration form input table
    And I Input Locality "<Locality>"
    And I Select Production System "<production_system>"
    And I Input Number of Animals "<number_of_animals>"
    And I Input Date of Birth "<DOB">
    And I Input Tag Number of Animal(s)/Microchip No "<tag_of_animals>"
    And I Input No.of dead animals "number_of_dead_animals">
    And I Input Remarks "<remarks>"
