/**
 * Commands.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Dialog from '../ui/Dialog';

var register = function (editor, headState) {
  editor.addCommand('mceFullPageProperties', function () {
    Dialog.open(editor, headState);
  });
};

export default <any> {
  register: register
};