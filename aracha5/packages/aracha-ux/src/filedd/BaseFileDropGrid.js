Ext.define('Aracha.filedd.BaseFileDropGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.filedd-base-grid',

    requires: [
        'Aracha.filedd.plugin.FileDropZone',
        'Ext.grid.column.Date'
    ],

    plugins: ['filedropzone'],

    emptyText: 'Drop files here',

    bind: {
        store: '{files}'
    },

    columns: [
        {
            text        : 'Name',
            flex        : 1,
            dataIndex   : 'name'
        },
        {
            text        : 'URL',
            flex        : 1,
            hidden      : true,
            dataIndex   : 'url'
        },
        {
            text        : 'Kind',
            width       : 120,
            dataIndex   : 'type'
        },
        {
            text        : 'Size',
            width       : 120,
            dataIndex   : 'size',
            align       : 'right',
            renderer: function (value, meta, rec) {
                return rec.get('osSmartSize');
            }
        },
        {
            xtype       : 'datecolumn',
            text        : 'Date Modified',
            width       : 180,
            dataIndex   : 'lastModifiedDate',
            format      : 'M j Y, g:i A'
        }

    ],

    listeners: {
        filedrop: 'onFileDrop'
    }
});
