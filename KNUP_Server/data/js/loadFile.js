function loadFile(idx) {
    form = "print" + idx
    console.log(form)
    var gsWin = window.open('about:blank', form);
    var frms = document.forms;
    var frm = frms[idx]
    frm.action = '/api/print/preview';
    frm.target = form;
    frm.method = "post";
    frm.submit();
}