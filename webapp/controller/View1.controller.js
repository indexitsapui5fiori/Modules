sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("org.indexit.zui5.controller.View1", {
        onInit() {
            // On the initiazation of UI5 application
        },
        onClick(){
            // debugger;
            // Defaut function
           // console.log("Defination of events from the button control idBtn");
           //Requirement 
           //1 : value of my input control
            //2: Take the value of input and display to the user when clicked
           //Not recommended 
           // var InputData=this.getView().byId("idInput").mProperties.value;
           //var btnText = this.getView().byId("idBtn").mProperties.text;

           //Recommended standard
           var inputValue= this.getView().byId("idInput").getValue();
           var btnText=this.getView().byId("idBtn").getText();
           var msgData = btnText+inputValue;
           console.log(msgData);
           var clearMessage="Thank you";
           this.getView().byId("idInput").setValue(""+clearMessage);


        },
        ButtonEvent(){
             //Defination of events from the button control for idBtn1

        },
        // onClick:function(){

        // }

        onAddition:function(){

           // Values, Operators, Expressions, Keywords, and Comments.
            var value1=parseInt(this.getView().byId("idVal1").getValue());
            var value2=parseInt(this.getView().byId("idVal2").getValue());
            var total=value1+value2;
           
         var sMessage="Total of two numbers " + total;
         var mOptions={
            duration: 3000,                  // default
            width: "15em",                   // default
            my: "center bottom",             // default
            at: "center bottom",             // default
            of: window,                      // default
            offset: "0 0",                   // default
            collision: "fit fit",            // default
            onClose: null,                   // default
            autoClose: true,                 // default
            animationTimingFunction: "ease", // default
            animationDuration: 1000,         // default
            closeOnBrowserNavigation: true   // default
         };

         sap.m.MessageToast.show(sMessage, mOptions);
            this.getView().byId("idVal1").setValue("");
            this.getView().byId("idVal2").setValue("");

         
        },
        onSubstration:function(){
            var value1=parseInt(this.getView().byId("idVal1").getValue());
            let value2=parseInt(this.getView().byId("idVal2").getValue());
            var total=value1-value2;
            var sMessage="Total of two numbers " + total;
            var mOptions={
            duration: 3000,                  // default
            width: "15em",                   // default
            my: "center bottom",             // default
            at: "center bottom",             // default
            of: window,                      // default
            offset: "0 0",                   // default
            collision: "fit fit",            // default
            onClose: null,                   // default
            autoClose: true,                 // default
            animationTimingFunction: "ease", // default
            animationDuration: 1000,         // default
            closeOnBrowserNavigation: true   // default
         };

            sap.m.MessageToast.show(sMessage, mOptions);
            this.getView().byId("idVal1").setValue("");
            this.getView().byId("idVal2").setValue("");
        },
        onOperation:function(oEvent){
            let value1=parseInt(this.getView().byId("idVal1").getValue());
            let value2=parseInt(this.getView().byId("idVal2").getValue());
            let btnText=oEvent.getSource().getProperty("text");

            
            // var btnTextAdd=this.getView().byId("idAdd").getText();
            // var btnTextSub=this.getView().byId("idSub").getText();
            // var btnTextMul=this.getView().byId("idMul").getText();
            // var btnTextDiv=this.getView().byId("idDiv").getText();

            // if(btnText=="Addition"){
            //     let Add= value1+value2;
            //     MessageBox.show("Addition of two number :" +Add);
            //     this.getView().byId("idVal1").setValue("");
            //     this.getView().byId("idVal2").setValue("");
            // }
            // else{
            //     if(btnText=="Substraction"){
            //         let Sub= value1-value2;
            //         MessageBox.show("Substraction of two number :" + Sub);
            //         this.getView().byId("idVal1").setValue("");
            //         this.getView().byId("idVal2").setValue("");
            //     }

            // }


            // let Add= value1+value2;
            // let Sub= value1-value2;
            // let Mul= value1*value2;
            // let Div= value1/value2;

            switch(btnText) {
                case "Addition":
                        let Add = value1+value2;
                        MessageBox.show("Addition of two number :" + Add);
                        this.getView().byId("idVal1").setValue("");
                        this.getView().byId("idVal2").setValue("");
                  break;
                case "Substraction":
                    let Sub= value1-value2;
                    MessageBox.show("Substraction of two number :" + Sub);
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                  break;
                  case "Multiplication":
                    let Mul= value1*value2;
                    MessageBox.show("Multiplication of two number :" + Mul);
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                  break;
                  case "Divsion":
                    let Div= value1/value2;
                    MessageBox.show("Divsion of two number :" + Div);
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                  break;
                default:
                    MessageBox.show("Please select the operator for operation");
              }


        }
    });
});