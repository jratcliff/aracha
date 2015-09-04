/**
 * Plugin that makes a container a valid drop zone for files that
 * are dragged and dropped from a person's desktop to the container.
 *
 * When files are dropped onto the container a 'filedrop' event is fired
 * with the continaer and the files passed as arguments to any listeners.
 */
Ext.define('Aracha.filedd.plugin.FileDropZone', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.filedropzone',

    mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor: function(config) {
        var me = this;

        me.callParent([config]);
        me.mixins.observable.constructor.call(me);
    },

    init: function (cmp) {
        var me = this;

        me.cmp = cmp;

        //debugger;
        cmp.relayEvents(me, ['filedrop']);

        // if a locked grid we relay the events to the other side as well
        if (cmp.ownerLockable) {
            cmp.ownerLockable.relayEvents(me, me.relayedEvents);
        }

        // if an html editor
        if (cmp.xtype === 'htmleditor') {
            cmp.on({
                scope: me,
                initialize: me.addHtmlEditorFileDragDropListeners
            });
        }
        // all other components
        else {
            cmp.on({
                scope       : this,
                element     : 'el',
                dragenter   : me.onDragEnter,
                dragover    : me.onDragOver,
                drop        : me.onDrop
            });
        }

    },

    /**
     * Have to define the listeners a bit differently for the HtmlEditor
     * since it is in an iframe
     *
     * TODO - Have Doug look/fix this
     */
    addHtmlEditorFileDragDropListeners: function (htmlEditor) {
        var me = this,
            doc = htmlEditor.getDoc(),
            docEl = Ext.get(doc);

        // this WORKS
        doc.ondragenter = Ext.bind(me.onDragEnter, me);
        doc.ondragover = Ext.bind(me.onDragOver, me);
        doc.ondrop = Ext.bind(me.onDrop, me);

        // but this does NOT work
        docEl.on({
            scope       : me,
            dragenter   : me.onDragEnter,
            dragover    : me.onDragOver,
            drop        : me.onDrop
        });

    },

    onDragEnter: function (e) {
        console.log('onDragEnter');
        e.stopPropagation();
        e.preventDefault();
    },

    onDragOver: function (e) {
        console.log('onDragOver');
        e.stopPropagation();
        e.preventDefault();
    },

    onDrop: function (e) {
        console.log('onDrop');
        e.stopPropagation();
        e.preventDefault();

        var browserEvent = e.browserEvent || e,
            dt = browserEvent.dataTransfer,
            files = dt.files;

        this.fireEvent('filedrop', this.cmp, files);
    }
});
