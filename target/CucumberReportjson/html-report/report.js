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
      "line": 887,
      "value": "#Scenario5"
    }
  ],
  "line": 889,
  "name": "Payment at counter for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    },
    {
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 894,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 895,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 896,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 897,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 898,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 899,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 900,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 901,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 902,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 903,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 904,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 905,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 906,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 909,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 910,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 912,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 913,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 915,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 916,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 917,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 918,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 919,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 920,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 921,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 922,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 923,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 924,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 925,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 926,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 927,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 928,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 929,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 934,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 935,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 936,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 937,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 938,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 939,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 940,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 941,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 942,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 943,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 944,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 945,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 946,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 947,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 948,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 949,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 950,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 951,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 952,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 953,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 954,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 955,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 956,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 964,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 965,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 968,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 969,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 970,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 977,
      "value": "#    Finance"
    }
  ],
  "line": 978,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 987,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 988,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 989,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 993,
      "value": "#    PWO"
    }
  ],
  "line": 994,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1003,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1004,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1005,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1010,
      "value": "#    WPO"
    }
  ],
  "line": 1011,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1028,
      "value": "#    WO/WA"
    }
  ],
  "line": 1029,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1030,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1031,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1032,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1049,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1050,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1051,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1052,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1053,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1055,
      "value": "#    WPO"
    }
  ],
  "line": 1056,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1068,
      "value": "#    And I Verify Success Message for Under Query Notification"
    }
  ],
  "line": 1069,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1070,
      "value": "#    And I Verify for success message for workflow saved"
    }
  ],
  "line": 1071,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1072,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1074,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1075,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1076,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1077,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1088,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1089,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1093,
      "value": "#    WPO"
    }
  ],
  "line": 1094,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1095,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1096,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1100,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1101,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1102,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1103,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1104,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1106,
      "value": "#    And I Verify for success message for approval"
    }
  ],
  "line": 1107,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1110,
      "value": "#    IT Department"
    }
  ],
  "line": 1111,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1112,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1113,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1114,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1115,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1116,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1117,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1118,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1119,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1120,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1121,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1123,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1124,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1125,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1126,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1127,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1128,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1136,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;",
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
        "Payment_method"
      ],
      "line": 1137,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;1"
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
        "Counter"
      ],
      "line": 1138,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 162100,
  "status": "passed"
});
formatter.scenario({
  "line": 1138,
  "name": "Payment at counter for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2",
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
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration"
    },
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 894,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 895,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 896,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 897,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 898,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 899,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 900,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 901,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 902,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 903,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 904,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 905,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 906,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 909,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 910,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 912,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 913,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 915,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 916,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 917,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 918,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 919,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 920,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 921,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 922,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 923,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 924,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 925,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 926,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 927,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 928,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 929,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 934,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 935,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 936,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 937,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 938,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 939,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 940,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 941,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 942,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 943,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 944,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 945,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 946,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 947,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 948,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 949,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 950,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 951,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 952,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 953,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 954,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 955,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 956,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 964,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 965,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 968,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 969,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 970,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 977,
      "value": "#    Finance"
    }
  ],
  "line": 978,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 987,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 988,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 989,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 993,
      "value": "#    PWO"
    }
  ],
  "line": 994,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1003,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1004,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1005,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1010,
      "value": "#    WPO"
    }
  ],
  "line": 1011,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1028,
      "value": "#    WO/WA"
    }
  ],
  "line": 1029,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1030,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1031,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1032,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1049,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1050,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1051,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1052,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1053,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1055,
      "value": "#    WPO"
    }
  ],
  "line": 1056,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1068,
      "value": "#    And I Verify Success Message for Under Query Notification"
    }
  ],
  "line": 1069,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1070,
      "value": "#    And I Verify for success message for workflow saved"
    }
  ],
  "line": 1071,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1072,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1074,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1075,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1076,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1077,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1088,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1089,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1093,
      "value": "#    WPO"
    }
  ],
  "line": 1094,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1095,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1096,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1100,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1101,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1102,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1103,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1104,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1106,
      "value": "#    And I Verify for success message for approval"
    }
  ],
  "line": 1107,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1110,
      "value": "#    IT Department"
    }
  ],
  "line": 1111,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1112,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1113,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1114,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1115,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1116,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1117,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1118,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1119,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1120,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1121,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1123,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1124,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1125,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1126,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1127,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1128,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
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
  "duration": 41047453600,
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
  "duration": 178872400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1623203500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 56782800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1095629400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 29811700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 24633800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13075200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 461341300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 15349100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 2983994000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 54974100,
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
  "duration": 2661844700,
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
  "duration": 4333261500,
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
  "duration": 3663098100,
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
  "duration": 124074100,
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
  "duration": 74389500,
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
  "duration": 1811854600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1031620100,
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
  "duration": 5708499700,
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
  "duration": 1620657400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6162147200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 97957000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3103361300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3073224600,
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
  "duration": 2663759900,
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
  "duration": 79719500,
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
  "duration": 69390300,
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
  "duration": 1642828100,
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
  "duration": 5968697200,
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
  "duration": 98110400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 75200800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 53240100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 51298800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6165634900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 57201500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3118358100,
  "status": "passed"
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
  "duration": 623369200,
  "status": "passed"
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
  "duration": 1645357000,
  "status": "passed"
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
  "duration": 2123886000,
  "status": "passed"
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
  "duration": 1631646200,
  "status": "passed"
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
  "duration": 72866100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6175206400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 85755000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 83116400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 63648200,
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
  "duration": 3729051200,
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
  "duration": 1126175000,
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
  "duration": 1124202600,
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
  "duration": 4208886200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10061823400,
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
  "duration": 40803900,
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
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 46237300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2678768200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2269943900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 596277900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 647217600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5187365000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2102793600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8075531500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7932868100,
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
  "duration": 2016774100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 164689300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 568223100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 41116800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 60679900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1552361100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1559410400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 52275400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1558705300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 11118869400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4356551500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 942323500,
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
  "duration": 1868969400,
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
  "duration": 152731900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2126735500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 49168900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 57396400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1548055000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2087665700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5264728900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4425895400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 6405129800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1612608200,
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
  "duration": 10106242700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 71141300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5351252700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4355124500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 938063400,
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
  "duration": 2086029700,
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
  "duration": 194026900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2335077200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 44928100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 56681500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1545676400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2070992000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5298101700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4971399600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 1629718600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1671210200,
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
  "duration": 10107056600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 68242600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4815970400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4349367800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 919452800,
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
  "duration": 1903180800,
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
  "duration": 192620500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 429178600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 1879386100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 62754800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1549377800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2069233800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5294239400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 87615500,
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
  "duration": 54337000,
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
  "duration": 83740900,
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
  "duration": 10203169800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForBonafideDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 13270500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAddInformationForCropDetailsInSectionOne()"
});
formatter.result({
  "duration": 36489522800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectDripIrrigationFacilityInSectionTwo()"
});
formatter.result({
  "duration": 10334678300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 4894354000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 13373600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5079275700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 1627376500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1766422800,
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
  "duration": 10137540200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 68331300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4866358400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4330481300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 947932600,
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
  "duration": 1951519000,
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
  "duration": 166576300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2701944200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 49802600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 56713700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1540388400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2064359100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6870167100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4429765300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 5913534300,
  "status": "passed"
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
  "duration": 76378700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "duration": 10358650400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: (//span[contains(.,\u0027Mail has been sent successfully\u0027)])[3] (tried for 10 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.70 (df87d5cf12b1397be7495a04cab2db6239b227a8-refs/branch-heads/6668@{#1420}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir21436_2013026166}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54705}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.60, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 868d81de5789b60a7d3aff8d47254db4\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iClickOnUnderQueryNotification(Steps.java:2261)\r\n\tat ✽.And I Click on Under Query Notification(features/US13280.feature:1067)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
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
  "duration": 986736400,
  "status": "passed"
});
formatter.after({
  "duration": 308700,
  "status": "passed"
});
});