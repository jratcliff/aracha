/**
 * View Model for FileDrop
 */
Ext.define('Aracha.filedd.FileDropModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.filedd',

    requires: [
        'Aracha.filedd.model.File'
    ],

    stores: {
        files: {
            model: 'Aracha.filedd.model.File'
        }
    }

});
