import React,{Component} from "react";
import Header from "../../common/header/index.js";
import {Div0,Divtop,Divleft,Divright} from'./style';
import DataTop from "../../common/main2/Datatop/index.js";
import DataDraw from "../../common/main2/DataDraw/index.js";
import SelectList from "../../common/main2/ListTop/index.js";
import DataSheet from "../../common/main2/DataSheet/index.js";
class MainPage2 extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Div0>
                    <Divtop>
                        <SelectList></SelectList>
                    </Divtop>
                    <Divleft>
                        <DataTop/>
                        <DataDraw/>
                    </Divleft>
                    <Divright>
                        <DataSheet/>
                    </Divright>
                </Div0>
            </div>
        )}}
export default MainPage2;