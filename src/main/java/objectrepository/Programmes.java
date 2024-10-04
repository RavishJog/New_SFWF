package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Programmes {

    private static WebElement element = null;


    //Object for Username
    private static By lbl_programme = By.xpath("(//span[contains(.,'Programmes')])[1]");
    public static WebElement programme_lbl(WebDriver driver) {
        element = driver.findElement(lbl_programme);
        return element;
    }

}

