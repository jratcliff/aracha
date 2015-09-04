Ext.define('overrides.form.field.HtmlEditor', {
    override: 'Ext.form.field.HtmlEditor',

    enableInsertImage: true,
    insertImageTipCfg: {
        title   : 'Insert Image',
        text    : 'Insert an Image',
        cls     : Ext.baseCSSPrefix + 'html-editor-tip'
    },


    /**
     * override that adds the 'insert image' toolbar button
     * TODO ask the framework guys to refactor their version of this method
     * to make it easier to add custom buttons.
     */
    getToolbarCfg: function(){
        var me = this,
            tipsEnabled = Ext.quickTipsActive && Ext.tip.QuickTipManager.isEnabled(),
            baseCSSPrefix = Ext.baseCSSPrefix,
            undef,
            toolbar;

        function btn(id, toggle, handler){
            return {
                itemId: id,
                cls: baseCSSPrefix + 'btn-icon',
                iconCls: baseCSSPrefix + 'edit-'+id,
                enableToggle:toggle !== false,
                scope: me,
                handler:handler||me.relayBtnCmd,
                clickEvent: 'mousedown',
                tooltip: tipsEnabled ? me.buttonTips[id] || undef : undef,
                overflowText: me.buttonTips[id].title || undef,
                tabIndex: -1
            };
        }

        // get current toolbar config
        toolbar = me.callParent(arguments);

        // add the insert image button if enabled
        if (me.enableInsertImage) {
            // add insertImage buttonTip config
            me.buttonTips.insertimage = me.insertImageTipCfg;
            // and push the button onto the toolbar
            toolbar.items.push(Ext.apply(btn('insertimage', false, Ext.emptyFn), {
                xtype: 'filebutton',
                iconCls: Ext.baseCSSPrefix + 'tree-icon-leaf', // just borrow this icon for now
                listeners: {
                    scope: me,
                    change: me.onInsertImageChange
                }
            }));
        }

        // change the listeners config to allow the filebutton to work
        toolbar.listeners = {
            click   : me.onToolbarClick,
            scope   : me,
            element : 'el'
        };
        return toolbar;
    },

    /**
     * the overridden toolbar click listener that does NOT call e.preventDefault()
     * for a filebutton so that the filebutton will actually work and prompt the user
     * to select file(s) from their device
     */
    onToolbarClick: function (e, item) {
        var el = Ext.get(item),
            component = el.component;

        if (component.xtype !== 'filebutton') {
            e.preventDefault();
        }
    },

    insertImage: function (url) {
        this.relayCmd('insertImage', url);
    },

    /**
     * Processes the file(s) selected by the user and calls the insertImage method
     * to insert the image into the HtmlEditor
     */
    onInsertImageChange: function (fileField, e) {
        var files = fileField.fileInputEl.dom.files,
            imageType = /^image\//,
            filesLen = files.length,
            file,
            url,
            i;

        for (i = 0; i < filesLen; i++) {
            file = files[i];

            if (!imageType.test(file.type)) {
                continue;
            }

            url = window.URL.createObjectURL(file);
            this.insertImage(url);
        }
    }
});
