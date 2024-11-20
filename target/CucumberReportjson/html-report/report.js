$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sign_in_backoffice.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story Sign In"
    },
    {
      "line": 2,
      "value": "# As an Back Office User"
    },
    {
      "line": 3,
      "value": "# I want to Sign In"
    },
    {
      "line": 4,
      "value": "# So that I can access the SFWF Backoffice Portal"
    }
  ],
  "line": 8,
  "name": "Login into SFWF Backoffice Portal",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Smoke_Back_office_login"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#Scenario1"
    }
  ],
  "line": 12,
  "name": "Login into SFWF Backoffice Portal with correct credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sign_in_correct_credentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
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
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on forget password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Verify Forget Password Page",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;",
  "rows": [
    {
      "cells": [
        "Browser",
        "WOUsername",
        "Password"
      ],
      "line": 24,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admin1",
        "Admin@123"
      ],
      "line": 25,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 125900,
  "status": "passed"
});
formatter.before({
  "duration": 38000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login into SFWF Backoffice Portal with correct credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Smoke_Back_office_login"
    },
    {
      "line": 11,
      "name": "@Sign_in_correct_credentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Input WO-WA Username \"Suraj_Admin1\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
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
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on forget password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Verify Forget Password Page",
  "keyword": "And "
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
  "duration": 7809085300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Admin1",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 52
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 163760400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3225448600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 77345200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4391363300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 36006600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnForgetPassword()"
});
formatter.result({
  "duration": 3267077800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForgetPasswordPage()"
});
formatter.result({
  "duration": 23841100,
  "status": "passed"
});
formatter.after({
  "duration": 2149433500,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "#Scenario2"
    }
  ],
  "line": 31,
  "name": "Login into SFWF Backoffice Portal with incorrect credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Sign_in_incorrect_credentials"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Verify Bad Credential Message \"\u003cBad_Credential_Message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "Browser",
        "WOUsername",
        "Password",
        "Bad_Credential_Message"
      ],
      "line": 39,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admin1",
        "Admin@1",
        "Bad Credential"
      ],
      "line": 40,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admi",
        "Admin@123",
        "Bad Credential"
      ],
      "line": 41,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20900,
  "status": "passed"
});
formatter.before({
  "duration": 11400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Login into SFWF Backoffice Portal with incorrect credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Smoke_Back_office_login"
    },
    {
      "line": 30,
      "name": "@Sign_in_incorrect_credentials"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Input WO-WA Username \"Suraj_Admin1\" and Password \"Admin@1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Verify Bad Credential Message \"Bad Credential\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
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
  "duration": 5231238900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Admin1",
      "offset": 24
    },
    {
      "val": "Admin@1",
      "offset": 52
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 314339700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 361692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bad Credential",
      "offset": 33
    }
  ],
  "location": "Steps.iVerifyBadCredentialMessage(String)"
});
formatter.result({
  "duration": 603259000,
  "status": "passed"
});
formatter.after({
  "duration": 1014731700,
  "status": "passed"
});
formatter.after({
  "duration": 11300,
  "status": "passed"
});
formatter.before({
  "duration": 8500,
  "status": "passed"
});
formatter.before({
  "duration": 7700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Login into SFWF Backoffice Portal with incorrect credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Smoke_Back_office_login"
    },
    {
      "line": 30,
      "name": "@Sign_in_incorrect_credentials"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Input WO-WA Username \"Suraj_Admi\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Verify Bad Credential Message \"Bad Credential\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
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
  "duration": 2945056700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Admi",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 50
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 315374400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 382674400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bad Credential",
      "offset": 33
    }
  ],
  "location": "Steps.iVerifyBadCredentialMessage(String)"
});
formatter.result({
  "duration": 616030200,
  "status": "passed"
});
formatter.after({
  "duration": 1455824800,
  "status": "passed"
});
formatter.after({
  "duration": 26500,
  "status": "passed"
});
});