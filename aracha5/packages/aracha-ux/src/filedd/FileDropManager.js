Ext.define('Aracha.filedd.FileDropManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.filedd-manager',

    requires: [
        'Aracha.filedd.FileDropModel',
        'Aracha.filedd.FileDropController',

        'Aracha.filedd.FileDropGrid',
        'Aracha.filedd.FileDropDataView'
    ],

    controller: 'filedd',
    viewModel: {
        type: 'filedd'
    },

    layout: 'card',

    dockedItems: [{
        xtype   : 'toolbar',
        dock    : 'top',
        items: [
            {
                buttonText  : 'Add File(s)',
                xtype       : 'filefield',
                buttonOnly  : true,
                name        : 'files',
                multiSelect : true,
                listeners: {
                    selectionchange: 'onFileButtonSelectionChange'
                }
            },
            '->',
            {
                iconCls : 'x-btn-glyph fa fa-list-alt',
                itemId  : 'grid',
                handler : 'toggleFileDropView'
            },
            {
                iconCls : 'x-btn-glyph fa fa-th',
                itemId  : 'dataview',
                handler : 'toggleFileDropView'
            }
        ]
    }],

    items: [
        {
            xtype       : 'filedd-base-grid',
            itemId      : 'grid'
        },
        {
            xtype       : 'filedd-base-dataview',
            itemId      : 'dataview'
        }
    ]

});
