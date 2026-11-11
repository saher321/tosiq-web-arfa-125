someproject
config
    db file
controllers
    application logic (functions)
model
    schema / blueprint of collection
routes
    url create
middlewares
    checks / permission
utils
    helper function 

.env
    confidentials data
index.js
    main app process
package.json
    project schema / pkgs

    --------------

    Modular approch

    config
        db file
    modules
        cms
            file.controller.js
            file.model.js
            file.routes.js
            dummyData.json
        inventory
        accounts
        employees
    utils
    middlewares
        checks / permission

---------------
REQUEST METHODS

GET
POST
DELETE
PUT / PATCH