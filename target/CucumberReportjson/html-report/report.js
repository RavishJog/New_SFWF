$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280_GOC.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280-GOC - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration",
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
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    },
    {
      "line": 3,
      "name": "@GOC"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1796,
      "value": "#      |Edge |Suraj_Jo|Admin@123|Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |Mrs              |Port Louis|Tertiary        |Full Time|Manager           |src\\test\\resources\\Photo_upload.jpg |2        |Married       |Spouse      |Keen           |Dafne            |Female|1Jan94|Actress    |Tea Grower |2.7        |Tenant    |Moka          |src\\test\\resources\\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Credit         |5123-4500-0000-0008|01           |39         |100          |My name        |ACC5896   |"
    },
    {
      "line": 1799,
      "value": "#Scenario9"
    }
  ],
  "line": 1801,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1800,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    },
    {
      "line": 1800,
      "name": "@Smoke_counter_for_Registration_as_Small_Breeder_GOC"
    }
  ]
});
formatter.step({
  "line": 1803,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1804,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1805,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1825,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1826,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1827,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1828,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1829,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1830,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1831,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1832,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1833,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1834,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1835,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1836,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Input Number of Cow Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Upload Additional Document for small breeder \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1865,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1866,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1867,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1868,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1880,
      "value": "#    Finance"
    }
  ],
  "line": 1881,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1894,
      "value": "#    PWO"
    }
  ],
  "line": 1895,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1897,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1898,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1899,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1910,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1912,
      "value": "#    WPO"
    }
  ],
  "line": 1913,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1915,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1916,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1917,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1920,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1921,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1922,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1923,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1927,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1928,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1930,
      "value": "#    WO/WA"
    }
  ],
  "line": 1931,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1941,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1942,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1943,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1944,
  "name": "I Input Section One data \"\u003cBreeder_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1945,
  "name": "I Click on Save Button for Small Breeder",
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Verify Site Visit saved success message for Small Breeder",
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1956,
      "value": "#    WPO"
    }
  ],
  "line": 1957,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1960,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1961,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1962,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1963,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1964,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1975,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1976,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1977,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1978,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1979,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1980,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1981,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1986,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1987,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1988,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1996,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1998,
      "value": "#    WPO"
    }
  ],
  "line": 1999,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2005,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2006,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2007,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2008,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2009,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2010,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2011,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2012,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2013,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2015,
      "value": "#    IT Department"
    }
  ],
  "line": 2016,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2022,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2023,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2024,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2028,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2029,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2030,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2031,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2032,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2033,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2034,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2041,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;",
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
        "Breeder_Type"
      ],
      "line": 2042,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
        "10",
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
        "Counter",
        "Cattle"
      ],
      "line": 2043,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 165600,
  "status": "passed"
});
formatter.before({
  "duration": 31600,
  "status": "passed"
});
formatter.scenario({
  "line": 2043,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2",
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
      "line": 1800,
      "name": "@Smoke_counter_for_Registration_as_Small_Breeder_GOC"
    },
    {
      "line": 3,
      "name": "@GOC"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1800,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 1803,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1804,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1805,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1825,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1826,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1827,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1828,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1829,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1830,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1831,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1832,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1833,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1834,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1835,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1836,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Input Number of Cow Female \"10\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Upload Additional Document for small breeder \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1865,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1866,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1867,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1868,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1880,
      "value": "#    Finance"
    }
  ],
  "line": 1881,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1894,
      "value": "#    PWO"
    }
  ],
  "line": 1895,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1897,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1898,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1899,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1910,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1912,
      "value": "#    WPO"
    }
  ],
  "line": 1913,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1915,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1916,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1917,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1920,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1921,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1922,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1923,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1927,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1928,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1930,
      "value": "#    WO/WA"
    }
  ],
  "line": 1931,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1941,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1942,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1943,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1944,
  "name": "I Input Section One data \"Cattle\"",
  "matchedColumns": [
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1945,
  "name": "I Click on Save Button for Small Breeder",
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Verify Site Visit saved success message for Small Breeder",
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1956,
      "value": "#    WPO"
    }
  ],
  "line": 1957,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1960,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1961,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1962,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1963,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1964,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1975,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1976,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1977,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1978,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1979,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1980,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1981,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1986,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1987,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1988,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1996,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1998,
      "value": "#    WPO"
    }
  ],
  "line": 1999,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2005,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2006,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2007,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2008,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2009,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2010,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2011,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2012,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2013,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2015,
      "value": "#    IT Department"
    }
  ],
  "line": 2016,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2022,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2023,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2024,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2028,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2029,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2030,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2031,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2032,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2033,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2034,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 4853219800,
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
  "duration": 7911408900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 59842500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1881332700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 404238500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 10612000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 15245800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16058800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 221448300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 222834400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 2575562400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 53358200,
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
  "duration": 2671204000,
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
  "duration": 5958122100,
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
  "duration": 3684561700,
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
  "duration": 192385300,
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
  "duration": 73986200,
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
  "duration": 733790400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1032847600,
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
  "duration": 4163895800,
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
  "duration": 1636415400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9193905100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 82770300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3116603100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3081622400,
  "status": "passed"
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
  "duration": 2684354300,
  "status": "passed"
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
  "duration": 60648500,
  "status": "passed"
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
  "duration": 69998900,
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
  "duration": 1684455600,
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
  "duration": 5946643400,
  "status": "passed"
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
  "duration": 106708500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 76821700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 72274400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 54958200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9208496700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 117831700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "Steps.iInputNumberOfCowFemale(String)"
});
formatter.result({
  "duration": 1127257700,
  "status": "passed"
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
  "duration": 1686895500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9166477200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 120042734200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //h6[contains(text(),\u0027Upload Required Documents\u0027)] (tried for 120 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed(Steps.java:729)\r\n\tat ✽.And I Verify Upload Required Documents Page is displayed(features/US13280_GOC.feature:1842)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //h6[contains(text(),\u0027Upload Required Documents\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTJAYSHIL\u0027, ip: \u0027192.168.8.206\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed(Steps.java:729)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
      "offset": 48
    }
  ],
  "location": "Steps.iUploadAdditionalDocumentForSmallBreeder(String)"
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
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
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
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
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
  "location": "Steps.iSelectOptionAssigned()"
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
  "location": "Steps.iSelectOptionAssigned()"
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
  "arguments": [
    {
      "val": "Cattle",
      "offset": 26
    }
  ],
  "location": "Steps.iInputSectionOneData(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectOptionAssigned()"
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
  "location": "Steps.iSelectOptionUnderQuery()"
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
  "location": "Steps.iClickOnUnderQueryNotificationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryMailNotification()"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
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
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
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
  "location": "Steps.iSelectOptionApprovedToApproveTheRegistrationApplication()"
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
  "duration": 1083517600,
  "status": "passed"
});
formatter.after({
  "duration": 59610900,
  "status": "passed"
});
});