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
            var value1=parseInt(this.getView().byId("idVal1").getValue());
            var value2=parseInt(this.getView().byId("idVal2").getValue());
            var total=value1+value2;
            // MessageBox.alert("Total of two numbers " + total, {
            //     title: "Alert",                                      // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     actions: sap.m.MessageBox.Action.OK,                 // default
            //     emphasizedAction: sap.m.MessageBox.Action.OK,        // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

         // sap.m.MessageToast.show();
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

            //  alert("Total of two numbers " + total);
           // console.log(total);
            

        }
    });
});