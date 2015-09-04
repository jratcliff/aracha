Ext.define('Aracha.filedd.model.File', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.util.Format'
    ],

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'size',
            type: 'float'
        },
        {
            name    : 'osSizeKB',
            type    : 'float',
            persist : false,
            convert: function (val, rec) {
                var size = rec.get('size');

                if (Ext.isMac) {
                    return size / 1000;
                }
                return size / 1024;
            }
        },
        {
            name    : 'osSizeMB',
            type    : 'float',
            persist : false,
            convert: function (val, rec) {
                var size = rec.get('size');

                if (Ext.isMac) {
                    return (size / 1000) / 1000;
                }
                return (size / 1024) / 1024;
            }
        },
        {
            name    : 'osSmartSize',
            type    : 'string',
            persist : false,
            convert: function (val, rec) {
                var size = rec.get('size'),
                    round = Ext.util.Format.round,
                    retVal;

                // OS X shows KB, MB and GB rounded to 1 decimal in the Size column of Finder
                // and note that 1 KB = 1000 Bytes on a Mac starting with Snow Leopard
                // http://en.wikipedia.org/wiki/Gigabyte#Definition
                if (Ext.isMac) {
                    if (size < 1000000) {
                        retVal = round(rec.get('osSizeKB'), 0) + ' KB';
                    } else {
                        retVal = round(rec.get('osSizeMB'), 1) + ' MB';
                    }
                }
                // for windows and everyone else (for now) just return KB
                else {
                    retVal = round(rec.get('osSizeKB'), 0) + ' KB';
                }

                return retVal;
            }
        },
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'lastModifedDate',
            type: 'date'
        },
        {
            name: 'url',
            type: 'string'
        }
    ]
});
