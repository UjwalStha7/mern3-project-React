import Button from "./Button";
import Card from "./Card";
import './Test.css'

function Test(){
  return(
    <> 
        <div className="button-wrapper">
            <Button text="Register" />
            <Button text="Login" />
            <Button text="Logout" />
        </div>
        <div className="card-wrapper">
            <Card text="Card 1" Name="Ujwal Shrestha"/>
            <Card text="Card 2" Name="John Gurung"/>
            <Card text="Card 3" Name="Shirsh Gurung"/>
        </div>
    </>
  )
}

export default Test;