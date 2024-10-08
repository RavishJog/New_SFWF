$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13364_14829.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13364 -Form - Group Personal Accident Cover (GPAC) – Claim"
    },
    {
      "line": 2,
      "value": "#User Story 14928 - Workflow"
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
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#    WPO"
    }
  ],
  "line": 47,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 65,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 66,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    WPO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.examples({
  "line": 103,
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
        "ITUsername",
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
      "line": 104,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;1"
    },
    {
      "cells": [
        "Chrome",
        "ybhunjun5",
        "Mauritius1!1710",
        "Admin@123",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
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
      "line": 105,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 101100,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
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
  "name": "I Input Registered Maupass User\u0027s Username \"ybhunjun5\" and Password \"Mauritius1!1710\"",
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
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#    WPO"
    }
  ],
  "line": 47,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Input External Remarks \"This is a Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 65,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 66,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I Input Registered Maupass User\u0027s Username \"ybhunjun5\" and Password \"Mauritius1!1710\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    WPO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Input Remarks \"This is a Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 99,
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
  "duration": 5993364100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ybhunjun5",
      "offset": 44
    },
    {
      "val": "Mauritius1!1710",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 8605310900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 54266800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 3771245100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 258334300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 122945200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 27811400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 10479000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "duration": 1104696800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewProgrammes()"
});
formatter.result({
  "duration": 3006088800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammeTypePage()"
});
formatter.result({
  "duration": 38236800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToApplyForGroupPersonalAccidentCoverGPAC()"
});
formatter.result({
  "duration": 549178600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfINDIANOCEANGENERALASSURANCEIOGASMALLFARMERSWELFAREFUNDSFWF()"
});
formatter.result({
  "duration": 116809600,
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
  "duration": 1646837800,
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
  "duration": 537361800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6168063600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyGeneralInformationTab()"
});
formatter.result({
  "duration": 76926700,
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
  "duration": 67955400,
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
  "duration": 587610800,
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
  "duration": 592968200,
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
  "duration": 57692000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6162890400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 96594100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3131460000,
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
  "duration": 1604675800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 29670700,
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
  "duration": 6307941400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 12008500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6177416600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 67658200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 74981100,
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
  "duration": 4071304500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10065025900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7988832300,
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
  "duration": 5205391400,
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
  "duration": 204645000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 571145500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 47207700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 50117600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 11671133500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //h5[contains(.,\u0027List of Registrations\u0027)] (tried for 10 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iVerifyDisplayOfListOfRegistrationsPage(Steps.java:2080)\r\n\tat ✽.And I Verify display of list of registrations page(features/US13364_14829.feature:52)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //h5[contains(.,\u0027List of Registrations\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iVerifyDisplayOfListOfRegistrationsPage(Steps.java:2080)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a Test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
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
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ybhunjun5",
      "offset": 44
    },
    {
      "val": "Mauritius1!1710",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
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
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
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
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
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
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
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
  "duration": 951875300,
  "status": "passed"
});
formatter.after({
  "duration": 58306100,
  "status": "passed"
});
});