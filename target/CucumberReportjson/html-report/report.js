$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280 - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 230,
      "value": "#Scenario2"
    }
  ],
  "line": 232,
  "name": "Approval for Payment online for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 231,
      "name": "@Approval_by_BO_Payment_online_for_Agro-Processing-Enterprise"
    },
    {
      "line": 231,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I Input Enterprise Address \"\u003cEnterprise_Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 296,
      "value": "#    PWO"
    }
  ],
  "line": 297,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#    WPO"
    }
  ],
  "line": 314,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 331,
      "value": "#    WO/WA"
    }
  ],
  "line": 332,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 356,
      "value": "#    WPO"
    }
  ],
  "line": 357,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 375,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 376,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 394,
      "value": "#    WPO"
    }
  ],
  "line": 395,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 411,
      "value": "#    IT Department"
    }
  ],
  "line": 412,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 424,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 425,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 437,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 438,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
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
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 439,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 132000,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "Approval for Payment online for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 231,
      "name": "@Approval_by_BO_Payment_online_for_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 231,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "I Upload Additional Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    35,
    36,
    37,
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 296,
      "value": "#    PWO"
    }
  ],
  "line": 297,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#    WPO"
    }
  ],
  "line": 314,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 331,
      "value": "#    WO/WA"
    }
  ],
  "line": 332,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 356,
      "value": "#    WPO"
    }
  ],
  "line": 357,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 375,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 376,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 394,
      "value": "#    WPO"
    }
  ],
  "line": 395,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 411,
      "value": "#    IT Department"
    }
  ],
  "line": 412,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 424,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 425,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 11005551900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 258120200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 508661300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1198737000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1496513200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 36535100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 29170100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 19284900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 950988100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 15530200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 2979842000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 59650500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 96583400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 86984000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 70
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRNForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 106066700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 72
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNoForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 108303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 75140200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 125324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Royal Road, Port Louis",
      "offset": 28
    }
  ],
  "location": "Steps.iInputEnterpriseAddress(String)"
});
formatter.result({
  "duration": 86799800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
  "duration": 2188371600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 4279766300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 61
    }
  ],
  "location": "Steps.iSelectStatusOfApplicantForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1645804600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6195996500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 100546500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 2190022400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 1659096800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 1127355700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 1157938600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 1683711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 1153533000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 1653754500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 1680642600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 13653400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3124056400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1633365100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 21198700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
});
formatter.result({
  "duration": 1653244700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 14054000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6159929800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 87313100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 73862300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 4305029500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1137139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1114776500,
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
  "duration": 4568496200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10094415300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 44795800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 60192500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3153071100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2233369200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 638560800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 630318700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5142195100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 102150400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 50351394900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5345759200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 21202732900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 9748800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "duration": 14906200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8221509700,
  "status": "passed"
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
  "duration": 2106465400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 162014700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2171976500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 51977700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 54799100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1566245600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2069151800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4864728100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5046398000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 5386938200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1616360600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 8098638400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 71781200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4833281400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4309720400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 993582800,
  "status": "passed"
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
  "duration": 1933848100,
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
  "duration": 324390600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2182865800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 51997200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 55620300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1542761900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2070328100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4820122600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 3910493200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1629734000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1745156100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 8124062500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 68051000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4273604200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4276952100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 980597800,
  "status": "passed"
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
  "duration": 1911743000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 170900900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2112049100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 67634800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 59782400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1560531400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2066198900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4797203300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 81669100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 56596600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "duration": 89759500,
  "status": "passed"
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
  "duration": 65338300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 23872000,
  "error_message": "java.lang.AssertionError: Document Upload Success Message did not appear\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:729)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280.feature:344)\r\n",
  "status": "failed"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
      "val": "This is a test",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnPrintCard()"
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
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
  "duration": 1064219300,
  "status": "passed"
});
formatter.after({
  "duration": 185000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 670,
      "value": "#Scenario4"
    }
  ],
  "line": 672,
  "name": "Payment online for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 671,
      "name": "@Approval_by_BO_Payment_online_for_Farmers_Cooperative_Association"
    },
    {
      "line": 671,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 674,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I Input Business Registration No.(BRN) \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I Input Certificate of Incorporation No \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I Input Office Phone Number \"\u003cOff_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 692,
  "name": "I Input Mobile Phone Number \"\u003cMob_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I Select Status of Applicant \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 695,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 696,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I Input No. of persons employed \"\u003cNo_person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I Input Actual Annual Turnover (Rs) \"\u003cActual_ann_turnover\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I Select Status of business \"\u003cStatus_business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I Input No. of years of operation \"\u003cYears_operation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 701,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 706,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 707,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 711,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 712,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 714,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 715,
  "name": "I Upload Additional Documents \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 716,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 717,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 718,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 720,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I Input Bank Branch \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I Input Personal Bank Account Number\"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 724,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 725,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 727,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 728,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 732,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 733,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 735,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 736,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 738,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 739,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 741,
      "value": "#    PWO"
    }
  ],
  "line": 742,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 743,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 746,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 747,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 748,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 749,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 750,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 752,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 754,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 755,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 756,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 758,
      "value": "#    WPO"
    }
  ],
  "line": 759,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 762,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 763,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 764,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 765,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 767,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 768,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 769,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 770,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 771,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 774,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 776,
      "value": "#    WO/WA"
    }
  ],
  "line": 777,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 781,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 782,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 783,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 785,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 793,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 794,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 795,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 796,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 797,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 798,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 799,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 801,
      "value": "#    WPO"
    }
  ],
  "line": 802,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 804,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 805,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 806,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 807,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 808,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 812,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 813,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 814,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 816,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 820,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 821,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 824,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 825,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 826,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 827,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 829,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 830,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 831,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 832,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 833,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 834,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 835,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 836,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 837,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 839,
      "value": "#    WPO"
    }
  ],
  "line": 840,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 846,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 847,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 848,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 849,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 850,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 851,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 852,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 853,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 854,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 856,
      "value": "#    IT Department"
    }
  ],
  "line": 857,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 860,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 861,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 862,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 863,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 864,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 865,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 866,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 867,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 869,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 870,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 873,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 874,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 875,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 876,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 877,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 878,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 879,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 880,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 882,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Off_Num",
        "Mob_Num",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 883,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;1"
    },
    {
      "cells": [
        "Chrome",
        "Raksha_Luchun3004",
        "Admin@123",
        "FINANCE",
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
        "2126666",
        "58967896",
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
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 884,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18400,
  "status": "passed"
});
formatter.scenario({
  "line": 884,
  "name": "Payment online for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 671,
      "name": "@Approval_by_BO_Payment_online_for_Farmers_Cooperative_Association"
    },
    {
      "line": 671,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 674,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered User\u0027s Username \"Raksha_Luchun3004\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I Input Office Phone Number \"2126666\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 692,
  "name": "I Input Mobile Phone Number \"58967896\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 695,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 696,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 701,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 706,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 707,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 711,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 712,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 714,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 715,
  "name": "I Upload Additional Documents \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 716,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 717,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 718,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 720,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 724,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 725,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 727,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 728,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 732,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 733,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 735,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    37,
    38,
    39,
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 736,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 738,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 739,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 741,
      "value": "#    PWO"
    }
  ],
  "line": 742,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 743,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 746,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 747,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 748,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 749,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 750,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 752,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 754,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 755,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 756,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 758,
      "value": "#    WPO"
    }
  ],
  "line": 759,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 762,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 763,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 764,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 765,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 767,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 768,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 769,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 770,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 771,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 774,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 776,
      "value": "#    WO/WA"
    }
  ],
  "line": 777,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 781,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 782,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 783,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 785,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 793,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 794,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 795,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 796,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 797,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 798,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 799,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 801,
      "value": "#    WPO"
    }
  ],
  "line": 802,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 804,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 805,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 806,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 807,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 808,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 812,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 813,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 814,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 816,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 820,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 821,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered User\u0027s Username \"Raksha_Luchun3004\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 824,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 825,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 826,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 827,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 829,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 830,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 831,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 832,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 833,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 834,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 835,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 836,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 837,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 839,
      "value": "#    WPO"
    }
  ],
  "line": 840,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 846,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 847,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 848,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 849,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 850,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 851,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 852,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 853,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 854,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 856,
      "value": "#    IT Department"
    }
  ],
  "line": 857,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 860,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 861,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 862,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 863,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 864,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 865,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 866,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 867,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 869,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 870,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered User\u0027s Username \"Raksha_Luchun3004\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 873,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 874,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 875,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 876,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 877,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 878,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 879,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 880,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 39437177900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raksha_Luchun3004",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 148770900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1396041700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 36293600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1246449100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 29723000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 23849600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16875700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 664231900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 27252100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 2961546800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 36630200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 73598000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 68729500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 40
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRN(String)"
});
formatter.result({
  "duration": 56004700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 41
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNo(String)"
});
formatter.result({
  "duration": 58874500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 49181900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2126666",
      "offset": 29
    }
  ],
  "location": "Steps.iInputOfficePhoneNumber(String)"
});
formatter.result({
  "duration": 57172500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58967896",
      "offset": 29
    }
  ],
  "location": "Steps.iInputMobilePhoneNumber(String)"
});
formatter.result({
  "duration": 63311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 71330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectStatusOfApplicant(String)"
});
formatter.result({
  "duration": 1621482100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
  "duration": 2117457600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 4228302100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "Steps.iInputNoOfPersonsEmployed(String)"
});
formatter.result({
  "duration": 54385500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000",
      "offset": 37
    }
  ],
  "location": "Steps.iInputActualAnnualTurnoverRs(String)"
});
formatter.result({
  "duration": 59341700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectStatusOfBusiness(String)"
});
formatter.result({
  "duration": 52092800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "Steps.iInputNoOfYearsOfOperation(String)"
});
formatter.result({
  "duration": 51594500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6167708400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 80680200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 2198040400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 1123995100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 1107173300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 1115317200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 1652472300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 1116179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 1650548100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 1112832700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 17862100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3106713300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1601839600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 31570700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 31
    }
  ],
  "location": "Steps.iUploadAdditionalDocuments(String)"
});
formatter.result({
  "duration": 1658480600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 27235700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6179293500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 87418100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 72113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 4260136600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "duration": 1130703600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 37
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumber(String)"
});
formatter.result({
  "duration": 1128871900,
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
  "duration": 4234612000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10086386600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 36693700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 46261600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2671653800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2225091400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 600581100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 622228000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5170128600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 113574800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 8433198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5349140900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 10737066600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 22739000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "duration": 13954100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8079405300,
  "status": "passed"
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
  "duration": 1954968000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 147030900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2520851300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 77971600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 90866800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1573197200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2079179500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4807180700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 3921193200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 5922827200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1617811500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 8101432800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 73315600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4790956300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4262638900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1008768200,
  "status": "passed"
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
  "duration": 2007671200,
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
  "duration": 295663900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2492369700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 56633700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 50598600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1564758100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2068028000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4826017000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 3915586700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1627920000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1676541700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 8111082800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 70199500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4299618800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4294815200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1012533000,
  "status": "passed"
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
  "duration": 2019904200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 158640800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2262406200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 48457900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 53374800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1567608200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2068906900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 4844479900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 86275600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 55718000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "duration": 55895900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.59)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.70 (df87d5cf12b1397be7495a04cab2db6239b227a8-refs/branch-heads/6668@{#1420}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir36116_1009987515}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53462}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.59, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f7bb65c5fc5992ae2fdb8e7635a2a008\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:96)\r\n\tat stepdefinition.Steps.iInputSiteVisitRemarks(Steps.java:2213)\r\n\tat ✽.And I Input Site visit remarks \"This is a test\"(features/US13280.feature:787)\r\n",
  "status": "failed"
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
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Raksha_Luchun3004",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
      "val": "This is a test",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnPrintCard()"
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Raksha_Luchun3004",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
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
  "duration": 957346000,
  "status": "passed"
});
formatter.after({
  "duration": 295300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1140,
      "value": "#Scenario6"
    }
  ],
  "line": 1142,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1141,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 1141,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1144,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1145,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1146,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1147,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1148,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1159,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1160,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1174,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1175,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1183,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1184,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1189,
  "name": "I Verify Display of Particulars for Horticultural Plantations Page",
  "keyword": "And "
});
formatter.step({
  "line": 1190,
  "name": "I Click on Add Horticultural",
  "keyword": "And "
});
formatter.step({
  "line": 1191,
  "name": "Verify Display of Particulars for Horticultural Plantations Table",
  "keyword": "And "
});
formatter.step({
  "line": 1192,
  "name": "I Input Field Location \"\u003cField_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1193,
  "name": "I Select Production System \"\u003cProduction_System\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1194,
  "name": "I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1195,
  "name": "I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1196,
  "name": "I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1197,
  "name": "I Select Plantation Type \"\u003cPlantation_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1198,
  "name": "I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1199,
  "name": "I Save Particulars for Horticultural Plantations",
  "keyword": "And "
});
formatter.step({
  "line": 1200,
  "name": "I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1201,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1202,
  "name": "I Close Horticultural Plantation Documents tab",
  "keyword": "And "
});
formatter.step({
  "line": 1203,
  "name": "I Click on Edit button for Particulars for Horticultural Plantations declared under FPS",
  "keyword": "And "
});
formatter.step({
  "line": 1204,
  "name": "I Verify Particulars for Horticultural Plantations declared under FPS Table",
  "keyword": "And "
});
formatter.step({
  "line": 1205,
  "name": "I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1206,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1207,
  "name": "I Save Particulars for Horticultural Plantations declared under FPS",
  "keyword": "And "
});
formatter.step({
  "line": 1208,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1209,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1210,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1211,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1217,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1218,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1219,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1220,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1225,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1226,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1227,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1234,
      "value": "#    PWO"
    }
  ],
  "line": 1235,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1236,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1237,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1251,
      "value": "#    WPO"
    }
  ],
  "line": 1252,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1253,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1254,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1255,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1256,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1257,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1258,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1259,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1260,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1261,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1262,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1263,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1269,
      "value": "#    WO/WA"
    }
  ],
  "line": 1270,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1271,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1272,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1273,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1274,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1275,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1292,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1294,
      "value": "#    WPO"
    }
  ],
  "line": 1295,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1297,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1298,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1299,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1310,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1311,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1313,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1314,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1315,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1317,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1318,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1319,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1320,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1323,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 1324,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1325,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1326,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1327,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1332,
      "value": "#    WPO"
    }
  ],
  "line": 1333,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1336,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1337,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1338,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1339,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1340,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1341,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1342,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1343,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1344,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1345,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1346,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1347,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1349,
      "value": "#    IT Department"
    }
  ],
  "line": 1350,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1354,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1355,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1356,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1362,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1363,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1364,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1365,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1367,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1368,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1369,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1370,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1371,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1375,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Applicant_Title",
        "District",
        "Education_Level",
        "Act",
        "Other_Occupation",
        "Photo",
        "Year_dur",
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "Org_acc_no",
        "Crop_Type",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Field_Location",
        "Production_System",
        "Total_Extent",
        "Crop_Grown",
        "Plantation_Type",
        "Date_Plantation_Seedling",
        "Upload_test",
        "Crop_Status",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 1376,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mr",
        "Black River",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "1",
        "Married",
        "Spouse",
        "Sanon",
        "Kirti",
        "Female",
        "1Jan94",
        "Air Hostess",
        "0001252563",
        "Cane",
        "2.5",
        "Tenant",
        "Moka",
        "Port Louis",
        "Sheltered Farming",
        "9",
        "Pepper",
        "Interline",
        "1Aug2030",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Harvest",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 1377,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16400,
  "status": "passed"
});
formatter.scenario({
  "line": 1377,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1141,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 1141,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1144,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1145,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1146,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1147,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1148,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1159,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1160,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1174,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1175,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1183,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1184,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1189,
  "name": "I Verify Display of Particulars for Horticultural Plantations Page",
  "keyword": "And "
});
formatter.step({
  "line": 1190,
  "name": "I Click on Add Horticultural",
  "keyword": "And "
});
formatter.step({
  "line": 1191,
  "name": "Verify Display of Particulars for Horticultural Plantations Table",
  "keyword": "And "
});
formatter.step({
  "line": 1192,
  "name": "I Input Field Location \"Port Louis\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1193,
  "name": "I Select Production System \"Sheltered Farming\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1194,
  "name": "I Input Total Extent of plot - Size \"9\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1195,
  "name": "I Input Crop grown at time of Registration/ Crop to be grown \"Pepper\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1196,
  "name": "I Select Owner Type for Horticultural Plantation \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1197,
  "name": "I Select Plantation Type \"Interline\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1198,
  "name": "I Input Expected Date of Planting/Seedling \"1Aug2030\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1199,
  "name": "I Save Particulars for Horticultural Plantations",
  "keyword": "And "
});
formatter.step({
  "line": 1200,
  "name": "I Upload documents for Horticultural Plantations \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1201,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1202,
  "name": "I Close Horticultural Plantation Documents tab",
  "keyword": "And "
});
formatter.step({
  "line": 1203,
  "name": "I Click on Edit button for Particulars for Horticultural Plantations declared under FPS",
  "keyword": "And "
});
formatter.step({
  "line": 1204,
  "name": "I Verify Particulars for Horticultural Plantations declared under FPS Table",
  "keyword": "And "
});
formatter.step({
  "line": 1205,
  "name": "I Input Crop Status and Organisation \"Harvest\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1206,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1207,
  "name": "I Save Particulars for Horticultural Plantations declared under FPS",
  "keyword": "And "
});
formatter.step({
  "line": 1208,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1209,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1210,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1211,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1217,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1218,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1219,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1220,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1225,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1226,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1227,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    48,
    49,
    50,
    51,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1234,
      "value": "#    PWO"
    }
  ],
  "line": 1235,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1236,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1237,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1251,
      "value": "#    WPO"
    }
  ],
  "line": 1252,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1253,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1254,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1255,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1256,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1257,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1258,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1259,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1260,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1261,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1262,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1263,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1269,
      "value": "#    WO/WA"
    }
  ],
  "line": 1270,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1271,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1272,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1273,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1274,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1275,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1292,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1294,
      "value": "#    WPO"
    }
  ],
  "line": 1295,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1297,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1298,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1299,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1310,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1311,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1313,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1314,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1315,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1317,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1318,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1319,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1320,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1323,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 1324,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1325,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1326,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1327,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1332,
      "value": "#    WPO"
    }
  ],
  "line": 1333,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1336,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1337,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1338,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1339,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1340,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1341,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1342,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1343,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1344,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1345,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1346,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1347,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1349,
      "value": "#    IT Department"
    }
  ],
  "line": 1350,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1354,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1355,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1356,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1362,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1363,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1364,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1365,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1367,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1368,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1369,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1370,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1371,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4508991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 151177900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1867055400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 31850600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1370426100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 28725400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 33562300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 18466000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 876905400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 15938400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 3009450400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 54330700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 26
    }
  ],
  "location": "Steps.iSelectApplicantTitle(String)"
});
formatter.result({
  "duration": 2656292300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black River",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 4276313000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3648510000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 185896900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 55938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1726408400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1043725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 5724101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1601021500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6160586100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 78950900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3096572700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3094862100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectFamilyRelationship(String)"
});
formatter.result({
  "duration": 2641699900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanon",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 56492000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kirti",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 52469600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1594602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5872853000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Air Hostess",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 50166800,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.59)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.70 (df87d5cf12b1397be7495a04cab2db6239b227a8-refs/branch-heads/6668@{#1420}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir35152_256928592}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53495}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.59, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 19d9e74caf0190172854f5639bf80c7f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:96)\r\n\tat stepdefinition.Steps.iInputFamilyOccupation(Steps.java:1582)\r\n\tat ✽.And I Input Family Occupation \"Air Hostess\"(features/US13280.feature:1174)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
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
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cane",
      "offset": 20
    }
  ],
  "location": "Steps.iSelectCropType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfCrop()"
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
  "location": "Steps.iVerifyDisplayOfParticularsForHorticulturalPlantationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddHorticultural()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsForHorticulturalPlantationsTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFieldLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheltered Farming",
      "offset": 28
    }
  ],
  "location": "Steps.iSelectProductionSystem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 37
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pepper",
      "offset": 62
    }
  ],
  "location": "Steps.iInputCropGrownAtTimeOfRegistrationCropToBeGrown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectOwnerTypeForHorticulturalPlantation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Interline",
      "offset": 26
    }
  ],
  "location": "Steps.iSelectPlantationType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1Aug2030",
      "offset": 44
    }
  ],
  "location": "Steps.iInputExpectedDateOfPlantingSeedling(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsForHorticulturalPlantations()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 50
    }
  ],
  "location": "Steps.iUploadDocumentsForHorticulturalPlantations(String)"
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
  "location": "Steps.iCloseHorticulturalPlantationDocumentsTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnEditButtonForParticularsForHorticulturalPlantationsDeclaredUnderFPS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyParticularsForHorticulturalPlantationsDeclaredUnderFPSTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harvest",
      "offset": 38
    }
  ],
  "location": "Steps.iInputCropStatusAndOrganisation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsForHorticulturalPlantationsDeclaredUnderFPS()"
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
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
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
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
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
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
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
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
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
  "location": "Steps.iSelectAssignedForSmallPlanters()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
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
      "val": "This is a test",
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
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
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
  "location": "Steps.iSelectAssignedForSmallPlanters()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
      "val": "This is a test",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnPrintCard()"
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
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
  "duration": 984120100,
  "status": "passed"
});
formatter.after({
  "duration": 132500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1609,
      "value": "#Scenario8"
    }
  ],
  "line": 1611,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1610,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 1610,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1612,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1613,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1614,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1615,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1616,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1617,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1618,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1619,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1620,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1638,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1639,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Click on Add Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Input License No \"\u003cLicense\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Select Type of Owner \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1655,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1656,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1672,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1673,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1674,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1679,
      "value": "#    PWO"
    }
  ],
  "line": 1680,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1683,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1684,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1696,
      "value": "#    WPO"
    }
  ],
  "line": 1697,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1698,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1699,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1700,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1701,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1714,
      "value": "#    WO/WA"
    }
  ],
  "line": 1715,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1716,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1717,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1718,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1719,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1720,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1737,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1739,
      "value": "#    WPO"
    }
  ],
  "line": 1740,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1742,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1743,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1744,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1754,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1755,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1756,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1758,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1759,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1760,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1762,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1763,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1764,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1765,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1767,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1768,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 1769,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1770,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1771,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1777,
      "value": "#    WPO"
    }
  ],
  "line": 1778,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1780,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1781,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1782,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1783,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1784,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1785,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1786,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1787,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1788,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1789,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1790,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1791,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1794,
      "value": "#    IT Department"
    }
  ],
  "line": 1795,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1799,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1800,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1801,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1807,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1808,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1809,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1810,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1820,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Applicant_Title",
        "District",
        "Education_Level",
        "Act",
        "Other_Occupation",
        "Photo",
        "Year_dur",
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 1821,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 1822,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26000,
  "status": "passed"
});
formatter.scenario({
  "line": 1822,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1610,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 1610,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1612,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1613,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1614,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1615,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1616,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1617,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1618,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1619,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1620,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1638,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1639,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Click on Add Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Input License No \"Tea Grower\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Select Type of Owner \"Tenant\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1655,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1656,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1672,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1673,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1674,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    39,
    40,
    41,
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1679,
      "value": "#    PWO"
    }
  ],
  "line": 1680,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1683,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1684,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1696,
      "value": "#    WPO"
    }
  ],
  "line": 1697,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1698,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1699,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1700,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1701,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1714,
      "value": "#    WO/WA"
    }
  ],
  "line": 1715,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1716,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1717,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1718,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1719,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1720,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1737,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1739,
      "value": "#    WPO"
    }
  ],
  "line": 1740,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1742,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1743,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1744,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1754,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1755,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1756,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1758,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1759,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1760,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1762,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1763,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1764,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1765,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1767,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1768,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 1769,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1770,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1771,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1777,
      "value": "#    WPO"
    }
  ],
  "line": 1778,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1780,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1781,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1782,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1783,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1784,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1785,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1786,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1787,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1788,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1789,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1790,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1791,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1794,
      "value": "#    IT Department"
    }
  ],
  "line": 1795,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1799,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1800,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1801,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1807,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1808,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1809,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1810,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 5999209700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 138859800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1624904100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 38039400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1376991000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 16239400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 24754500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 21451100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 877970400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 20366200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 3018092600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 70109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2635545800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 1131160200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 36
    }
  ],
  "location": "Steps.iSelectApplicantEducationLevel(String)"
});
formatter.result({
  "duration": 3646591400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 171660500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 60498900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1753733800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1039666600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 3642178700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(@id,\u0027registration_membership_2\u0027)]\"}\n  (Session info: chrome\u003d129.0.6668.59)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.70 (df87d5cf12b1397be7495a04cab2db6239b227a8-refs/branch-heads/6668@{#1420}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir31764_713553758}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53530}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.59, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f97a6e8112ae1564811986cfc21a454c\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(@id,\u0027registration_membership_2\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Farmers_cooperatives_association_society_company.Two_Years(Farmers_cooperatives_association_society_company.java:167)\r\n\tat stepdefinition.Steps.iSelectNoOfYearsForRegistrationMembership(Steps.java:1434)\r\n\tat ✽.And I Select No of years for Registration membership \"2\"(features/US13280.feature:1631)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
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
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
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
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantationTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tea Grower",
      "offset": 20
    }
  ],
  "location": "Steps.iInputLicenseNo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.7",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectTypeOfOwner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfCrop()"
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
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
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
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
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
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
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
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
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
  "location": "Steps.iSelectPWOAssigned()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
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
      "val": "This is a test",
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
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
      "val": "This is a test",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnPrintCard()"
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
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
  "duration": 962857500,
  "status": "passed"
});
formatter.after({
  "duration": 596700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2080,
      "value": "#Scenario10"
    }
  ],
  "line": 2082,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2081,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 2081,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 2084,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2085,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2086,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2107,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2108,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2112,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2113,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2114,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Click on Add Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Verify Display of Particulars for Livestock Activity Table",
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Select Species \"\u003cSpicies\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Input Number of Male and Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Input Total Heads \"\u003cTotal_Heads\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Save Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Verify Display of Particulars for Cattle Page",
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Click on Add Particular of Cattle",
  "keyword": "And "
});
formatter.step({
  "line": 2130,
  "name": "I Verify Display of Particulars for Cattle Table",
  "keyword": "And "
});
formatter.step({
  "line": 2131,
  "name": "I Input Microchip Number \"\u003cMicrochip_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2132,
  "name": "I Select Cattle Sex \"\u003cCattle_Sex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Select Cattle Age \"\u003cCattle_Age\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Save Particulars for Cattle",
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2145,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2146,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2148,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2149,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2150,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2161,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 2162,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2174,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2175,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2176,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2177,
      "value": "#    PWO"
    }
  ],
  "line": 2178,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2179,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2193,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2194,
      "value": "#    WPO"
    }
  ],
  "line": 2195,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2196,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2197,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2212,
      "value": "#    WO/WA"
    }
  ],
  "line": 2213,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2214,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2220,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2221,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2222,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2229,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2230,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2231,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2237,
      "value": "#    WPO"
    }
  ],
  "line": 2238,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2239,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2240,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2241,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2242,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2243,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2244,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2245,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2246,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2256,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2257,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2258,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2259,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2260,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2261,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2262,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2263,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2264,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2265,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2266,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 2267,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2268,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2269,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2270,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 2271,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2272,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2273,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2275,
      "value": "#    WPO"
    }
  ],
  "line": 2276,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2277,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2278,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2279,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2280,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2281,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2282,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2283,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2284,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2285,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2286,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2287,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2288,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2289,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2290,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2292,
      "value": "#    IT Department"
    }
  ],
  "line": 2293,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2294,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2295,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2296,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2297,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2298,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2299,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2300,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2301,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2302,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2303,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2305,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2306,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2307,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2308,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2309,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2310,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2311,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2312,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2313,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2314,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2315,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2316,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2318,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Applicant_Title",
        "District",
        "Education_Level",
        "Act",
        "Other_Occupation",
        "Photo",
        "Year_dur",
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Spicies",
        "Male_Female_Number",
        "Total_Heads",
        "Reason",
        "Microchip_No",
        "Cattle_Sex",
        "Cattle_Age",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 2319,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "Cattle",
        "550",
        "550",
        "Meat",
        "AAA2563",
        "Male",
        "1Month",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 2320,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22600,
  "status": "passed"
});
formatter.scenario({
  "line": 2320,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 2081,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 2081,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 2084,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2085,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2086,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2107,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2108,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2112,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2113,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2114,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Click on Add Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Verify Display of Particulars for Livestock Activity Table",
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Select Species \"Cattle\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Input Number of Male and Female \"550\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Input Total Heads \"550\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Save Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Verify Display of Particulars for Cattle Page",
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Click on Add Particular of Cattle",
  "keyword": "And "
});
formatter.step({
  "line": 2130,
  "name": "I Verify Display of Particulars for Cattle Table",
  "keyword": "And "
});
formatter.step({
  "line": 2131,
  "name": "I Input Microchip Number \"AAA2563\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2132,
  "name": "I Select Cattle Sex \"Male\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Select Cattle Age \"1Month\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Save Particulars for Cattle",
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2145,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2146,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2148,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2149,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2150,
  "name": "I Upload Additional Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2161,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 2162,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    48,
    49,
    50,
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2174,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2175,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2176,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2177,
      "value": "#    PWO"
    }
  ],
  "line": 2178,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2179,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2193,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2194,
      "value": "#    WPO"
    }
  ],
  "line": 2195,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2196,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2197,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2212,
      "value": "#    WO/WA"
    }
  ],
  "line": 2213,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2214,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2220,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2221,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2222,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2229,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2230,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2231,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2237,
      "value": "#    WPO"
    }
  ],
  "line": 2238,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2239,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2240,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2241,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2242,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2243,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2244,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2245,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2246,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2256,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2257,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2258,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2259,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2260,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2261,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2262,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2263,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2264,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2265,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2266,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 2267,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2268,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2269,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2270,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 2271,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2272,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2273,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2275,
      "value": "#    WPO"
    }
  ],
  "line": 2276,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2277,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2278,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2279,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2280,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2281,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2282,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2283,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2284,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2285,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2286,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2287,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2288,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2289,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2290,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2292,
      "value": "#    IT Department"
    }
  ],
  "line": 2293,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2294,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2295,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2296,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2297,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2298,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2299,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2300,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2301,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2302,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2303,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2305,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2306,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2307,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2308,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2309,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2310,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2311,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2312,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2313,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2314,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2315,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2316,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 21530718400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 159966500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1553264600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 36143800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1338082800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 25123600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 14792300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 10370200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 885127200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 23381900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 2981861800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 74907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2700540200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 1133155400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3674694300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 121165200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 57400300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 2803725100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1028406300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 3631754100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(@id,\u0027registration_membership_2\u0027)]\"}\n  (Session info: chrome\u003d129.0.6668.59)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.70 (df87d5cf12b1397be7495a04cab2db6239b227a8-refs/branch-heads/6668@{#1420}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir35396_1187677140}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53557}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.59, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 663b929413f6650047ca67f5ba4d4bf0\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(@id,\u0027registration_membership_2\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Farmers_cooperatives_association_society_company.Two_Years(Farmers_cooperatives_association_society_company.java:167)\r\n\tat stepdefinition.Steps.iSelectNoOfYearsForRegistrationMembership(Steps.java:1434)\r\n\tat ✽.And I Select No of years for Registration membership \"2\"(features/US13280.feature:2103)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
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
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
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
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddLivestockActivity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForLivestockActivityTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cattle",
      "offset": 18
    }
  ],
  "location": "Steps.iSelectSpecies(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "550",
      "offset": 35
    }
  ],
  "location": "Steps.iInputNumberOfMaleAndFemale(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "550",
      "offset": 21
    }
  ],
  "location": "Steps.iInputTotalHeads(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Meat",
      "offset": 17
    }
  ],
  "location": "Steps.iSelectReason(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveLivestockActivity()"
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
  "location": "Steps.iVerifyDisplayOfParticularsForCattlePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddParticularOfCattle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForCattleTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA2563",
      "offset": 26
    }
  ],
  "location": "Steps.iInputMicrochipNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectCattleSex(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1Month",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectCattleAge(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsForCattle()"
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
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 46
    }
  ],
  "location": "Steps.iUploadCopyOfNationalIdentifyCardID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadExistingSFWFRegNoIfAny(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 29
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 57
    }
  ],
  "location": "Steps.iUploadCopyOfRegisteredNonRegisteredLeasePaper(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 99
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeedOfLandOwnerIncludingCooperativesForNonRegisteredLeasePaper(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 94
    }
  ],
  "location": "Steps.iUploadPreliminaryEnvironmentalReportBuildingAndLandUsePermitAndHealthClearance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 47
    }
  ],
  "location": "Steps.iUploadLocationPlanOfFarmIncludingSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 53
    }
  ],
  "location": "Steps.iUploadListOfTagsNosExceptPoultryAndPig(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 43
    }
  ],
  "location": "Steps.iUploadAnimalCardDVsWhereApplicable(String)"
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
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
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
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
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
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
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
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
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
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallBreedersRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
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
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
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
  "location": "Steps.iSelectPWOAssigned()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
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
      "val": "This is a test",
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
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
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
      "val": "This is a test",
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
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
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
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
      "val": "This is a test",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
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
  "location": "Steps.iClickOnPrintCard()"
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
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
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
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
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
  "duration": 948107600,
  "status": "passed"
});
formatter.after({
  "duration": 243900,
  "status": "passed"
});
});