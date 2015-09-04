Ext.define('Aracha.filedd.BaseFileDropDataView', {
    extend: 'Ext.view.View',
    alias: 'widget.filedd-base-dataview',

    requires: [
        'Aracha.filedd.plugin.FileDropZone'
    ],

    plugins: ['filedropzone'],
    scrollable: true,

    bind: {
        store: '{files}'
    },

    itemSelector: 'div.thumb-wrap',
    emptyText: 'Drop files here',
    deferEmptyText: false,

    tpl: '<tpl for=".">' +
            '<div class="thumb-wrap">' +
                '<div class="thumbnail" style="background-image: url({url});" title="{name}"></div>' +
                '<div class="name">{name}</div>' +
            '</div>' +
         '</tpl>',

    listeners: {
        filedrop: 'onFileDrop',
        itemdblclick: 'onThumbnailDblClick'
    }

});
