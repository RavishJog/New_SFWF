package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Programme {
    private static WebElement element = null;

    //Objects
    //Object for Programmes
    private static By lbl_Programmes = By.xpath("//span[contains(.,'Programmes')]");
    public static WebElement Programmes(WebDriver driver) {
        element = driver.findElement(lbl_Programmes);
        return element;
    }

    //Object for Programme Type Page
    private static By lbl_Programme_page = By.xpath("//h1[contains(.,'Programme Type')]");
    public static WebElement Programme_page(WebDriver driver) {
        element = driver.findElement(lbl_Programme_page);
        return element;
    }
}

