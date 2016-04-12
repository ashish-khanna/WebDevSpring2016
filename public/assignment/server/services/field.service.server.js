/**
 * Created by Ashish on 3/19/2016.
 */
module.exports = function(app, formModel, fieldModel) {
    app.get("/api/assignment/form/:formId/field", getFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldFromForm);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);
    app.get("/api/assignment/field/:fieldType", getFieldTemplateType);

    function getFieldsForForm(req, res) {
        var formId = req.params.formId;
        formModel.getFieldsForForm(formId)
            .then(
                function(form) {
                    res.json(form.fields.id(req.params.fieldId));
                },
                function(err) {
                    res.status(400).send(err);
                });
    }

    function getFieldTemplateType(req, res) {
        var fieldType = req.params.fieldType;
        var field = formModel.getFieldTemplateType(fieldType);
        res.json(field);
    }

    function getFieldForForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = formModel.getFieldForForm(formId, fieldId);
        res.json(field);
    }

    function deleteFieldFromForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var forms = formModel.deleteFieldFromForm(formId, fieldId);
        res.json(forms);
    }

    function createFieldForForm(req, res) {
        var formId = req.params.formId;
        var field = req.body;
        var forms = formModel.createFieldForForm(formId, field);
        res.json(forms);
    }

    function updateField(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        var forms = formModel.updateField(formId, fieldId, field);
        res.json(forms);
    }
};