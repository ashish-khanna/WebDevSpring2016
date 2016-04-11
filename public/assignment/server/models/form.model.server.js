/**
 * Created by Ashish on 3/19/2016.
 */
//var mock = require("./form.mock.json");

// load q promise library
var q = require("q");

var uuid = require('node-uuid');
//var fieldTemplates = require("./field-templates.mock.json");

module.exports = function(db, mongoose) {

    // load user schema
    var FormSchema = require("./form.schema.server.js")(mongoose);

    // create user model from schema
    var FormModel = mongoose.model('FormModel', FormSchema);


    var api = {
        findFormByTitle: findFormByTitle,
        createFormForUser: createFormForUser,
        findFormById: findFormById,
        findAllFormsForUser: findAllFormsForUser,
        deleteFormById: deleteFormById,
        updateFormById: updateFormById,
        getFieldsForForm: getFieldsForForm,
        getFieldForForm: getFieldForForm,
        deleteFieldFromForm: deleteFieldFromForm,
        createFieldForForm: createFieldForForm,
        updateField: updateField,
        getFieldTemplateType: getFieldTemplateType
    };
    return api;

    //function findFormByTitle(title) {
    //    for (var f in mock) {
    //        if (mock[f].title === title) {
    //            return mock[f];
    //        }
    //    }
    //    return null;
    //}

    function createFormForUser(userId, form) {
        var deferred = q.defer();

        form["userId"] = userId;

        FormModel.create(form,
            function(err, doc) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(doc);
                }
            }
        );
        return deferred.promise;
    }

    function findFormById(formId) {
        var deferred = q.defer();
        FormModel.findById(formId,
            function(err, doc) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function findAllFormsForUser(userId) {
        var deferred = q.defer();

        FormModel.find({ "userId" : userId },
            function(err, doc) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(doc);
                }
            }
        );
        return deferred.promise;
    }

    function deleteFormById(formId) {
        var deferred = q.defer();

        FormModel.remove(
            {_id: formId},
            function(err, stats) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(findAllFormsForUser);
                }
            }
        );
        return deferred.promise;

    }

    function updateFormById(formId, newForm) {
        var deferred = q.defer();

        FormModel.update(
            {_id: formId},
            {$set: newForm},
            function(err, stats) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    FormModel.findById(formId,
                        function(err, doc) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(doc);
                            }
                        });
                }
            });
        return deferred.promise;
    }

    function getFieldsForForm(formId) {
        var deferred = q.defer();

        FormModel.findById(formId,
            function(err, form) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(form.fields);
                }
            });
        return deferred.promise;
    }

    //function getFieldForForm(formId, fieldId) {
    //    for (var f in mock) {
    //        if (mock[f]._id == formId) {
    //            for (var i = 0; i < mock[f].fields.length; i++) {
    //                if (mock[f].fields[i]._id == fieldId) {
    //                    return mock[f].fields[i];
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //}

    //function deleteFieldFromForm(formId, fieldId) {
    //    for (var f in mock) {
    //        if (mock[f]._id == formId) {
    //            for (var i = 0; i < mock[f].fields.length; i++) {
    //                if (mock[f].fields[i]._id == fieldId) {
    //                    mock[f].fields.splice(i, 1);
    //                    return mock[f].fields;
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //}

    //function getFieldTemplateType(fieldType) {
    //    for (var f in fieldTemplates) {
    //        if (fieldTemplates[f].type.toLowerCase() == fieldType.toLowerCase()) {
    //            fieldTemplates[f]._id = uuid.v4();
    //            return fieldTemplates[f];
    //        }
    //    }
    //    return null;
    //}

    //function createFieldForForm(formId, field) {
    //    field._id = uuid.v4();
    //
    //    for (var f in mock) {
    //        if (mock[f]._id == formId) {
    //            mock[f].fields.push(field);
    //            return mock[f].fields;
    //        }
    //    }
    //    return null;
    //}

    //function updateField(formId, fieldId, field) {
    //    for (var f in mock) {
    //        if (mock[f]._id == formId) {
    //            for (var i = 0; i < mock[f].fields.length; i++) {
    //                if (mock[f].fields[i]._id == fieldId) {
    //                    mock[f].fields[i].label = field.label;
    //                    mock[f].fields[i].placeholder = field.placeholder;
    //                    if (field.options && mock[f].fields[i].options) {
    //                        mock[f].fields[i].options = field.options;
    //                    }
    //                    return mock[f].fields[i];
    //                }
    //            }
    //        }
    //    }
    //}


};