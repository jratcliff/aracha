Ext.define('KitchenSink.view.aracha.FileDropDataView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.aracha-fileuploads-dataview',

    requires: [
        'Aracha.filedd.FileDropDataView'
    ],

    layout  : 'fit',
    frame   : true,
    title   : 'Thumbnail(s)',

    width   : 700,
    height  : 500,

    resizable: true,
    draggable: true,

    items:[{
        xtype: 'filedd-dataview'
    }]
});