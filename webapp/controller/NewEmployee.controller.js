sap.ui.define([
    "./BaseController",
    "sap/ui/core/routing/History"
], function (BaseController, History) {
    "use strict";
    return BaseController.extend("employeeSkillsV4.empskillsv4.controller.NewEmployee", {
        onNavBack : function() {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                // eslint-disable-next-line sap-no-history-manipulation
                history.go(-1);
            } else {
                this.getRouter().navTo("worklist", {}, true);
            }
        },
        onSave: function (oEvent) {
            var oModel = this.getView().getModel();
            var aBindings = oModel.getAllBindings();
            var employeeListBinding = oModel.bindList('/Employees')
            var oContext = employeeListBinding.create({
                "FirstName": this.getView().byId("FirstName").getProperty("value"),
                "LastName": this.getView().byId("LastName").getProperty("value")
            })
        }
    });
});