package maven2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/maven1",tags={"@Tester"},
glue= {"maven1"},plugin = {"pretty","html:src/maven1"},monochrome=true)
public class Attitude1Test {

}