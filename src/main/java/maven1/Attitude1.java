package maven1;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Attitude1 {
	
	/*
	 Normal expression = ([^\"]*)
	 Regular/Parameterized expression= \"([^\"]*)\" -very important
	 */
	
	

@Given("^there are \"([^\"]*)\" coffee left in the machine$")
public void Machine1(String s1) throws Throwable
{
    if(s1.equals("1"))
    {
    System.out.println("Green and Red");
    }
    
 
}
@And("^I have deposited \"([^\\\"]*)\" dollar$")
public void Machine2(String s2) throws Throwable
{
	if(s2.equals("1"))
	{
    System.out.println("Green and Red again");
	}
}
@When("^I press the coffee button$")
public void Machine3() throws Throwable
{
	System.out.println("Pressed");
}
@Then("^I should be served a coffee$")
public void Machine4() throws Throwable
{
	System.out.println("Coffee served again");
}

	}


