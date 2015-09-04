Ext.define('Aracha.filedd.FileDropController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.filedd',

    requires: [
        'Ext.window.Window'
    ],

    useFileReader: false,

    onFileButtonSelectionChange: function (fieldField, e, files) {
        this.handleFiles(fieldField, files);
    },

    onFileButtonChange: function (fieldField, e, files) {
        this.handleFiles(fieldField, files);
    },

    onFileDrop: function (dropZoneCt, files) {
        this.handleFiles(dropZoneCt, files);
    },

    handleFiles: function (dropZoneCt, files) {
        var me = this;

        if (me.useFileReader) {
            me.onFileDropWithReader(dropZoneCt, files);
        } else {
            me.onFileDropWithCreateObjectURL(dropZoneCt, files);
        }
    },

    // much slower than using createObjectURL
    onFileDropWithReader: function (dropZoneCt, files) {
        var me = this,
            viewModel = me.getViewModel(),
            fileStore = viewModel.get('files'),
            imageType = /^image\//,
            filesLen = files.length,
            file,
            rec,
            reader,
            i;

        for (i = 0; i < filesLen; i++) {
            file = files[i];

            rec = fileStore.add({
                file: file,
                name: file.name,
                size: file.size,
                type: file.type,
                lastModifiedDate: file.lastModifiedDate
            });

            if (imageType.test(file.type)) {
                reader = new FileReader();
                reader.onload = Ext.bind(this.onFileLoadForReader, this, [rec[0]], true);
                reader.readAsDataURL(file);
            }
        }
    },

    // works with above onFileDropWithReader method and is the load listener
    // for when the reader calls readAsDataURL method
    onFileLoadForReader: function (e, rec) {
        rec.set('url', e.target.result);
        rec.commit();
    },

    // uses the window.URL.createObjectURL method which seems MUCH faster than using
    // a FileReader to read the file and create a data url
    onFileDropWithCreateObjectURL: function (dropZoneCt, files) {
        var me = this,
            viewModel = me.getViewModel(),
            fileStore = viewModel.get('files'),
            imageType = /^image\//,
            filesLen = files.length,
            file,
            rec,
            url,
            i;

        for (i = 0; i < filesLen; i++) {
            file = files[i];

            if (imageType.test(file.type)) {
                url = window.URL.createObjectURL(file);
            }


            rec = fileStore.add({
                name            : file.name,
                size            : file.size,
                type            : file.type,
                lastModifiedDate: file.lastModifiedDate,
                url             : url
            });

            if (dropZoneCt.xtype === 'htmleditor' && url !== undefined) {
                //debugger;
                dropZoneCt.insertImage(url);
            }
        }
    },

    toggleFileDropView: function (btn) {
        var dropMgrPanel = btn.up('filedd-manager'),
            layout = dropMgrPanel.getLayout();

        layout.setActiveItem(btn.itemId);
    },

    onThumbnailDblClick: function (dataview, rec) {
        var vpSize = Ext.getBody().getSize();

        Ext.create('Ext.window.Window', {
            title   : 'Image ' + rec.data.name,
            width   : vpSize.width * 0.70,
            height  : vpSize.height * 0.70,
            layout  : 'fit',
            tpl     : '<div class="full" style="background-image: url({url});" title="{name}">{name}</div>',
            data    : rec.data
        }).show();
    }
});
