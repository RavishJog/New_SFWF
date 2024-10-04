package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FSS {
    private static WebElement element = null;

    //Objects
    //Object for Fertilizer
    private static By lbl_Fertilizer_Scheme = By.xpath("//a[contains(.,'Click to Apply for Fertiliser Subsidy Scheme (FSS)')]");
    public static WebElement Fert_Scheme(WebDriver driver) {
        element = driver.findElement(lbl_Fertilizer_Scheme);
        return element;
    }


}
