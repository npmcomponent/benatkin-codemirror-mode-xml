var codemirror = require('codemirror');
require('codemirror-mode-xml')(codemirror);
var textarea = document.getElementById('source');
codemirror.fromTextArea(textarea);
