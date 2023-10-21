import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Lagrange extends Component{
    constructor(){
        super();
        let i = 0;
        // document.getElementById("arr_x").innerHTML=i;
    }

    Cal_Linear_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Linear_L = [];
        var Linear_ans;
        var start = document.getElementById("Linear_Inputp1").value;
        var end = document.getElementById("Linear_Inputp2").value;
        var p1 = Number(start);
        var p2 = Number(end);

        if(p1 !== 0 || p2 !== 0){
            const Linear_cal = (p1,p2) =>{
                Linear_L[0] = ((x[p2] - xvalue) / (x[p2] - x[p1])) * y[p1];
                Linear_L[1] = ((x[p1] - xvalue) / (x[p1] - x[p2])) * y[p2];
                Linear_ans = Linear_L[0] + Linear_L[1];
            }
            Linear_cal(p1,p2);
            document.getElementById("Linear").innerHTML=Linear_ans;
        }
    }

    Cal_Quadtic_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Quadratic_L = [];
        var Quadratic_ans;
        var x1 = document.getElementById("Quadtic_Inputp1").value;
        var x2 = document.getElementById("Quadtic_Inputp2").value;
        var x3 = document.getElementById("Quadtic_Inputp3").value;
        var p1 = Number(x1);
        var p2 = Number(x2);
        var p3 = Number(x3);

        if(p2 > p1 && p3 > p2){ // input 1 , 2 , 3
            const Quadratic_cal = (p1,p2,p3) =>{
                Quadratic_L[0] = ((x[p2] - xvalue) / (x[p2] - x[p1]) * (x[p3] - xvalue) / (x[p3] - x[p1])) * y[p1];
                Quadratic_L[1] = ((x[p1] - xvalue) / (x[p1] - x[p2]) * (x[p3] - xvalue) / (x[p3] - x[p2])) * y[p2];
                Quadratic_L[2] = ((x[p1] - xvalue) / (x[p1] - x[p3]) * (x[p2] - xvalue) / (x[p2] - x[p3])) * y[p3];
                Quadratic_ans = Quadratic_L[0] + Quadratic_L[1] + Quadratic_L[2];
            }
            Quadratic_cal(p1,p2,p3);
            document.getElementById("Quadratic").innerHTML=Quadratic_ans;
        }
    }

    Cal_Polynomial_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Polynomial_L = [];
        var Polynomial_ans = 0;
        var start = document.getElementById("Polynomial_Inputstart").value;
        var end = document.getElementById("Polynomial_Inputend").value;
        var s = Number(start);
        var e = Number(end);

        if(s !== 0 || e !== 0){
            const Polynomial_cal = (start, end) =>{
                const n = end - start;

                for(let i = start; i<=n; i++){
                    var term = 1;
                    for(let j = start; j<=n; j++){
                        if(j === i){
                            continue;
                        }
                        term *= (x[j] - xvalue) / (x[j] - x[i]);
                    }
                    Polynomial_L[i] = term * y[i];
                }
                for(let i = 0; i<=n; i++){
                    Polynomial_ans += Polynomial_L[i];
                }
            }
            Polynomial_cal(s,e);
            document.getElementById("Polynomial").innerHTML=Polynomial_ans;
        }
    }

    render(){
        
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Lagrange Interpolation</h1>
                        <br/>

                        <div>
                            
                            <h>x = </h>
                            <h style={{color:'green'}} id="arr_x">  </h>
                        </div>

                        <br/>

                        <div>
                            <Form.Control id="Linear_Inputp1" type="number" placeholder="input x1" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Linear_Inputp2" type="number" placeholder="input x2" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div>
                            <Button onClick={this.Cal_Linear_interpolate} style={{width:"7%", margin:"0 auto"}}>
                                Calculate
                            </Button>
                            <br/><br/>

                            <h>Linear = </h>
                            <h style={{color:'green'}} id="Linear">  </h>
                        </div>

                       

                        <br/><br/>

                        <div>
                            <Form.Control id="Quadtic_Inputp1" type="number" placeholder="input x1" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Quadtic_Inputp2" type="number" placeholder="input x2" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Quadtic_Inputp3" type="number" placeholder="input x3" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div>
                            <Button onClick={this.Cal_Quadtic_interpolate} style={{width:"7%", margin:"0 auto"}}>
                                Calculate
                            </Button>
                            <br/><br/>

                            <h>Quadratic = </h>
                            <h style={{color:'green'}} id="Quadratic">  </h>
                        </div>
                        
                        <br/><br/>

                        <div>
                            <Form.Control id="Polynomial_Inputstart" type="number" placeholder="input start" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Polynomial_Inputend" type="number" placeholder="input end" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div>
                            <Button onClick={this.Cal_Polynomial_interpolate} style={{width:"7%", margin:"0 auto"}}>
                                Calculate
                            </Button>
                            <br/><br/>

                            <h>Quadratic = </h>
                            <h style={{color:'green'}} id="Polynomial">  </h>
                        </div>

                        <br/><br/>

                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Lagrange;