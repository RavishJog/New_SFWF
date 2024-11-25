$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Back_office_tests.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story Back Office Tests"
    }
  ],
  "line": 4,
  "name": "Back Office Tests",
  "description": "",
  "id": "back-office-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Back_Office_tests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 251,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@Jenkins_Local_Test"
    },
    {
      "line": 250,
      "name": "@Smoke_Back_office_login"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.examples({
  "line": 260,
  "name": "",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "FPassword",
        "Password",
        "FUsername",
        "PwoUsername",
        "WpoUsername",
        "WOUsername",
        "ITUsername",
        "Remarks",
        "Bonafide",
        "Payment_Mode",
        "Amount_To_Pay",
        "Co_Name",
        "Rep_by",
        "BRN",
        "Cert_No",
        "Act",
        "Off_Add",
        "Enterprise_Address",
        "Status_Applicant",
        "Year_dur",
        "Prod_man",
        "No_person",
        "Actual_ann_turnover",
        "Status_business",
        "Years_operation",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method"
      ],
      "line": 261,
      "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
        "Admin@123",
        "Finance",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "ABC Agro Co Ltd",
        "Mr John Brown",
        "C123456789",
        "XLPR852",
        "Full Time",
        "The Main Road, Grand Port",
        "Royal Road, Port Louis",
        "Company",
        "1",
        "Tomato, Pepper",
        "50",
        "10000000",
        "Existing",
        "5",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Counter"
      ],
      "line": 262,
      "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 168000,
  "status": "passed"
});
formatter.before({
  "duration": 35500,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@Smoke_Back_office_login"
    },
    {
      "line": 3,
      "name": "@Back_Office_tests"
    },
    {
      "line": 250,
      "name": "@Jenkins_Local_Test"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Verify that User is directed to My Application Page",
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
  "duration": 8220189200,
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
  "duration": 7785755000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 68399500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 3640291200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 349118500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 166389900,
  "status": "passed"
});
formatter.after({
  "duration": 1115629800,
  "status": "passed"
});
formatter.after({
  "duration": 76300,
  "status": "passed"
});
});