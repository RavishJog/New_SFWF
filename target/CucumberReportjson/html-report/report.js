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
  "name": "I Copy Application Number",
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
      "value": "#    WPO"
    }
  ],
  "line": 48,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Click to view All Programmes",
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
  "name": "I Select Under Query for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Click on Under Query Notification for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Verify Success Message for Under Query Notification for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Save Actions for Programmes",
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
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Search for Programme Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Verify General Information Tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
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
      "line": 90,
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
      "line": 91,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-group-personal-accident-cover-(gpac)-–-claim-and-workflow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 118200,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
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
  "name": "I Copy Application Number",
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
      "value": "#    WPO"
    }
  ],
  "line": 48,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Click to view All Programmes",
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
  "name": "I Select Under Query for Programmes",
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
  "name": "I Click on Under Query Notification for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Verify Success Message for Under Query Notification for Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Save Actions for Programmes",
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
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Search for Programme Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Verify General Information Tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
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
  "duration": 78220850300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_RESET\n  (Session info: chrome\u003d129.0.6668.90)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.91 (b00bc8b76d601dfd7471dbed072a547601ee7665-refs/branch-heads/6668@{#1505}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir11032_1806030156}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63318}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.90, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 71dd86e90847401348d20394be2307ed\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\r\n\tat stepdefinition.Steps.iAmOnSFWFFrontOfficeHomePageGOC(Steps.java:3130)\r\n\tat ✽.Given I am on SFWF Front Office Home Page GOC \"Chrome\"(features/US13364_14829.feature:11)\r\n",
  "status": "failed"
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
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnNewProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammeTypePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToApplyForGroupPersonalAccidentCoverGPAC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfINDIANOCEANGENERALASSURANCEIOGASMALLFARMERSWELFAREFUNDSFWF()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyGeneralInformationTab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
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
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
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
  "location": "Steps.iCopyApplicationNumber()"
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
  "location": "Steps.iClickToViewAllProgrammes()"
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
  "location": "Steps.iSelectUnderQueryForProgrammes()"
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
  "location": "Steps.iClickOnUnderQueryNotificationForProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActionsForProgrammes()"
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
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForProgrammeRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfINDIANOCEANGENERALASSURANCEIOGASMALLFARMERSWELFAREFUNDSFWF()"
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
  "location": "Steps.iVerifyGeneralInformationTab()"
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
formatter.after({
  "duration": 1051938500,
  "status": "passed"
});
formatter.after({
  "duration": 1318400,
  "status": "passed"
});
});