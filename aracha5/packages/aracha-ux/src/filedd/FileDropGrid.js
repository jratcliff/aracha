Ext.define('Aracha.filedd.FileDropGrid', {
    extend: 'Aracha.filedd.BaseFileDropGrid',
    alias: 'widget.filedd-grid',

    requires: [
        'Aracha.filedd.FileDropModel',
        'Aracha.filedd.FileDropController'
    ],

    controller: 'filedd',
    viewModel: {
        type: 'filedd'
    }

});
