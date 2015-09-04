Ext.define('Aracha.filedd.FileDropDataView', {
    extend: 'Aracha.filedd.BaseFileDropDataView',
    alias: 'widget.filedd-dataview',

    requires: [
        'Aracha.filedd.FileDropModel',
        'Aracha.filedd.FileDropController'
    ],

    controller: 'filedd',
    viewModel: {
        type: 'filedd'
    }

});
