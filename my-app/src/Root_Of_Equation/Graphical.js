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

class Graphical extends Component{

    Cal_Graphicl(){
        var x = Number(document.getElementById("input_start").value);
        var end = Number(document.getElementById("input_end").value);
        var equation = document.getElementById("Equation").value;

        var scope = {x:x};
        var y1 = evaluate(equation,scope);

        for(x += 1; x<=end; x++){
            scope = { x:x };
            var y2 = evaluate(equation, scope);
            if(y1*y2 > 0){
                y1 = y2;
            } 
            else{
                break;
            }
        }

        
        var a = x-1;
        var b = x;
        scope = { x:a };
        var y3 = evaluate(equation, scope);
        while(y3!==0 && a<=b){
            a += 0.000001;
            scope = { x:a }
            y3 = evaluate(equation, scope);
            if(y3 >= 0.0){
                break;
            }
        }

        document.getElementById("ans").innerHTML=a;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Graphical</h1>
                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_start" type="number" placeholder="input start" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <Form.Control id="input_end" type="number" placeholder="input end" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <Button onClick={this.Cal_Graphical} style={{width:"10", margin:"0 auto"}}> Calculate </Button>
                        <br/><br/>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graphical;