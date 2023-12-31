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

class Newton_Raphson extends Component{

    Cal_Newton_Raphson(){
        var equation = document.getElementById("Equation").value;
        var x0 = parseFloat(document.getElementById("input_x0").value);
        var x1, xold, scope;
        var e = 0.00001;
        do{
            xold = x0;
            scope = { x:x0 };
            x1 = x0 + evaluate(equation, scope); // newraph เพิ่ม x0
            x0 = x1;

        }while((Math.abs((x1-xold) / x1) * 100) >= e);
        
        document.getElementById("ans").innerHTML=x1;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Newton Raphson</h1>
                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_x0" type="number" placeholder="input X0" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <Button onClick={this.Cal_Newton_Raphson} style={{width:"10", margin:"0 auto"}}> Calculate </Button>
                        <br/><br/>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newton_Raphson;