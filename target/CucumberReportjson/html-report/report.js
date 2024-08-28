$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12199.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 12199 - List of Type of Fee and Fine"
    },
    {
      "line": 2,
      "value": "# As an Back Office User"
    },
    {
      "line": 3,
      "value": "# I want to Access the List of Fees and fines"
    },
    {
      "line": 4,
      "value": "# So that I can view, Edit and Add fees and fines"
    }
  ],
  "line": 8,
  "name": "User Story 12199 - List of Type of Fee and Fine",
  "description": "",
  "id": "user-story-12199---list-of-type-of-fee-and-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@US12199"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#Scenario1 - 12598 - TC 1-Sorting"
    }
  ],
  "line": 12,
  "name": "Sorting of Fees and fines",
  "description": "",
  "id": "user-story-12199---list-of-type-of-fee-and-fine;sorting-of-fees-and-fines",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sorting_list_of_fees_and_fines"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Input Username \"\u003cBOUsername\u003e\" and Password \"\u003cBOPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Manage Farmers Details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Ascending order of Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify Descending order of Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Verify Ascending order of Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify Descending order of Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "user-story-12199---list-of-type-of-fee-and-fine;sorting-of-fees-and-fines;",
  "rows": [
    {
      "cells": [
        "Browser",
        "BOUsername",
        "BOPassword"
      ],
      "line": 32,
      "id": "user-story-12199---list-of-type-of-fee-and-fine;sorting-of-fees-and-fines;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admin1",
        "Admin@123"
      ],
      "line": 33,
      "id": "user-story-12199---list-of-type-of-fee-and-fine;sorting-of-fees-and-fines;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 143500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Sorting of Fees and fines",
  "description": "",
  "id": "user-story-12199---list-of-type-of-fee-and-fine;sorting-of-fees-and-fines;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 11,
      "name": "@Sorting_list_of_fees_and_fines"
    },
    {
      "line": 7,
      "name": "@US12199"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Input Username \"Suraj_Admin1\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Manage Farmers Details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Ascending order of Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify Descending order of Type of Fees",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Verify Ascending order of Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify Descending order of Fee Code",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 2841663900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Admin1",
      "offset": 18
    },
    {
      "val": "Admin@123",
      "offset": 46
    }
  ],
  "location": "Steps.iInputUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 182018400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 933459800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 83674000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFarmersDetails()"
});
formatter.result({
  "duration": 97282400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 1101489500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTypeOfFees()"
});
formatter.result({
  "duration": 3103410900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyAscendingOrderOfTypeOfFees()"
});
formatter.result({
  "duration": 3045991600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTypeOfFees()"
});
formatter.result({
  "duration": 3081677500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDescendingOrderOfTypeOfFees()"
});
formatter.result({
  "duration": 3051705200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFeeCode()"
});
formatter.result({
  "duration": 3081540300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyAscendingOrderOfFeeCode()"
});
formatter.result({
  "duration": 3044801600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFeeCode()"
});
formatter.result({
  "duration": 3081510200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDescendingOrderOfFeeCode()"
});
formatter.result({
  "duration": 3047110200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4253672300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 26815800,
  "status": "passed"
});
formatter.after({
  "duration": 996537000,
  "status": "passed"
});
formatter.after({
  "duration": 91332200,
  "status": "passed"
});
});