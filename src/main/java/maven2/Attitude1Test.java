package maven2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/maven2",tags={"@Tester"},
glue= {"maven2"},plugin = {"pretty","html:src/dryrun1"},monochrome=true)
public class Attitude1Test {

}