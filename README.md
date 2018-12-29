# Gridder
A simple HTML table creator based on Jquery

USER GUIDE
1) import Gridder.js on your page
2) Create a container (example "model-list") where the library will inject the table
3)    $("#model-list").gridder(
        {
            
        });
 Call the Gridder function similar to jquery call back function (Gridder is a Jquery based library).
 
 4) Pass data to the function:
            headerText: new Array("Header1", "Header2",...), -> Header text of the table
            propertyName: new Array("ModelName", "ModelNumberOfAxels", "ModelDiameter"), -> this name must be equal with the data property             name in the call data path
            path: "/User/ModelList", -> The path that call the data
            key: "Guid", -> The Name of the hide value in the each row in the table
            value: "@Model.Guid", -> The "connection" of the hide value in the each row in the table
            tableTemplate: "table-dark", -> table bootstrap template
            
4) The library will inject the table in the container, in this case "#model-list"         

Please use "row" visualization for this file

Thanks!
 
