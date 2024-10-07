package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BFSS {
    private static WebElement element = null;

    //objects
    //objects for Bio scheme
    private static By lbl_BFSS_Scheme = By.xpath("//a[contains(.,'Click to Apply for Bio Farming Support Scheme (BFSS)')]");
    public static WebElement Bio_Scheme(WebDriver driver) {
        element = driver.findElement(lbl_BFSS_Scheme);
        return element;
    }
}
