package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class New_Programme {
    private static WebElement element = null;

    //objects
    //objects for New Programmes
    private static By lbl_New_Programmes = By.xpath("//span[contains(.,'New Programmes')]");
    public static WebElement New_Programmes(WebDriver driver) {
        element = driver.findElement(lbl_New_Programmes);
        return element;
    }
}
