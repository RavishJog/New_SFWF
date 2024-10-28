$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13364_14829.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13364 -Form - Group Personal Accident Cover (GPAC) – Claim"
    },
    {
      "line": 2,
      "value": "#User Story 14829 - Workflow"
    }
  ],
  "line": 5,
  "name": "User Story 13361 and 14829 -Form - Fertiliser Subsidy Scheme (FSS) and workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 4,
      "name": "@US13364_14829"
    },
    {
      "line": 4,
      "name": "@GOC"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario1"
    }
  ],
  "line": 9,
  "name": "Application for Group Personal Accident Cover (GPAC) – Claim and Workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Application_for_GPAC"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on New Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click to Apply for Group Personal Accident Cover (GPAC)",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Type of Farmer \"\u003cFarmer_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Accident Particulars \"\u003cDate_of_Accident\u003e\" \"\u003cTime_of_Accident\u003e\" \"\u003cPlace_of_Accident\u003e\" \"\u003cCause_of_Accident\u003e\" \"\u003cKind_of_Work\u003e\" \"\u003cParticulars_Statement\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify General Information Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Medical Cost \"\u003cMedical_Cost\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select \"\u003cAccident_Related\u003e\" for Has the medical treatment related to the accident been completed?",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Select \"\u003cAdditional_Medical_Charges_option\u003e\" for If yes, are there any additional medical charges?",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Input \"\u003cAdditional_Medical_Charges_amount\u003e\" for Details of Additional Medical Charges",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Documents \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Verify Success message for Application of Programmes Submitted",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Copy Programmes Ref Number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#    WPO - Under Query"
    },
    {
      "line": 48,
      "value": "#    And I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\""
    },
    {
      "line": 49,
      "value": "#    And I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\""
    },
    {
      "line": 50,
      "value": "#    And I Click on Sign In button"
    },
    {
      "line": 51,
      "value": "#    And I Verify Successful Login"
    },
    {
      "line": 52,
      "value": "#    And I Click to view All Programmes"
    },
    {
      "line": 53,
      "value": "#    And I Search for Programmes Ref Number as a Back Office User"
    },
    {
      "line": 54,
      "value": "#    And I Click to view Programmes"
    },
    {
      "line": 55,
      "value": "#    And I Click on Action Button"
    },
    {
      "line": 56,
      "value": "#    And I Select Under Query for Programmes"
    },
    {
      "line": 57,
      "value": "#    And I Input External Remarks \"\u003cRemarks\u003e\""
    },
    {
      "line": 58,
      "value": "#    And I Click on Under Query Notification for Programmes"
    },
    {
      "line": 59,
      "value": "#    And I Verify Success Message for Under Query Notification for Programmes"
    },
    {
      "line": 60,
      "value": "#    And I Click on Save Actions for Programmes"
    },
    {
      "line": 61,
      "value": "#    And I Verify for success message for workflow saved"
    },
    {
      "line": 62,
      "value": "#    And I Sign Out"
    },
    {
      "line": 63,
      "value": "#    And I Verify Successful Sign Out"
    },
    {
      "line": 65,
      "value": "#    Applicant after under query"
    },
    {
      "line": 66,
      "value": "#    Given I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\""
    },
    {
      "line": 67,
      "value": "#    When I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\""
    },
    {
      "line": 68,
      "value": "#    And I Click on Sign In button in Maupass"
    },
    {
      "line": 69,
      "value": "#    And I Verify Applicant\u0027s Successful Login"
    },
    {
      "line": 70,
      "value": "#    And I Click on Register as Farmer"
    },
    {
      "line": 71,
      "value": "#    And I Verify that User is directed to My Application Page"
    },
    {
      "line": 72,
      "value": "#    And I Verify display of Farmers Card link"
    },
    {
      "line": 73,
      "value": "#    And I Verify Programmes link"
    },
    {
      "line": 74,
      "value": "#    And I Click on Programmes"
    },
    {
      "line": 75,
      "value": "#    And I Search for Programme Ref Number for re-submit"
    },
    {
      "line": 76,
      "value": "#    And I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)"
    },
    {
      "line": 77,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 78,
      "value": "#    And I Verify General Information Tab"
    },
    {
      "line": 79,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 80,
      "value": "#    And I Verify Upload Required Documents Page is displayed"
    },
    {
      "line": 81,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 82,
      "value": "#    And I Verify Terms and Conditions Page"
    },
    {
      "line": 83,
      "value": "#    And I Click on Submit Application \"\u003cConfirmation\u003e\""
    },
    {
      "line": 84,
      "value": "#    And I Verify Success message for application submitted"
    },
    {
      "line": 85,
      "value": "#    Then I Sign Out as Front Registered User"
    },
    {
      "line": 87,
      "value": "#    WPO"
    }
  ],
  "line": 88,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view All Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Search for Programmes Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Click to view Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Select Assigned for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Select TO User",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 104,
      "value": "#    TO"
    }
  ],
  "line": 105,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I Input TO Username \"\u003cTOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I Click to view All Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I Search for Programmes Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I Click to view Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I Verify for Document Upload Success Message for Site Visit",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "FPassword",
        "Password",
        "PwoUsername",
        "WpoUsername",
        "WOUsername",
        "TOUsername",
        "Farmer_Type",
        "Date_of_Accident",
        "Time_of_Accident",
        "Place_of_Accident",
        "Cause_of_Accident",
        "Kind_of_Work",
        "Particulars_Statement",
        "Medical_Cost",
        "Accident_Related",
        "Additional_Medical_Charges_option",
        "Additional_Medical_Charges_amount",
        "Additional_Doc_Name",
        "Upload_test",
        "Confirmation",
        "Remarks"
      ],
      "line": 131,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
        "Admin@123",
        "PWO",
        "WPO",
        "WO",
        "TO",
        "Small Planter",
        "01/10/2024",
        "11:45 AM",
        "Karo Cane",
        "Explosion",
        "Planting Cane",
        "Engine exploded",
        "45000",
        "Yes",
        "Yes",
        "Surgery abroad",
        "Add Doc Test",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Yes",
        "This is a Test"
      ],
      "line": 132,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 99100,
  "status": "passed"
});
formatter.before({
  "duration": 20900,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Application for Group Personal Accident Cover (GPAC) – Claim and Workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 4,
      "name": "@GOC"
    },
    {
      "line": 8,
      "name": "@Application_for_GPAC"
    },
    {
      "line": 4,
      "name": "@US13364_14829"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on New Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click to Apply for Group Personal Accident Cover (GPAC)",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Type of Farmer \"Small Planter\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Accident Particulars \"01/10/2024\" \"11:45 AM\" \"Karo Cane\" \"Explosion\" \"Planting Cane\" \"Engine exploded\"",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify General Information Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Medical Cost \"45000\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select \"Yes\" for Has the medical treatment related to the accident been completed?",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Select \"Yes\" for If yes, are there any additional medical charges?",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Input \"Surgery abroad\" for Details of Additional Medical Charges",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Input Additional Document Name \"Add Doc Test\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Documents \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Verify Success message for Application of Programmes Submitted",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Copy Programmes Ref Number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#    WPO - Under Query"
    },
    {
      "line": 48,
      "value": "#    And I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\""
    },
    {
      "line": 49,
      "value": "#    And I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\""
    },
    {
      "line": 50,
      "value": "#    And I Click on Sign In button"
    },
    {
      "line": 51,
      "value": "#    And I Verify Successful Login"
    },
    {
      "line": 52,
      "value": "#    And I Click to view All Programmes"
    },
    {
      "line": 53,
      "value": "#    And I Search for Programmes Ref Number as a Back Office User"
    },
    {
      "line": 54,
      "value": "#    And I Click to view Programmes"
    },
    {
      "line": 55,
      "value": "#    And I Click on Action Button"
    },
    {
      "line": 56,
      "value": "#    And I Select Under Query for Programmes"
    },
    {
      "line": 57,
      "value": "#    And I Input External Remarks \"\u003cRemarks\u003e\""
    },
    {
      "line": 58,
      "value": "#    And I Click on Under Query Notification for Programmes"
    },
    {
      "line": 59,
      "value": "#    And I Verify Success Message for Under Query Notification for Programmes"
    },
    {
      "line": 60,
      "value": "#    And I Click on Save Actions for Programmes"
    },
    {
      "line": 61,
      "value": "#    And I Verify for success message for workflow saved"
    },
    {
      "line": 62,
      "value": "#    And I Sign Out"
    },
    {
      "line": 63,
      "value": "#    And I Verify Successful Sign Out"
    },
    {
      "line": 65,
      "value": "#    Applicant after under query"
    },
    {
      "line": 66,
      "value": "#    Given I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\""
    },
    {
      "line": 67,
      "value": "#    When I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\""
    },
    {
      "line": 68,
      "value": "#    And I Click on Sign In button in Maupass"
    },
    {
      "line": 69,
      "value": "#    And I Verify Applicant\u0027s Successful Login"
    },
    {
      "line": 70,
      "value": "#    And I Click on Register as Farmer"
    },
    {
      "line": 71,
      "value": "#    And I Verify that User is directed to My Application Page"
    },
    {
      "line": 72,
      "value": "#    And I Verify display of Farmers Card link"
    },
    {
      "line": 73,
      "value": "#    And I Verify Programmes link"
    },
    {
      "line": 74,
      "value": "#    And I Click on Programmes"
    },
    {
      "line": 75,
      "value": "#    And I Search for Programme Ref Number for re-submit"
    },
    {
      "line": 76,
      "value": "#    And I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)"
    },
    {
      "line": 77,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 78,
      "value": "#    And I Verify General Information Tab"
    },
    {
      "line": 79,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 80,
      "value": "#    And I Verify Upload Required Documents Page is displayed"
    },
    {
      "line": 81,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 82,
      "value": "#    And I Verify Terms and Conditions Page"
    },
    {
      "line": 83,
      "value": "#    And I Click on Submit Application \"\u003cConfirmation\u003e\""
    },
    {
      "line": 84,
      "value": "#    And I Verify Success message for application submitted"
    },
    {
      "line": 85,
      "value": "#    Then I Sign Out as Front Registered User"
    },
    {
      "line": 87,
      "value": "#    WPO"
    }
  ],
  "line": 88,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view All Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Search for Programmes Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Click to view Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Select Assigned for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Select TO User",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Input Remarks \"This is a Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 104,
      "value": "#    TO"
    }
  ],
  "line": 105,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I Input TO Username \"TO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I Click to view All Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I Search for Programmes Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I Click to view Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I Input Site visit remarks \"This is a Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I Verify for Document Upload Success Message for Site Visit",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I Input Remarks \"This is a Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 11400561100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Jo",
      "offset": 44
    },
    {
      "val": "Admin@123",
      "offset": 68
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 34057275600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 49347500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 5380001400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 500886700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 16417900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 17961500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 12627700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "duration": 1438909500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewProgrammes()"
});
formatter.result({
  "duration": 2640740600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammeTypePage()"
});
formatter.result({
  "duration": 32097900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToApplyForGroupPersonalAccidentCoverGPAC()"
});
formatter.result({
  "duration": 576473400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfINDIANOCEANGENERALASSURANCEIOGASMALLFARMERSWELFAREFUNDSFWF()"
});
formatter.result({
  "duration": 174757500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Small Planter",
      "offset": 24
    }
  ],
  "location": "Steps.iInputTypeOfFarmer(String)"
});
formatter.result({
  "duration": 1635446700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/10/2024",
      "offset": 30
    },
    {
      "val": "11:45 AM",
      "offset": 43
    },
    {
      "val": "Karo Cane",
      "offset": 54
    },
    {
      "val": "Explosion",
      "offset": 66
    },
    {
      "val": "Planting Cane",
      "offset": 78
    },
    {
      "val": "Engine exploded",
      "offset": 94
    }
  ],
  "location": "Steps.iInputAccidentParticulars(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 526702700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9194816600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyGeneralInformationTab()"
});
formatter.result({
  "duration": 70685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 22
    }
  ],
  "location": "Steps.iInputMedicalCost(String)"
});
formatter.result({
  "duration": 47405200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 10
    }
  ],
  "location": "Steps.iSelectForHasTheMedicalTreatmentRelatedToTheAccidentBeenCompleted(String)"
});
formatter.result({
  "duration": 617981100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 10
    }
  ],
  "location": "Steps.iSelectForIfYesAreThereAnyAdditionalMedicalCharges(String)"
});
formatter.result({
  "duration": 655392400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surgery abroad",
      "offset": 9
    }
  ],
  "location": "Steps.iInputForDetailsOfAdditionalMedicalCharges(String)"
});
formatter.result({
  "duration": 67973300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9218155200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 95636700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3124358800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Doc Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1601048800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 35722000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 20
    }
  ],
  "location": "Steps.iUploadDocuments(String)"
});
formatter.result({
  "duration": 5833226000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5033272200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9235874400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 80842700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1589368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 4709762500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationOfProgrammesSubmitted()"
});
formatter.result({
  "duration": 10085741100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyProgrammesRefNumber()"
});
formatter.result({
  "duration": 71642700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8384631500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 2350981700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 193096600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 537655500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 76077600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewAllProgrammes()"
});
formatter.result({
  "duration": 1943342600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForProgrammesRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6606496800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewProgrammes()"
});
formatter.result({
  "duration": 2129748900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1234002500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForProgrammes()"
});
formatter.result({
  "duration": 2685744200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectTOUser()"
});
formatter.result({
  "duration": 16534800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[contains(@id, \u0027userAssignedId_label\u0027)]\"}\n  (Session info: chrome\u003d130.0.6723.59)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.93\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.58 (3a50e012e4c9b8a410a4e2b12bf577e69ee8f755-refs/branch-heads/6723@{#1353}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir29416_1099006415}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64602}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.59, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 4721c099b0cb3fc7e74cea0376451321\n*** Element info: {Using\u003dxpath, value\u003d//label[contains(@id, \u0027userAssignedId_label\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Back_office_main_page.User_select_one(Back_office_main_page.java:238)\r\n\tat stepdefinition.Steps.iSelectTOUser(Steps.java:3581)\r\n\tat ✽.And I Select TO User(features/US13364_14829.feature:97)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a Test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TO",
      "offset": 21
    },
    {
      "val": "Admin@123",
      "offset": 39
    }
  ],
  "location": "Steps.iInputTOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewAllProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForProgrammesRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBonafide\u003e",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a Test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessageForSiteVisit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a Test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1032292700,
  "status": "passed"
});
formatter.after({
  "duration": 264400,
  "status": "passed"
});
});