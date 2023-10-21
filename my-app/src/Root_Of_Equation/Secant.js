import {React, Component} from"react";
import {Button, Form} from"react-bootstrap";
import {evaluate} from"mathjs";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Secant extends Component{

    Cal_Secant(){
        var x0 = Number(document.getElementById("input_x0").value);
        var equation = document.getElementById("Equation").value;
        var x1 = 0;
        var xcheck, x2, scope;
        var e = 0.000001;
        do{
            xcheck = x1;
            scope = { x:x0 };
            var y0 = evaluate(equation, scope);
            scope = { x:x1 };
            var y1 = evaluate(equation, scope);
            x2 = x0 - (y0*(x0 - x1)) / (y0 - y1);
            x0 = x1;
            x1 = x2;
        }while(Math.abs((x2 - xcheck)/x2)*100 >= e);

        document.getElementById("ans").innerHTML=x2;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Secant</h1>
                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_x0" type="number" placeholder="input X0" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <Button onClick={this.Cal_Secant} style={{width:"10", margin:"0 auto"}}> Calculate </Button>
                        <br/><br/>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Secant;